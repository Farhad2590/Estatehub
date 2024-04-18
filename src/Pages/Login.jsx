import { Link } from 'react-router-dom';
import backgroundImage from '../assets/au1.jpg';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../Components/SocialLogin';
import useHooks from '../Hooks/useHooks';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
// or via CommonJS
// const Swal = require('sweetalert2')


const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const { signInUser } = useHooks();

    
    const navigate = useNavigate()
    const location = useLocation()

    const from = location?.state || '/'

    // hookfrom 
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const { email, password } = data;
        if (password.length < 6) {
            toast('Password should be 6 character or more')
        }
        else if (!/[A-Z]/.test(password)) {
            toast('Password should have at lease one Uppercase letter')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast('Password should have at lease one Uppercase letter')
            return;
        }
        signInUser(email, password)
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Log in successful',
                    showConfirmButton: false,
                    timer: 1500,
                });
                if (result.user) {
                    navigate(from)
                }
            })
            .catch(error => {
                toast.error("Login failed. Please try again."); // Display an error toast if registration fails
                console.error(error);
            });

    }


    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <Helmet>
                <title>EstateHub-Login</title>
            </Helmet>
            <div className="hero-content  text-neutral-content">
                <div className="max-w-m bg-white bg-opacity-20 backdrop-blur-base rounded-lg">
                    <div className="w-full max-w-md p-8 space-y-3 rounded-x">
                        <h1 className="text-2xl font-bold text-center">Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="text-lg">
                                <label htmlFor="email" className="block ">Email</label>
                                <input type="email" name="email" id="Email" placeholder="Email" className="w-full text-black px-4 py-3 rounded-md "
                                    {...register("email", { required: true })} />
                                {errors.email && <span className='text-red-600 font-bold'>!!!Email is required!!!</span>}
                            </div>
                            <div className="text-lg relative">
                                <label htmlFor="password" className="block ">Password</label>
                                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="text-black w-full px-4 py-3 rounded-md "
                                    {...register("password", { required: true })} />
                                {errors.password && <span className='text-red-600 font-bold'>!!!Password is required!!!</span>}
                                <span className="absolute top-11 right-3" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaRegEyeSlash /> : <FaEye />}
                                </span>
                            </div>

                            <div className='text-center'>
                                <button className='btn bg-orange-400 text-white outline-none border-none'>Sign In</button>
                            </div>
                        </form>
                        <div className="flex items-center">

                            <p className="px-3 text-lg ">Login with social accounts</p>

                        </div>
                        <SocialLogin></SocialLogin>
                        <div className='flex justify-center gap-2'>
                            <p className="text-lg text-center"> Dont have an account?</p>
                            <Link to="/register"><a className="underline dark:text-gray-800">  Sign up</a></Link>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;