import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer} from 'react-toastify';

const CardsDetails = () => {
    const cardInfo = useLoaderData()
    const { id } = useParams()

    const cardDetails = cardInfo.luxury_estates.find(card => card.id === id);

    const { image, estate_title, description, facilities, segment_name, status, area, price } = cardDetails
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        <img src={image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{estate_title}</h3>
                            <p>{description}</p>
                            <div className="">
                                <div className="flex justify-between">
                                    <h6 className="text-xl">Segment :{segment_name}</h6>
                                    <h6 className="text-xl">Status :{status}</h6>
                                </div>
                                <div className="flex justify-between">
                                    <h6 className="text-xl">Area :{area}</h6>
                                    <h6 className="text-xl">Price :{price}</h6>
                                </div>
                                <div><h6 className="text-xl">Facelities:</h6>
                                    {
                                        facilities.map(facelity => <p className="text-xl">#{facelity}</p>)
                                    }
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
};

export default CardsDetails;