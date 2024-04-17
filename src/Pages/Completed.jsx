import { Helmet } from "react-helmet-async";


const Completed = () => {

    return (
        <div>
            <Helmet>
                <title>EstateHub-Works</title>
            </Helmet>
            <h2 className="pl-5 text-3xl">#Project1</h2>
            <section className="">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
                        <img src="https://i.ibb.co/j9tV6YS/1.png" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Mountain Bliss Manor</h3>
                            <p>Nestled in the lush surroundings of Green Mountain, Mountain Bliss Manor is a luxurious haven for those seeking peace and comfort. This special villa combines modern style with nature's beauty, giving you a serene escape from the busy world.
                                As you arrive, you ll be greeted by beautiful gardens and the quiet sounds of nature. Inside, the villa is filled with cozy furniture, elegant decorations, and all the latest conveniences to make your stay perfect. Big windows let in plenty of sunlight and offer stunning views of the mountains.
                            </p>
                        </div>
                    </a>
                    <h2 className="text-3xl">Inside the House</h2>
                    <section className="">
                        <div className="container flex flex-col justify-center p-4 mx-auto">
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                                <img className="object-cover w-full  aspect-square" src="https://i.ibb.co/QP3B2NZ/2.png" />
                                <img className="object-cover w-full  aspect-square" src="https://i.ibb.co/4KCSGgB/03.png" />
                                <img className="object-cover w-full  aspect-square" src="https://i.ibb.co/PGHZrrj/3.png" />
                                <img className="object-cover w-full  aspect-square" src="https://i.ibb.co/ThnJLff/2-1.jpg" />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <h2 className="pl-5 text-3xl">#Project2</h2>
            <section className="">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Mountain Bliss Manor</h3>
                            <p>Nestled in the lush surroundings of Green Mountain, Mountain Bliss Manor is a luxurious haven for those seeking peace and comfort. This special villa combines modern style with nature's beauty, giving you a serene escape from the busy world.
                                As you arrive, you ll be greeted by beautiful gardens and the quiet sounds of nature. Inside, the villa is filled with cozy furniture, elegant decorations, and all the latest conveniences to make your stay perfect. Big windows let in plenty of sunlight and offer stunning views of the mountains.
                            </p>
                        </div>
                        <img src="https://i.ibb.co/M8nNjX4/1-1.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7" />
                    </a>
                    <h2 className="text-3xl">Inside the House</h2>
                    <section className="">
                        <div className="container flex flex-col justify-center p-4 mx-auto">
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                                <img className="object-cover w-full  aspect-square" src="https://i.ibb.co/QP3B2NZ/2.png" />
                                <img className="object-cover w-full  aspect-square" src="https://i.ibb.co/4KCSGgB/03.png" />
                                <img className="object-cover w-full  aspect-square" src="https://i.ibb.co/PGHZrrj/3.png" />
                                <img className="object-cover w-full  aspect-square" src="https://i.ibb.co/ThnJLff/2-1.jpg" />
                            </div>
                        </div>
                    </section>
                </div>
            </section>


        </div>
    );
};

export default Completed;