

const Card = ({luxury_state}) => {
    // console.log(luxury_state);
    const {estate_title,image,description} = luxury_state;

    const cardStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',    // Cover the entire size of the div
        backgroundPosition: 'center' // Center the background image
    };
    return (
        <div className="card"  style={cardStyle}>
            {/* <img src={image} alt={estate_title} /> */}
            <div className="card-details">
                <h2 className="text-2xl text-white font-bold p-10">{estate_title}</h2>
                {/* <p>{description}</p> */}
            </div>
        </div>
    );
};

export default Card;