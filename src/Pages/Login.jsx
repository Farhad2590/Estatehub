import { Link } from 'react-router-dom';
import backgroundImage from '../assets/au1.jpg';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../Components/SocialLogin';
import useHooks from '../Hooks/useHooks';

const Login = () => {
    const { signInUser } = useHooks();
    // console.log(signInUser);

    // hookfrom 
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const { email, password } = data;
        signInUser(email, password)
            .then(result => {
                toast.success("Login successful!");
                console.log(result);
            })
            .catch(error => {
                toast.error("Login failed. Please try again."); // Display an error toast if registration fails
                console.error(error);
            });
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content  text-neutral-content">
                <div className="max-w-m bg-white bg-opacity-20 backdrop-blur-base rounded-lg">
                    <div className="w-full max-w-md p-8 space-y-3 rounded-x">
                        <h1 className="text-2xl font-bold text-center">Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="text-lg">
                                <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                                <input type="email" name="email" id="Email" placeholder="Email" className="w-full px-4 py-3 rounded-md "
                                    {...register("email", { required: true })} />
                                {errors.email && <span className='text-red-600 font-bold'>!!!Email is required!!!</span>}
                            </div>
                            <div className="text-lg">
                                <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md "
                                    {...register("password", { required: true })} />
                                {errors.password && <span className='text-red-600 font-bold'>!!!Password is required!!!</span>}
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