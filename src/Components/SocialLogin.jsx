import { FaGoogle } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import useHooks from "../Hooks/useHooks";
const SocialLogin = () => {
    const { googleSignin, githubSignin } = useHooks()
    return (
        <div className="flex justify-center space-x-4">
            <button
                onClick={() => googleSignin()} className="p-3 rounded-sm">
                <FaGoogle className="text-xl" />
            </button>
            <button
                onClick={() => githubSignin()} className="p-3 rounded-sm">
                <CiFacebook className="text-2xl" />
            </button>
            <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                <AiFillGithub className="text-2xl" />
            </button>
        </div>
    );
};

export default SocialLogin;