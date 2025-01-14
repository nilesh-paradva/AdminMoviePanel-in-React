import { Col, Container, Row, Spinner } from "react-bootstrap";
import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MenuNameAct, SingleItemThunk } from "../services/actions/MovieAct";

const SingleMovie = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const { movie } = useSelector(state => state.MovieReducer);

    const handleName = (name) => {
        dispatch(MenuNameAct(name));
    };

    useEffect(() => {
        dispatch(SingleItemThunk(id));
    }, [id]);

    useEffect(() => {
        if (location.pathname === `/singleviewmovie/${id}`) {
            handleName('View Movie');
        }
    }, [location.pathname]);

    return (
        <>
            <section className="flex items-center justify-center !h-[calc(100vh-8rem)] sm:h-[calc(100vh-8rem)] overflow-y-scroll scroll">
                <Container>
                    <Row className="!mt-[35rem] sm:!mt-[40rem] md:!mt-[0rem]">
                        <Col lg={12}>
                            {!movie ?
                                <div className="text-center">
                                    <Spinner animation="border" variant="primary" />
                                    <p>Loading Single View Recipes...</p>
                                </div> :
                                <div className="flex items-center justify-center min-h-screen">
                                    <div className="w-full max-w-4xl flex flex-col md:flex-row shadow-2xl rounded-lg overflow-hidden">
                                        <div className="w-full md:w-2/5">
                                            <img src={movie.coverImage} alt="Kill Bill" className=" w-full  md:h-full" />
                                        </div>
                                        <div className="w-full md:w-3/5 bg-[#101827] p-6 flex flex-col justify-between">
                                            <h1 className="text-white text-3xl md:text-4xl font-semibold">{movie.title}</h1>
                                            <ul className="flex flex-wrap space-x-4 md:space-x-8 text-gray-400 m-0 p-0 mb-3">
                                                <li>{movie.releaseYear}</li>
                                                <li>{movie.runningTime} Min</li>
                                                <li>{movie.quality}</li>
                                            </ul>
                                            <p className="text-white text-sm leading-6">{movie.description} <Link href="javascript:void(0)"  rel="noopener noreferrer" className="text-[#3a537c] no-underline !inline-block mb-3">Read more...</Link></p>
                                            <a href={movie.link} target="_blank" rel="noopener noreferrer" className="inline-block  border-2 border-[#151f30] bg-[#1a263b] py-2 px-6 rounded-lg hover:bg-[#151f30] text-white transition duration-300 text-center no-underline"> WATCH MOVIE</a>
                                        </div>
                                    </div>
                                </div>
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default SingleMovie;