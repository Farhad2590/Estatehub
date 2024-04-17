import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Cards = () => {
    const luxury = useLoaderData()
    const luxuryEstates = luxury.luxury_estates;
    // console.log(luxuryEstates);

    return (
        <div className="bg-orange-50 mt-10 mb-10">
            <div data-aos="fade-right" data-aos-duration="1000" className="py-5">
                <h1 className="text-3xl font-bold pt-5 px-5 ">EstateHub Estates</h1>
                <h6 className="text-xl font-medium pt-3 pb-5 px-5">Super Luxury Vilas with great view</h6>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-5">
                {
                    luxuryEstates?.map(luxury_state => <Card key={luxury_state.id} luxury_state={luxury_state}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;