import { CiLocationOn } from "react-icons/ci";
import { RiPriceTag2Line } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";



const Card = ({ luxury_state }) => {
    // console.log(luxury_state);
    const { estate_title, image, description, location, area, price, status } = luxury_state;
    const [isHovered, setIsHovered] = useState(false);
    const cardStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',    // Cover the entire size of the div
        backgroundPosition: 'center' // Center the background image
    };
    return (
        <div  className="card mb-10" style={cardStyle}>

            <div data-aos="fade-up-right" data-aos-duration="3000" className="card-details p-5" >
                <div className="pt-40 px-5">
                    <p className="text-white">{status}/{area}</p>
                    <h2 className="text-2xl text-white font-bold">{estate_title}</h2>
                </div>
                <div className="bottom flex items-center justify-between px-1">
                    <div>
                        <div className="flex items-center gap-2">
                            <CiLocationOn className="text-white" />
                            <h6 className="text-xl text-white">{location}</h6>
                        </div>
                        <div className="flex items-center gap-2">
                            <RiPriceTag2Line className="text-white" />
                            <h6 className="text-xl text-white">{price}</h6>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <p className="text-white">View Details</p>
                        <FaArrowRight className="text-white"/>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Card;