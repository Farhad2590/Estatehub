import special1 from '../assets/Special1.jpg'
import special2 from '../assets/Special2.jpg'
import special3 from '../assets/Special3.png'
import Marquee from "react-fast-marquee";
import { IoIosFitness } from "react-icons/io";
import { IoFitness } from "react-icons/io5";
import { IoMdFitness } from "react-icons/io";
import { IoFitnessOutline } from "react-icons/io5";
import { MdOutlineTour } from "react-icons/md";
import { SiTourbox } from "react-icons/si";
import { FaCaravan } from "react-icons/fa6";
import { MdTravelExplore } from "react-icons/md";
import { FaSpa } from "react-icons/fa";
import { FaSprayCanSparkles } from "react-icons/fa6";
import { LiaSpaSolid } from "react-icons/lia";

const SpecialSection = () => {
    return (
        <div className="bg-gray-50 mt-10 mb-10">
            <div data-aos="fade-left" data-aos-duration="1000" className="py-5 lg:flex lg:flex-col items-end">
                <h1 className="text-3xl font-bold pt-5 px-5">EstateHub Packages</h1>
                <h6 className="text-xl font-medium pt-3 pb-5 px-5">All Our Gifts With Your Luxury Estate</h6>
            </div>
            <div>
                <div className='lg:flex px-5'>
                    <div data-aos="fade-right" data-aos-duration="3000" className='lg:w-[50%]'>
                        <img src={special1} alt="" />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="3000" className='lg:w-[50%] flex flex-col justify-center gap-5 px-5'>
                        <h1 className='text-3xl'>🏋️‍♂️ Family Fitness Discount! 🏋️‍♀️</h1>
                        <p>Residents of our luxury suites receive an exclusive discount at our fitness center! Bring the whole family and enjoy state-of-the-art facilities, personalized support, and convenient access just steps away from your home. Get fit together and save big! Contact us for more details.</p>
                        <Marquee>
                            <IoIosFitness className='text-5xl mr-5' />
                            <IoFitness className='text-5xl mr-5' />
                            <IoMdFitness className='text-5xl mr-5' />
                            <IoFitnessOutline className='text-5xl mr-5' />
                        </Marquee>
                    </div>
                </div>
                <div className='lg:flex flex-row-reverse  px-5'>
                    <div data-aos="fade-left" data-aos-duration="3000" className='lg:w-[50%]'>
                        <img src={special2} alt="" />
                    </div>
                    <div data-aos="fade-right" data-aos-duration="3000" className='lg:w-[50%] flex flex-col justify-center gap-5 px-5'>
                        <h1 className='text-3xl'>🌿Exclusive Spa for Estate Owners🌿</h1>
                        <p>Residents of our luxury suites receive an exclusive discount at our fitness center! Bring the whole family and enjoy state-of-the-art facilities, personalized support, and convenient access just steps away from your home. Get fit together and save big! Contact us for more details.</p>
                        <Marquee>
                            <FaSpa className='text-5xl mr-5' />
                            <FaSprayCanSparkles className='text-5xl mr-5' />
                            <LiaSpaSolid className='text-5xl mr-5' />
                            <IoFitnessOutline className='text-5xl mr-5' />
                        </Marquee>
                    </div>
                </div>
                <div className='lg:flex  px-5'>
                    <div data-aos="fade-right" data-aos-duration="3000" className='lg:w-[50%]'>
                        <img src={special3} alt="" />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="3000" className='lg:w-[50%] flex flex-col justify-center gap-5 px-5'>
                        <h1 className='text-3xl'>
                            🚗Caravan Tour Service!🚗</h1>
                        <p>Enjoy monthly access to our Spa Center, exclusively available to our estate owners. Unwind and rejuvenate with state-of-the-art facilities and expert treatments designed to refresh your body and mind. Treat yourself to a day of luxury and relaxation every month—just steps from your home. Contact us for more details on how to indulge in your monthly spa retreat</p>
                        <Marquee>
                            <MdOutlineTour className='text-5xl mr-5' />
                            <SiTourbox className='text-5xl mr-5' />
                            <FaCaravan className='text-5xl mr-5' />
                            <MdTravelExplore className='text-5xl mr-5' />
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialSection;