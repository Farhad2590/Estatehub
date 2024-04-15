import { TbHomeCog } from "react-icons/tb";

const SpecialChoose = () => {
    return (
        <div className="bg-orange-50 mt-10 mb-10">
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
                        <p>
                            A property manager handles all daily operations of a large estate, from staff oversight to maintenance and repairs.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white p-5">
                    <TbHomeCog className="text-7xl text-yellow-600" />
                    <div className="text-center">
                        <h4 className="text-xl font-bold">Property Management</h4>
                        <p>
                            A property manager handles all daily operations of a large estate, from staff oversight to maintenance and repairs.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white p-5">
                    <TbHomeCog className="text-7xl text-yellow-600" />
                    <div className="text-center">
                        <h4 className="text-xl font-bold">Property Management</h4>
                        <p>
                            A property manager handles all daily operations of a large estate, from staff oversight to maintenance and repairs.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white p-5">
                    <TbHomeCog className="text-7xl text-yellow-600" />
                    <div className="text-center">
                        <h4 className="text-xl font-bold">Property Management</h4>
                        <p>
                            A property manager handles all daily operations of a large estate, from staff oversight to maintenance and repairs.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white p-5">
                    <TbHomeCog className="text-7xl text-yellow-600" />
                    <div className="text-center">
                        <h4 className="text-xl font-bold">Property Management</h4>
                        <p>
                            A property manager handles all daily operations of a large estate, from staff oversight to maintenance and repairs.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white p-5">
                    <TbHomeCog className="text-7xl text-yellow-600" />
                    <div className="text-center">
                        <h4 className="text-xl font-bold">Property Management</h4>
                        <p>
                            A property manager handles all daily operations of a large estate, from staff oversight to maintenance and repairs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialChoose;