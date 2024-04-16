import backgroundImage from '../assets/au1.jpg';


const Updated = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content  text-neutral-content">
                <div className="max-w-m bg-white bg-opacity-20 backdrop-blur-base rounded-lg">
                    <div className="w-full max-w-md p-8 space-y-3 rounded-x">
                        <h1 className="text-2xl font-bold text-center">Login</h1>
                        <form  className="space-y-6">
                            <div className="text-lg">
                                <label htmlFor="email" className="block ">Email</label>
                                <input type="email" name="email" id="Email" placeholder="Email" className="w-full px-4 py-3 rounded-md " />
                            </div>
                            <div className="text-lg relative">
                                <label htmlFor="password" className="block ">Password</label>
                                <input placeholder="Password" className="w-full px-4 py-3 rounded-md " />
                            </div>

                        </form>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Updated;