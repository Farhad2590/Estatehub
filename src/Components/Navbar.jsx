// import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png"

const Navbar = () => {
    const Navs =
        <>
            <li><a>Home</a></li>
            <li><a>Update Profile</a></li>
        </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Navs}
                    </ul>
                </div>
                <a className="flex">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
                        <img src={logo} alt="" />
                    </div>
                    <span className="self-center text-3xl font-semibold">GlamourEstateHub</span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Navs}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;