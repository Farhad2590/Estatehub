// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import '../Css/styles.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Slider = () => {

    return (
        <Swiper
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            cssMode={true}
        >
            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src="https://i.ibb.co/Pm7Qqg4/Slider1.png" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-20 rounded-lg">
                    <h2 className="text-2xl lg:text-5xl text-white pb-5 font-bold">Opulent Haven: Luxe Living Redefined</h2>
                    <div className="flex lg:w-[650px] text-center">
                        <p className="sm:block hidden lg:text-xl text-white">Experience unparalleled extravagance and refinement in our exclusive estate hub, where every detail exudes sophistication and grandeur.</p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src="https://i.ibb.co/HrpfjXM/Special2.png" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-20 rounded-lg">
                    <h2 className="text-2xl lg:text-5xl text-white font-bold pb-5">Elysian Estates: Where Luxury Resides</h2>
                    <div className="flex w-[650px] text-center">
                        <p className="sm:block hidden text-lg lg:text-xl text-white">Discover a world of elegance and indulgence in our esteemed estate hub, offering elite amenities and bespoke services amidst breathtaking surroundings.</p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src="https://i.ibb.co/WPPsd9K/Slider3.png" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-20 rounded-lg">
                    <h2 className="text-2xl lg:text-5xl text-white pb-5 font-bold">Elite Enclaves: The Epitome of Prestige</h2>
                    <div className="flex w-[650px] text-center">
                        <p className="sm:block hidden text-lg lg:text-xl text-white">Immerse yourself in the epitome of opulence and prestige within our prestigious estate hub, where discerning clientele find sanctuary in unparalleled luxury.</p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src="https://i.ibb.co/xfrf2Zj/Slider4.png" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-20 rounded-lg">
                    <h2 className="text-2xl lg:text-5xl text-white pb-5 font-bold">Luxury Oasis: Your Gateway to Extravagance</h2>
                    <div className="flex w-[650px] text-center">
                        <p className="sm:block hidden text-lg lg:text-xl text-white">Step into a realm of unparalleled luxury and tranquility within our distinguished estate hub, where refined living meets extraordinary experiences.</p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src="https://i.ibb.co/S3jxdJj/Slider5.png" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-20 rounded-lg">
                    <h2 className="text-2xl lg:text-5xl text-white pb-5 font-bold">Majestic Manors: Where Luxury Meets Legacy</h2>
                    <div className="flex w-[650px] text-center">
                        <p className="sm:block hidden text-lg lg:text-xl text-white">Embark on a journey of refined living and timeless elegance in our esteemed estate hub, where historic charm harmonizes with modern luxury to create an unparalleled lifestyle experience.</p>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default Slider;

