import { Outlet, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HomeNavigateThunk, loginAdminThunk } from '../services/actions/AuthAction';

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { sidebarToogle } = useSelector(state => state.MovieReducer);
    const [selectedMenu, setSelectedMenu] = useState("Dashboard");

    const handleMenuSelect = (menuName) => {
        setSelectedMenu(menuName);
    };

    useEffect(() => {
        dispatch(loginAdminThunk());
    }, []);

    useEffect(() => {
        dispatch(HomeNavigateThunk());
    }, []);

    return (
        <div className="dashboard-layout h-screen flex">
            <div className={`transition-all duration-500 w-72 d-xl-none  ${ sidebarToogle ? 'trsnlate-x-0  fixed z-50' : ' translate-x-[-100%] fixed z-50'} overflow-hidden`}><Sidebar onMenuSelect={handleMenuSelect}/></div>
            <div className={`transition-all duration-500 w-72 overflow-hidden d-none d-xl-block`}><Sidebar onMenuSelect={handleMenuSelect}/></div>
            <div className="flex flex-col flex-grow">
                <Header title={selectedMenu}/>
                <div className="content-area flex-grow p-3">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
