import { Link } from 'react-router-dom';
import backgroundImage from '../assets/au1.jpg';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useHooks from '../Hooks/useHooks';
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
const Register = () => {

    const [showPassword, setShowPassword] = useState(false)
    const { createUser } = useHooks();
    
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
            toast('Password should have at lease one LowerCase letter')
            return;
        }
        createUser(email, password)
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Registration successful',
                    showConfirmButton: false,
                    timer: 1500,
                });
                if (result.user) {
                    navigate(from)
                }
            }).catch(error =>{
                Swal.fire({
                    icon: "error",
                    title: "Oops... Registration Failed",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
            })
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <Helmet>
                <title>EstateHub-Register</title>
            </Helmet>
            <div className="hero-content  text-neutral-content">
                <div className="max-w-m bg-white bg-opacity-20 backdrop-blur-base rounded-lg">
                    <div className="w-full max-w-md p-8 space-y-3 rounded-x">
                        <h1 className="text-2xl font-bold text-center">Register</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="text-lg">
                                <label htmlFor="username" className="block">Username</label>
                                <input type="text" name="username" id="username" placeholder="Username" className="w-full text-black px-4 py-3 rounded-md"
                                    {...register("username", { required: true })} />
                                {errors.username && <span className='text-red-600 font-bold'>!!!Username is required!!!</span>}

                            </div>
                            <div className="text-lg">
                                <label htmlFor="Email" className="block">Email</label>
                                <input type="email" name="email" id="Email" placeholder="Email" className="w-full text-black px-4 py-3 rounded-md"
                                    {...register("email", { required: true })} />
                                {errors.email && <span className='text-red-600 font-bold'>!!!Email is required!!!</span>}
                            </div>
                            <div className="text-lg">
                                <label htmlFor="photoUrl" className="block">PhotoUrl</label>
                                <input type="text" name="photoUrl" id="photoUrl" placeholder="PhotoUrl" className="w-full text-black px-4 py-3 rounded-md" />
                            </div>
                            <div className="text-lg relative">
                                <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full text-black px-4 py-3 rounded-md "
                                    {...register("password", { required: true })} />
                                {errors.password && <span className='text-red-600 font-bold'>!!!Password is required!!!</span>}
                                <span className="absolute top-11 right-3" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaRegEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            <div className='text-center'>
                                <button className='btn bg-orange-400 text-white outline-none border-none'>Sign up</button>
                            </div>
                        </form>

                        <div className='flex justify-center gap-2'>
                            <p className="text-lg text-center"> Already have an account? Please</p>
                            <Link to="/login"><a className="underline">Sign in</a></Link>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;