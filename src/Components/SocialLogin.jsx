import { FaGoogle } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import useHooks from "../Hooks/useHooks";
import { useNavigate,useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'

const SocialLogin = () => {
    const { googleSignin, githubSignin } = useHooks()
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(Location);
    const from = location?.state||'/'

    const handleSocialLogin = socialProvider =>{
        socialProvider()
        .then(result =>{
            Swal.fire({
                icon: 'success',
                title: 'Log in successful',
                showConfirmButton: false,
                timer: 1500,
            });
            if(result.user){
                navigate(from)
                toast.success("Login successful!");
            }
        }).catch(error =>{
            Swal.fire({
                icon: "error",
                title: "Oops... Login Failed",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        })
    }
    return (
        <div className="flex justify-center space-x-4">
            <button
                onClick={() => handleSocialLogin(googleSignin)} className="p-3 rounded-sm">
                <FaGoogle className="text-xl" />
            </button>
            <button
                onClick={() => handleSocialLogin(githubSignin)} className="p-3 rounded-sm">
                <AiFillGithub className="text-2xl" />
            </button>
        </div>
    );
};

export default SocialLogin;