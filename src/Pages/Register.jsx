import { Link } from 'react-router-dom';
import backgroundImage from '../assets/au1.jpg';
const Register = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content  text-neutral-content">
                <div className="max-w-m bg-white bg-opacity-20 backdrop-blur-base rounded-lg">
                    <div className="w-full max-w-md p-8 space-y-3 rounded-x">
                        <h1 className="text-2xl font-bold text-center">Register</h1>
                        <form noValidate="" action="" className="space-y-6">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block dark:text-gray-600">Username</label>
                                <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="Email" className="block dark:text-gray-600">Email</label>
                                <input type="email" name="email" id="Email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block dark:text-gray-600">PhotoUrl</label>
                                <input type="text" name="username" id="username" placeholder="PhotoUrl" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
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
        </div>
    );
};

export default Register;