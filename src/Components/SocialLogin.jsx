import { FaGoogle } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import useHooks from "../Hooks/useHooks";
import { useNavigate,useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const SocialLogin = () => {
    const { googleSignin, githubSignin } = useHooks()
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(Location);
    const from = location?.state||'/'

    const handleSocialLogin = socialProvider =>{
        socialProvider()
        .then(result =>{
            if(result.user){
                navigate(from)
                toast.success("Login successful!");
            }
        })
    }
    return (
        <div className="flex justify-center space-x-4">
            <button
                onClick={() => handleSocialLogin(googleSignin)} className="p-3 rounded-sm">
                <FaGoogle className="text-xl" />
            </button>
            <button
                className="p-3 rounded-sm">
                <CiFacebook className="text-2xl" />
            </button>
            <button
                onClick={() => handleSocialLogin(githubSignin)} className="p-3 rounded-sm">
                <AiFillGithub className="text-2xl" />
            </button>
        </div>
    );
};

export default SocialLogin;