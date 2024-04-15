import { TbHomeCog } from "react-icons/tb";
import { GrShieldSecurity } from "react-icons/gr";
import { GrTechnology } from "react-icons/gr";
import { GrVmMaintenance } from "react-icons/gr";
import { FaHouseFloodWaterCircleArrowRight } from "react-icons/fa6";
import { FaPersonShelter } from "react-icons/fa6";





const SpecialChoose = () => {
    return (
        <div className="bg-orange-50 my-10">
            <div data-aos="fade-right" data-aos-duration="1000" className="py-5">
                <h1 className="text-3xl font-bold pt-5 px-5">GlamourEstateHub Services</h1>
                <h6 className="text-xl font-medium pt-3 pb-5 px-5">Why Choose Us? lets see our Services</h6>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
                <div className="flex flex-col items-center bg-white p-5">
                    <TbHomeCog
                        className="text-7xl text-yellow-600 transition-transform duration-500 ease-in-out hover:rotate-360"
                    />
                    <div className="text-center">
                        <h4 className="text-xl font-bold">Property Management</h4>
                        <p>A property manager handles all daily operations of a large estate, from staff oversight to maintenance and repairs.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white p-5">
                    <GrShieldSecurity
                        className="text-7xl text-yellow-600 transition-transform duration-500 ease-in-out hover:rotate-360"
                    />
                    <div className="text-center">
                        <h4 className="text-xl font-bold">Security Services</h4>
                        <p>Luxury estates require comprehensive security,gates and surveillance,cybersecurity,private security personnel.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white p-5">
                    <GrTechnology
                        className="text-7xl text-yellow-600 transition-transform duration-500 ease-in-out hover:rotate-360"
                    />
                    <div className="text-center">
                        <h4 className="text-xl font-bold">Technology Integration</h4>
                        <p>Luxury estate owners rely on specialized technicians to seamlessly integrate cutting-edge smart home systems, from security to entertainment, ensuring optimal comfort and convenience.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white p-5">
                    <GrVmMaintenance
                        className="text-7xl text-yellow-600 transition-transform duration-500 ease-in-out hover:rotate-360"
                    />
                    <div className="text-center">
                        <h4 className="text-xl font-bold">Design and Maintenance</h4>
                        <p>Professional landscaping services for luxury estates ensure the maintenance and design of expansive grounds, catering to various functions from parties to private retreats.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white p-5">
                    <FaHouseFloodWaterCircleArrowRight
                        className="text-7xl text-yellow-600 transition-transform duration-500 ease-in-out hover:rotate-360"
                    />
                    <div className="text-center">
                        <h4 className="text-xl font-bold">Housekeeping and Staffing Services</h4>
                        <p>Estate owners rely on specialized staffing services to source, hire, and manage dedicated domestic staff adept at maintaining high-end properties.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white p-5">
                    <FaPersonShelter
                        className="text-7xl text-yellow-600 transition-transform duration-500 ease-in-out hover:rotate-360"
                    />
                    <div className="text-center">
                        <h4 className="text-xl font-bold">Personal Concierge</h4>
                        <p>A personal concierge provides comprehensive assistance, from travel arrangements to event planning, ensuring estate owners can enjoy their time stress-free.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialChoose;

// Personal Concierge: A personal concierge can handle various tasks such as making travel arrangements, booking appointments, organizing events, and securing hard-to-get reservations. This service allows estate owners to enjoy their time without worrying about the logistics of daily activities and special occasions.

// Home Automation and Technology Integration: To keep up with the latest in home technology, luxury estate owners often need technicians who specialize in integrating smart home systems. This can include everything from advanced security systems to smart lighting, heating, and cooling systems, audio-visual and entertainment systems, and even home assistants.

// Landscape Design and Maintenance: Given the extensive grounds that often accompany luxury estates, professional landscaping services are necessary. These services not only maintain the beauty of the gardens and grounds but can also design outdoor spaces for specific functions such as parties, relaxation, or private retreats.

// Housekeeping and Staffing Services: Maintaining a large estate requires a dedicated team of housekeepers, chefs, butlers, and other staff. Estate owners often employ staffing services that specialize in sourcing, hiring, and managing domestic staff who understand the nuances of working in high-end properties.