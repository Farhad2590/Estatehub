import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


const Slider = () => {
    return (
        <div>
            <Carousel > 
                <div>
                    <img src="https://i.ibb.co/PM0rqTp/Slider1.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/LtFXS11/Slider2.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/PM0rqTp/Slider1.png" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/rcgHqgv/Slider4.png" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/Lkqt07j/Slider5.png" />
                    <p className="legend">Legend 5</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;