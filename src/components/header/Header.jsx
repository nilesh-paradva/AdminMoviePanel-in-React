import { Button } from "@mui/material"
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { AdminLogOutThink } from "../../services/actions/AuthAction"
import TextureIcon from '@mui/icons-material/Texture';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react"
import { SideBarAct } from "../../services/actions/MovieAct"

const Header = ({title}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { sidebarToogle, menuName } = useSelector(state => state.MovieReducer)
    const { admin } = useSelector((state) => state.AuthReducer);

    const SideToogle = () => {
        dispatch(SideBarAct())
    }

    useEffect(() => {
        if (!admin) {
            navigate('/signin')
        }
    }, [admin])

    return (
        <>
            <header className="py-4 !border-b-2 !border-[#151f2f]">
                <Container>
                    <Row className="items-center">
                        <Col lg={12}>
                            <header className="flex items-center justify-between">
                                <div className="logo">
                                    <h2 className="text-white">{menuName}</h2>
                                </div>
                                <div className="addbtn flex items-center justify-end gap-x-3">
                                    <Link to="/additems"><Button className="!rounded-lg !bg-[#151f30] transition duration-200 hover:!bg-[#1d2a3f]"><span className="px-3 py-1 text-white">Add&nbsp;Item</span></Button></Link>
                                    <span onClick={SideToogle} className="d-xl-none">
                                        {sidebarToogle ? <Button className="!rounded-lg !bg-[#151f30] transition duration-200 hover:!bg-[#1d2a3f] !min-w-0"><span className="py-1 text-white"><CloseIcon /></span></Button> : <Button className="!rounded-lg !bg-[#151f30] transition duration-200 hover:!bg-[#1d2a3f] !min-w-0"><span className="py-1 text-white"><TextureIcon /></span></Button>}
                                    </span>
                                </div>
                            </header>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
}


export default Header