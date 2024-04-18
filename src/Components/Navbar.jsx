// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png"
import useHooks from "../Hooks/useHooks";

const Navbar = () => {
    const { logout, user } = useHooks();
    const Navs = user ? (
        <>
            <Link to="/"><a>Home</a></Link>
            <Link to="/completed"><a>Completed Deals</a></Link>
            <Link to="/updated"><a>Update Profile</a></Link>
            <Link to="/user"><a>User Profile</a></Link>
        </>
    ) : (
        <Link to="/"><a>Home</a></Link>
    );
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
                    <div className="flex items-center justify-center w-12 h-12 rounded-ful">
                        <img src={logo} alt="" />
                    </div>
                    <span className="self-center text-xl md:text-2xl lg:text-3xl font-semibold">EstateHub</span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex gap-4">
                {Navs}
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar" title={user.displayName}>
                            <div className="w-10 rounded-full text-black">
                                <img src={user.photoURL} alt={user.displayName} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm  btn-ghost">{user.displayName}</button>
                            </li>
                            <li>
                                <button className="btn btn-sm  btn-ghost"
                                    onClick={logout}
                                >Logout</button>

                            </li>
                        </ul>
                    </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-sm  btn-ghost">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;