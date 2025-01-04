// import { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { useParams } from "react-router-dom";
// // import { SingleUserThunk } from "../services/actions/MovieAct";
// import { useDispatch, useSelector } from "react-redux";
// import { SingleUserThunk, UpdateProfileThunk } from "../services/actions/AuthAction";
// import { use } from "react";

// const EditProfile = () => {
//     const { admin } = useSelector((state) => state.AuthReducer);
//     console.log("user", admin);

//     const dispatch = useDispatch();
//     const { id } = useParams();
//     console.log("id", id);

//     const [formInput, setFormInput] = useState({
//         displayName: "",
//         bio: "",
//         address: "",
//         phoneNumber: "",
//         country: "",
//         profilePicture: "",
//     });

//     const handleChange = (e) => {
//         setFormInput({ ...formInput, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("formInput", formInput);
//         // Uncomment to dispatch update action
//         const updatedFormInput = {
//             ...formInput,
//             uid: admin?.uid 
//         };
//         dispatch(UpdateProfileThunk(updatedFormInput));  
//     };

//     useEffect(() => {
//         dispatch(SingleUserThunk(id));
//     }, [id]);

//     useEffect(() => {
//         if (admin) {
//             setFormInput(admin);
//         }
//     }, [admin]);

//     return (
//         <section className="bg-[#131720] flex justify-center h-[calc(100vh-11.2rem)] sm:h-[calc(100vh-8rem)] items-center bg-cover rounded-lg overflow-y-scroll scroll">
//             <Container>
//                 <Row className="items-center !mt-[10rem] !mb-4 sm:!mt-[15rem]">
//                     <form onSubmit={handleSubmit}>
//                         <Col lg={12}>
//                             <div className="mb-4">
//                                 <label htmlFor="name" className="block mb-2 text-white">Name</label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     name="displayName"
//                                     value={formInput.displayName}
//                                     className="w-full p-2 rounded bg-[#151f30] text-white placeholder-[#b1a6a6] focus:border-blue-500 focus:outline-none"
//                                     placeholder="Enter your name"
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="bio" className="block mb-2 text-white">Bio</label>
//                                 <textarea
//                                     id="bio"
//                                     name="bio"
//                                     value={formInput.bio}
//                                     className="w-full p-2 rounded bg-[#151f30] text-white placeholder-[#b1a6a6] focus:border-blue-500 focus:outline-none resize-none"
//                                     placeholder="Write your bio"
//                                     onChange={handleChange}
//                                 ></textarea>
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="phoneNumber" className="block mb-2 text-white">Phone Number</label>
//                                 <input
//                                     type="text"
//                                     id="phoneNumber"
//                                     name="phoneNumber"
//                                     value={formInput.phoneNumber}
//                                     className="w-full p-2 rounded bg-[#151f30] text-white placeholder-[#b1a6a6] focus:border-blue-500 focus:outline-none"
//                                     placeholder="Enter your phone number"
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="Address" className="block mb-2 text-white">Address</label>
//                                 <textarea
//                                     id="Address"
//                                     name="address"
//                                     value={formInput.address}
//                                     className="w-full p-2 rounded bg-[#151f30] text-white placeholder-[#b1a6a6] focus:border-blue-500 focus:outline-none resize-none"
//                                     placeholder="Write your address"
//                                     onChange={handleChange}
//                                 ></textarea>
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="country" className="block mb-2 text-white">Country</label>
//                                 <input
//                                     type="text"
//                                     id="country"
//                                     name="country"
//                                     value={formInput.country}
//                                     className="w-full p-2 rounded bg-[#151f30] text-white placeholder-[#b1a6a6] focus:border-blue-500 focus:outline-none"
//                                     placeholder="Enter your country"
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="file-upload" className="block mb-2 text-white">Profile Picture</label>
//                                 <div className="relative w-full">
//                                     <input
//                                         type="file"
//                                         id="file-upload"
//                                         className="hidden"
//                                         onChange={(e) =>
//                                             setFormInput({ ...formInput, profilePicture: e.target.files[0] })
//                                         }
//                                     />
//                                     <label
//                                         htmlFor="file-upload"
//                                         className="cursor-pointer flex items-center justify-center w-full py-2 border-2 border-dashed border-gray-500 rounded-lg bg-[#151f30] text-white hover:border-blue-400 hover:bg-[#1e293b] focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                     >
//                                         <span className="mr-2">📁</span> Upload profile image
//                                     </label>
//                                 </div>
//                                 <p className="mt-2 text-sm text-gray-400">
//                                     PNG, JPG up to 2MB
//                                 </p>
//                             </div>
//                         </Col>
//                         <div className="text-right">
//                             <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
//                                 Update Profile
//                             </button>
//                         </div>
//                     </form>
//                 </Row>
//             </Container>
//         </section>
//     );
// };

// export default EditProfile;