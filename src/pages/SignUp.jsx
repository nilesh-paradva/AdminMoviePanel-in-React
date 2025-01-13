import { Alert, Button, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ErrorAct, isOpenAct, SignUpThunk } from "../services/actions/AuthAction";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

    const { isLoading, isCreated, Error, isOpen } = useSelector(state => state.AuthReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [signUp, setsignUp] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleChange = (e) => {
        setsignUp({ ...signUp, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (signUp.password !== signUp.confirmPassword) {
            dispatch(ErrorAct("Password and Confirm Password should be the same."));
            dispatch(isOpenAct(true));
            return;
        }

        dispatch(SignUpThunk(signUp));
    };

    useEffect(() => {
        if (isCreated) {
            navigate("/signin")
        }
    }, [isCreated])

    return (
        <>
            <Snackbar open={isOpen} autoHideDuration={6000} onClose={() => dispatch(isOpenAct(false))} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={() => dispatch(isOpenAct(false))} severity="error">
                    {Error}
                </Alert>
            </Snackbar>
            <section className="flex justify-center items-center bg-[url('assets/images/authimage/bg.jpg')] bg-cover rounded-lg h-screen">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={5}>
                            <div className="w-full p-8 bg-[#131720] shadow-md rounded-lg border-2 border-[#151f2f]">
                                <div className="text-center mb-6">
                                    <h2 className="text-3xl font-bold text-white">Flix<span className="text-[14px] text-[#384e73] ms-1">TV</span></h2>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Full Name</label>
                                        <input type="text" id="name" name="name" value={signUp.name} placeholder="Enter Your Full Name" className="mt-2 block bg-transparent w-full px-4 py-2 border-2 text-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none" onChange={handleChange} />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
                                        <input type="email" id="email" name="email" value={signUp.email} placeholder="Enter Your Email" className="mt-2 block bg-transparent w-full px-4 py-2 border-2 text-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none" onChange={handleChange} />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                                        <input type="password" id="password" name="password" value={signUp.password} placeholder="Enter Your Password" className="mt-2 block w-full bg-transparent px-4 py-2 text-white border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none" onChange={handleChange} />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">Confirm Password</label>
                                        <input type="password" id="confirmPassword" name="confirmPassword" value={signUp.confirmPassword} placeholder="Confirm Your Password" className="mt-2 block w-full bg-transparent px-4 py-2 text-white border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none" onChange={handleChange} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-white text-center">Already have an account? <Link to={"/signin"} className="text-indigo-600 hover:underline">Sign In!</Link></p>
                                        <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">{isLoading ? "Sign Up..." : "Sign Up"}</button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default SignUp;