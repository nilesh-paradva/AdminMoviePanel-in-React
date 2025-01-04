import { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { LoginUserGateThunk } from "../services/actions/MovieAct";
import { Col, Container, Row } from "react-bootstrap";

const GetUsers = () => {

    const dispatch = useDispatch();
    const { users } = useSelector(state => state.MovieReducer);
    
    useEffect(() => {
        dispatch(LoginUserGateThunk());
    }, []);

    return (
        <>
            <section>
                <Container>
                    <Row>
                        {users.map((user) => {
                            return (
                                <Col lg={4} key={user.uid}>
                                    <p className="text-white">{user.email}</p>
                                    <p className="text-white">{user.displayName}</p>
                                    <p className="text-white">{user.uid}</p>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default GetUsers