import { CiLocationOn } from "react-icons/ci";
import { RiPriceTag2Line } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'animate.css';

const Card = ({ luxury_state }) => {
    // console.log(luxury_state);
    const { id, estate_title, image, description, location, area, price, status } = luxury_state;

    const cardStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    return (
        <div className="card mb-10" style={cardStyle}>

            <div className="card-details p-5" >
                <div className="hero-overlay bg-opacity-30 rounded-lg">
                    <div  className="pt-40 px-5">
                        <p className="text-white">{status}/{area}</p>
                        <h2 className="text-2xl text-white font-bold">{estate_title}</h2>
                    </div>
                    <div className="bottom flex items-center justify-between px-1">
                        <div data-aos="fade-up-right" data-aos-duration="3000">
                            <div className="flex items-center gap-2">
                                <CiLocationOn className="text-white" />
                                <h6 className="text-xl text-white">{location}</h6>
                            </div>
                            <div className="flex items-center gap-2">
                                <RiPriceTag2Line className="text-white" />
                                <h6 className="text-xl text-white">{price}</h6>
                            </div>
                        </div>
                        <Link to={`/cardsdata/${id}`} className="flex items-center">
                            <p className="text-white">View Details</p>
                            <FaArrowRight className="text-white" />
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Card;