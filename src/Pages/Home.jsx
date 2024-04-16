// import Navbar from "../Components/Navbar";
// import Slider from "../Components/Slider";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import Cards from "../Components/Cards";
import Slider from "../Components/Slider";
import SpecialSection from '../Components/SpecialSection';
import SpecialChoose from '../Components/SpecialChoose';
import useHooks from '../Hooks/useHooks';


const Home = () => {
  const { loader } = useHooks()

  // console.log(location);
  // if (loader) {
  //   return <div className='text-center'>
  //     <span className="loading loading-infinity loading-lg"></span>
  //     <span className="loading loading-dots loading-lg"></span>
  //     <span className="loading loading-ring loading-lg"></span>
  //     <span className="loading loading-dots loading-lg"></span>
  //     <span className="loading loading-infinity loading-lg"></span>
  //   </div>
  // }
  return (
    <div className="">
      <Slider></Slider>
      <Cards></Cards>
      <SpecialSection></SpecialSection>
      <SpecialChoose></SpecialChoose>
    </div>
  );
};

export default Home;