import { Helmet } from "react-helmet-async";
import backgroundImage from '../assets/au1.jpg';
import useHooks from "../Hooks/useHooks";
const UserProfile = () => {
    const { user } = useHooks();
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <Helmet>
                <title>EstateHub-UserProfile</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={user.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className=" space-y-3">
                        <h1 className="text-5xl text-white font-bold">Name: {user.displayName}</h1>
                        <h1 className="text-3xl text-white">Email: {user.email}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;