import { Col, Container, Row } from "react-bootstrap"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AddIcon from '@mui/icons-material/Add';
import CommentIcon from '@mui/icons-material/Comment';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { useNavigate } from "react-router-dom";
import { getMoviesThunk } from "../services/actions/MovieAct";

const Home = () => {

    const dispatch = useDispatch();
    const { movies } = useSelector(state => state.MovieReducer);
    const { admin } = useSelector((state) => state.AuthReducer);
    console.log("all movies", movies);
    
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(getMoviesThunk());
    }, []);

    useEffect(() => {
        if (!admin) {
            navigate('/signin')
        }
    }, [admin])


    return(
        <>
            <section>
                <Container>
                    <Row className="gap-y-5">
                        <Col xl={3}>
                            <div className="view-part bg-[#151f30] p-3 rounded-lg">
                               <p className="text-white">Unique&nbsp;views&nbsp;this&nbsp;month</p> 
                               <div className="view-number flex items-center justify-between">
                                    <h2 className="text-white">5678</h2>
                                    <span><RemoveRedEyeIcon className="text-2xl text-[blue]"/></span>
                               </div>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div className="view-part bg-[#151f30] p-3 rounded-lg">
                               <p className="text-white">Items&nbsp;added&nbsp;this&nbsp;month</p> 
                               <div className="view-number flex items-center justify-between">
                                    <h2 className="text-white">172</h2>
                                    <span><AddIcon className="text-2xl text-[blue]"/></span>
                               </div>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div className="view-part bg-[#151f30] p-3 rounded-lg">
                               <p className="text-white">New&nbsp;comments</p> 
                               <div className="view-number flex items-center justify-between">
                                    <h2 className="text-white">5678</h2>
                                    <span><CommentIcon className="text-2xl text-[blue]"/></span>
                               </div>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div className="view-part bg-[#151f30] p-3 rounded-lg">
                               <p className="text-white">New&nbsp;reviews</p> 
                               <div className="view-number flex items-center justify-between">
                                    <h2 className="text-white">5678</h2>
                                    <span><ReviewsIcon className="text-2xl text-[blue]"/></span>
                               </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Home