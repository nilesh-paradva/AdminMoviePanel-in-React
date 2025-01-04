import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MovieAddThunk } from "../services/actions/MovieAct";
import { useNavigate } from "react-router-dom";

const AddItems = () => {

    const { isCreated, isLoading } = useSelector((state) => state.MovieReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formInput, setFormInput] = useState({
        title: "",
        description: "",
        releaseYear: "",
        runningTime: "",
        quality: "",
        age: "",
        country: "",
        genre: "",
        itemType: "",
        link: "",
        coverImage: ""
    });

    const handleChange = (e) => {
        setFormInput({ ...formInput, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(MovieAddThunk(formInput));
    }

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (!file || file.size > 2097152) return alert('File size must be less than 2MB');

        const reader = new FileReader();
        reader.onload = ({ target }) => {
            const img = new Image();
            img.src = target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const ratio = Math.min(800 / img.width, 600 / img.height, 1);

                canvas.width = img.width * ratio;
                canvas.height = img.height * ratio;

                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                setFormInput((prev) => ({
                    ...prev,
                    coverImage: canvas.toDataURL('image/jpeg', 0.8),
                }));
            };
        };
        reader.readAsDataURL(file);
    };

    useEffect(() => {
        if (isCreated) {
            navigate("/catalog");
        }
    }, [isCreated])

    return (
        <section className="bg-[#131720] flex justify-center  !h-[calc(100vh-8rem)] sm:h-[calc(100vh-8rem)]  items-center bg-cover rounded-lg overflow-y-scroll scroll">
            <Container>
                <Row className="items-center !mt-[50rem] sm:!mt-[50rem] !mb-[3rem]">
                    <form onSubmit={handleSubmit}>
                        <Col lg={12} className="flex items-center flex-wrap flex-col">
                            <Col lg={3} className="flex items-center justify-center flex-col w-full">
                                <div className="w-full">
                                    <label htmlFor="file-upload" className="block mb-2 text-white">Upload Cover</label>
                                    <div className="relative w-full">
                                        <input type="file" id="file-upload" className="hidden" onChange={handleImage} />
                                        <label htmlFor="file-upload" className="cursor-pointer flex h-[320px] w-full items-center justify-center py-2 border-2 border-dashed border-gray-500 rounded-lg bg-[#151f30] text-white hover:border-blue-400 hover:bg-[#1e293b] focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <span className="mr-2 block">📁</span> Upload Cover
                                        </label>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-400 text-center">
                                        PNG, JPG, GIF up to 1MB
                                    </p>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <div className="mb-4">
                                    <label htmlFor="title" className="block mb-2 text-white">Title</label>
                                    <input type="text" id="title" name="title" value={formInput.title} className="w-full p-2 rounded bg-[#151f30] text-white placeholder-[#b1a6a6] focus:border-blue-500 focus:outline-none" placeholder="Enter title" onChange={handleChange} />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="description" className="block mb-2 text-white">Description</label>
                                    <textarea id="description" name="description" value={formInput.description} className="w-full p-2 rounded bg-[#151f30] text-white placeholder-[#b1a6a6] focus:border-blue-500 focus:outline-none resize-none" placeholder="Enter description" onChange={handleChange}></textarea>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="mb-4">
                                        <label htmlFor="releaseYear" className="block mb-2 text-white">Release Year</label>
                                        <input type="number" id="releaseYear" name="releaseYear" value={formInput.releaseYear} className="w-full p-2 rounded bg-[#151f30] text-white placeholder-[#b1a6a6] focus:border-blue-500 focus:outline-none" placeholder="Enter release year" onChange={handleChange} />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="runningTime" className="block mb-2 text-white">Running Time (min)</label>
                                        <input type="number" id="runningTime" name="runningTime" value={formInput.runningTime} className="w-full p-2 rounded bg-[#151f30] text-white placeholder-[#b1a6a6] focus:border-blue-500 focus:outline-none" placeholder="Enter running time" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="quality" className="block mb-2 text-white">Quality</label>
                                    <select id="quality" name="quality" value={formInput.quality} className="w-full p-2 rounded bg-[#151f30] text-white focus:border-blue-500 focus:outline-none" onChange={handleChange}>
                                        <option>HD</option>
                                        <option>Full HD</option>
                                    </select>
                                </div>
                            </Col>
                        </Col>
                        <Col lg={12}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label htmlFor="age" className="block mb-2 text-white">Age</label>
                                    <input type="text" id="age" name="age" value={formInput.age} className="w-full p-2 rounded bg-[#151f30] text-white placeholder-[#b1a6a6] focus:border-blue-500 focus:outline-none" placeholder="Enter age" onChange={handleChange} />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="country" className="block mb-2 text-white">Country</label>
                                    <input type="text" id="country" name="country" value={formInput.country} className="w-full p-2 rounded bg-[#151f30] text-white placeholder-[#b1a6a6] focus:border-blue-500 focus:outline-none" placeholder="Enter country" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="genre" className="block mb-2 text-white">Genre</label>
                                <input type="text" id="genre" name="genre" value={formInput.genre} className="w-full p-2 rounded bg-[#151f30] text-white placeholder-[#b1a6a6] focus:border-blue-500 focus:outline-none" placeholder="Enter genre" onChange={handleChange} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="itemType" className="block mb-2 text-white">Item Type</label>
                                <div className="flex items-center space-x-6">
                                    <label htmlFor="movie" className="flex items-center cursor-pointer">
                                        <input type="radio" id="movie" name="itemType" value="movie" checked={formInput.itemType === 'movie'} className="hidden peer" onChange={handleChange} />
                                        <div className="w-5 h-5 mr-3 border-2 bg-[#151f30] peer-checked:bg-[#909eb5] rounded-full peer-checked:border-blue-500 transition"></div>
                                        <span className="text-white">Movie</span>
                                    </label>
                                    <label htmlFor="tvshow" className="flex items-center cursor-pointer">
                                        <input type="radio" id="tvshow" name="itemType" value="tvshow" checked={formInput.itemType === 'tvshow'} className="hidden peer" onChange={handleChange} />
                                        <div className="w-5 h-5 mr-3 border-2 bg-[#151f30] peer-checked:bg-[#909eb5] rounded-full peer-checked:border-blue-500 transition"></div>
                                        <span className="text-white">TV Show</span>
                                    </label>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="flex justify-center items-start flex-col">
                                    <label htmlFor="fileInput" className="text-white mb-2">Upload Video</label>
                                    <label htmlFor="fileInput" className="bg-[#151f30] !w-full text-[#b1a6a6] px-4 py-2 rounded cursor-pointer hover:bg-[#1f2b40] active:bg-[#122030] transition">Upload Video</label>
                                    <input type="file" id="fileInput" className="hidden" />
                                </div>
                                <div>
                                    <label htmlFor="link" className="block mb-2 text-white">Or Link</label>
                                    <input type="text" id="link" name="link" value={formInput.link} className="w-full p-2 rounded bg-[#151f30] text-white placeholder-[#b1a6a6] focus:border-blue-500 focus:outline-none" placeholder="https://" onChange={handleChange} />
                                </div>
                            </div>
                        </Col>
                        <div className="text-right">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">{isLoading ? "Publishing..." : "Publish"}</button>
                        </div>
                    </form>
                </Row>
            </Container>
        </section>
    );
};

export default AddItems;