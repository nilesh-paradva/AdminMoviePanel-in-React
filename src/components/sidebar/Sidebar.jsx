import { Avatar, Button } from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WidgetsIcon from '@mui/icons-material/Widgets';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PagesIcon from '@mui/icons-material/Pages';
import EditIcon from '@mui/icons-material/Edit';
import userImage from "../../assets/images/user.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AdminLogOutThink } from "../../services/actions/AuthAction";
import { SideBarAct } from "../../services/actions/MovieAct";

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { admin } = useSelector(state => state.AuthReducer);

    const DeleteAdmin = () => {
        dispatch(AdminLogOutThink());
    }

    const handleMenuClick = () => {
        dispatch(SideBarAct());
    };

    return (
        <div className="sidebar-wrapper bg-[#151f30] border-r-2  !z-50 border-[#1b273b] h-screen flex flex-col ">
            {/* Logo Section */}
            <div className="logo text-center border-b-2 border-[#1b273b] py-[1.55rem] px-3  border-sidebar-border">
                <h1 className="text-white text-2xl font-bold">Flix <span className="text-[14px] text-[#384e73]">TV</span></h1>
            </div>

            {/* User Info Section */}
            <div className="account py-4 px-3 border-b-2 border-[#1b273b] border-sidebar-border flex items-center justify-between">
                <div className="flex items-center relative">
                    {admin ? (
                        <>
                            <Avatar variant="rounded" sx={{ width: 45, height: 45 }}>
                                <img src={admin ? admin.photoURL : userImage} alt="User" />
                            </Avatar>
                            <div className="ml-3">
                                <ul className="m-0 p-0 list-none">
                                    <li className="text-white text-lg">{admin.displayName}</li>
                                    <li className="text-white text-sm">{admin.email}</li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <p className="text-white">Loading...</p>
                    )}
                    <div className="edit-profile absolute top-[-1rem] right-[-0.8rem]">
                        <Button className="!min-w-0 !bg-sidebar-border  hover:!bg-[#1d2a3f] inline-block" onClick={ () => {handleMenuClick ()}}>
                            <EditIcon className="text-white" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="logOut text-center mt-3">
                <Button className="!min-w-0 !bg-sidebar-border !bg-[#25354f] hover:!bg-[#1d2a3f] inline-block" onClick={DeleteAdmin}>
                    <ExitToAppIcon className="text-white" /><span className="ms-2 text-white">Log Out</span>
                </Button>
            </div>

            {/* Navigation List */}
            <nav className="flex-grow overflow-y-auto px-3 py-3">
                <ul className="m-0 p-0 list-none">
                    <li className="px-2 my-2">
                        <Link to={"/"} className="px-3 py-2 text-white bg-sidebar-border block rounded-lg hover:bg-[#1d2a3f] no-underline transition duration-200" onClick={handleMenuClick}>
                            <DashboardIcon className="mr-3" />&nbsp;<span className=" d-xl-none">Dashboard</span> <span className="d-none d-xl-inline">Dashboard</span>
                        </Link>
                    </li>
                    <li className="px-2 my-2">
                        <Link to={"/catalog"} className="px-3 py-2 text-white bg-sidebar-border block rounded-lg hover:bg-[#1d2a3f] no-underline transition duration-200" onClick={handleMenuClick}>
                            <WidgetsIcon className="mr-3" />&nbsp;<span className=" d-xl-none">Catalog</span> <span className="d-none d-xl-inline">Catalog</span>
                        </Link>
                    </li>
                    <li className="px-2 my-2">
                        <Menu as="div" className="relative inline-block w-full">
                            <MenuButton className="w-full px-3 py-2  rounded-lg flex justify-between items-center bg-sidebar-border  hover:bg-[#1d2a3f] transition duration-200">
                                <span className="text-white"><PagesIcon className="mr-4" /><span className=" d-xl-none text-white">Pages </span><span className="d-none d-xl-inline text-white">Pages</span></span> <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                            </MenuButton>
                            <MenuItems className="absolute right-0 mt-2 w-56 !rounded-lg  bg-[#131720] shadow-lg ring-1 ring-black/5 border-2 border-[#3b445a]">
                                <MenuItem className="">
                                    <Link to="/additems" className="block px-4 py-2 text-[16px] text-white no-underline transi duration-200 hover:!bg-[#1d2a3f] rounded-t-lg" onClick={handleMenuClick}>Add&nbsp;Item</Link>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-[16px] text-white no-underline hover:!bg-[#1d2a3f] rounded-b-lg" onClick={handleMenuClick}>Forgate&nbsp;Password</a>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </li>
                    <li className="px-2 my-2">
                        <Link to={"/users"} className="px-3 py-2 text-white bg-sidebar-border block rounded-lg hover:bg-[#1d2a3f] no-underline transition duration-200" onClick={handleMenuClick}>
                            <PeopleAltIcon className="mr-3" />&nbsp;<span className=" d-xl-none">Users</span> <span className="d-none d-xl-inline">Users</span>
                        </Link>
                    </li>
                    <li className="px-2 my-2">
                        <a href="#" className="px-3 py-2 text-white bg-sidebar-border block rounded-lg hover:bg-[#1d2a3f] no-underline transition duration-200" onClick={handleMenuClick}>
                            <CommentIcon className="mr-3" />&nbsp;<span className=" d-xl-none">Comments</span> <span className="d-none d-xl-inline">Comments</span>
                        </a>
                    </li>
                    <li className="px-2 my-2">
                        <a href="#" className="px-3 py-2 text-white bg-sidebar-border block rounded-lg hover:bg-[#1d2a3f] no-underline transition duration-200" onClick={handleMenuClick}>
                            <ReviewsIcon className="mr-3" />&nbsp;<span className=" d-xl-none">Reviews</span> <span className="d-none d-xl-inline">Reviews</span>
                        </a>
                    </li>
                    <li className="px-2 my-2">
                        <a href="#" className="px-3 py-2 text-white bg-sidebar-border block rounded-lg hover:bg-[#1d2a3f] no-underline transition duration-200" onClick={handleMenuClick}>
                            <ArrowBackIcon className="mr-3" />&nbsp;<span className=" d-xl-none">Back&nbsp;to&nbsp;Web</span> <span className="d-none d-xl-inline">Back&nbsp;to&nbsp;Web</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
