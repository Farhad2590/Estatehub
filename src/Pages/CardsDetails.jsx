import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Booknow from '../assets/book.png'
import 'animate.css';

const CardsDetails = () => {
    const cardInfo = useLoaderData()
    const { id } = useParams()

    const cardDetails = cardInfo.luxury_estates.find(card => card.id === id);

    const { image, estate_title, description, facilities, segment_name, status, area, price } = cardDetails
    return (
        <div>
            <Helmet>
                <title>Estate-Card-{id}</title>
            </Helmet>
            <img src={image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div className="lg:flex lg:gap-5 w-full ">
                        <div className="lg:w-[50%]">
                            <img className="animate__animated animate__bounce w-full" src={Booknow} alt="" />
                        </div>
                        <div className="lg:w-[50%] p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-6xl group-hover:underline group-focus:underline">{estate_title}</h3>
                            <p className="pt-3 pb-2 text-xl">{description}</p>
                            <div className="flex flex-col gap-5 animate__animated animate__backInRight">
                                <div className="flex justify-between">
                                    <h6 className="text-xl"><span className="text-xl font-bold">Segment :</span>{segment_name}</h6>
                                    <h6 className="text-xl"><span className="text-xl font-bold">Status :</span>{status}</h6>
                                </div>
                                <div className="flex justify-between">
                                    <h6 className="text-xl"><span className="text-xl font-bold">Area :</span>{area}</h6>
                                    <h6 className="text-xl"><span className="text-xl font-bold">Price :</span>{price}</h6>
                                </div>
                                <div><h6 className="text-xl font-bold">Facelities:</h6>
                                    {
                                        facilities.map(facelity => <p className="text-xl">#{facelity}</p>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
};

export default CardsDetails;