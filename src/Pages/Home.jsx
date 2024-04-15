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

const Home = () => {
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