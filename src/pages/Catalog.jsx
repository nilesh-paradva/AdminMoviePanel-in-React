import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DeleteItemThunk, getMoviesThunk, MenuNameAct } from "../services/actions/MovieAct";
import { Button } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import LoadingIcon from "../assets/images/loadingIcon/catalog.gif"
import "../index.css";

const Catalog = () => {
    const { movies, isLoading } = useSelector((state) => state.MovieReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const DeleteItem = (id) => {
        dispatch(DeleteItemThunk(id));
    };

    const handleName = (name) => {
        dispatch(MenuNameAct(name));
    };

    useEffect(() => {
        if (location.pathname === '/catalog') {
            handleName('Catalog');
        } 
    }, [location.pathname]);

    useEffect(() => {
        dispatch(getMoviesThunk());
    }, []);

    return (
        <section className="catalog !h-[calc(100vh-8rem)] sm:h-[calc(100vh-8rem)] overflow-y-scroll scroll">
            <Container className="xl:!max-w-[1140px]">
                <Row className="gap-y-7 !mb-20">
                    {isLoading ? <div className="flex justify-center items-center !h-[calc(100vh-8rem)] sm:h-[calc(100vh-8rem)] overflow-hidden"> <img src={LoadingIcon} alt="Loading" className="!w-[30%]" /></div> :

                        movies.length === 0 ? <h2 className="text-center text-gray-400">No movies found</h2> :

                        movies.map((item) => (
                            <Col lg={4} key={item.id}>
                                <div className="bg-[#1f2a3d] text-white rounded-lg shadow-md p-4 flex flex-col justify-around h-full transition-transform transform hover:scale-105 hover:shadow-lg mt-8">
                                    <div className=" h-[40%] overflow-hidden rounded-lg">
                                        <img src={item.coverImage} alt={item.title} className=" object-cover rounded-lg" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2 hover:text-[#3498db] transition-colors">{item.title}</h3>
                                        <p className="text-sm text-gray-400 hover:text-gray-300 transition-colors mb-3">{item.description}</p>
                                        <p className="text-sm mb-2 hover:text-[#3498db] transition-colors flex items-center justify-between"><strong>Category:</strong> {item.itemType}</p>
                                        <p className="text-sm mb-2 hover:text-[#3498db] transition-colors flex items-center justify-between"><strong>Release Year:</strong> {item.releaseYear}</p>
                                        <p className="text-sm mb-2 hover:text-[#3498db] transition-colors flex items-center justify-between"><strong>Genre:</strong> {item.genre}</p>
                                        <p className="text-sm mb-2 hover:text-[#3498db] transition-colors flex items-center justify-between"><strong>Country:</strong> {item.country}</p>
                                    </div>
                                    <div className="flex justify-between mt-3">
                                        <Button aria-label="Edit movie" onClick={() => { navigate(`/edititem/${item.id}`); handleName("Edit Movie") }} className="bg-[#435b85] hover:bg-[#354c6b] text-white p-2 rounded-full transition-colors"><EditIcon /></Button>
                                        <Button aria-label="Delete movie" onClick={() => DeleteItem(item.id)} className="bg-[#e74c3c] hover:bg-[#c0392b] text-white p-2 rounded-full transition-colors"><DeleteIcon /></Button>
                                        <Button aria-label="View movie" className="bg-[#2ecc71] hover:bg-[#27ae60] text-white p-2 rounded-full transition-colors" onClick={() => navigate(`/singleviewmovie/${item.id}`)}><RemoveRedEyeIcon /></Button>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Catalog;