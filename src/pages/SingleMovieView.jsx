import { Col, Container, Row, Spinner } from "react-bootstrap";
import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SingleItemThunk } from "../services/actions/MovieAct";

const SingleMovie = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const { movie } = useSelector(state => state.MovieReducer);

    useEffect(() => {
        dispatch(SingleItemThunk(id));
    }, [id]);

    return (
        <>
            <section className="flex items-center justify-center !h-[calc(100vh-8rem)] sm:h-[calc(100vh-8rem)] overflow-y-scroll">
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
                                            <ul className="flex flex-wrap space-x-4 md:space-x-8 text-gray-400 m-0 p-0">
                                                <li>{movie.releaseYear}</li>
                                                <li>{movie.runningTime} Min</li>
                                                <li>{movie.quality}</li>
                                            </ul>
                                            <div >
                                                <fieldset className="rating">
                                                    {[...Array(10)].map((_, i) => (
                                                        <React.Fragment key={i}>
                                                            <input type="radio" id={`star${10 - i}`} name="rating" value={10 - i} className="hidden" />
                                                            <label htmlFor={`star${10 - i}`} className="text-gray-400 cursor-pointer text-xl hover:text-[#344a70]">
                                                                &#9733;
                                                            </label>
                                                        </React.Fragment>
                                                    ))}
                                                </fieldset>
                                            </div>
                                            <p className="text-white text-sm leading-6">{movie.description}</p>

                                            <a href="https://www.imdb.com/title/tt0111161/" target="_blank" rel="noopener noreferrer" className="text-[#304569] no-underline !inline-block">Read more</a>
                                            <a href="https://www.youtube.com/watch?v=ot6C1ZKyiME" target="_blank" rel="noopener noreferrer" className="inline-block  border-2 border-[#151f30] bg-[#1a263b] py-2 px-6 rounded-lg hover:bg-[#151f30] text-white transition duration-300 text-center no-underline"> WATCH TRAILER</a>
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