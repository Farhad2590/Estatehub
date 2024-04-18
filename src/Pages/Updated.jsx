import { Helmet } from 'react-helmet-async';
import backgroundImage from '../assets/au1.jpg';
import useHooks from '../Hooks/useHooks';
import { useForm } from 'react-hook-form';


const Updated = () => {
    const { updateUser } = useHooks();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const { name, photoUrl } = data;
        updateUser(name, photoUrl)
    }
    return (
        <div className=" hero min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <Helmet>
                <title>EstateHub-UpdateProfile</title>
            </Helmet>
            <div className="animate__animated animate__zoomInDown hero-content  text-neutral-content">
                <div className="max-w-m bg-white bg-opacity-20 backdrop-blur-base rounded-lg">
                    <div className="w-full max-w-md p-8 space-y-3 rounded-x">
                        <h1 className="text-2xl font-bold text-center">Update Profile</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="text-lg">
                                <label htmlFor="name" className="block ">Name</label>
                                <input type="name" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 text-black rounded-md "
                                    {...register("name")} />
                            </div>
                            <div className="text-lg relative">
                                <label htmlFor="photoUrl" className="block ">PhotoUrl</label>
                                <input placeholder="PhotoUrl" className="w-full px-4 py-3 rounded-md text-black"
                                    {...register("photoUrl")} />
                            </div>
                            <div className='text-center'>
                                <button className='btn bg-orange-400 text-white outline-none border-none'>Update</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Updated;