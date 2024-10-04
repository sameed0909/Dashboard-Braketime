import { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col bg-white w-64 p-4 font-['Red_Hat_Display']">
            <div className="min-h-screen bg-[#FCFCFC] rounded-lg ">
                <div className="flex items-center justify-between p-4">
                    <img src="/logo.png" alt="BrakeTime Logo" className="h-150 w-150" />
                </div>
                <div className="p-4 flex items-center space-x-3">
                    <img src="/vector.png" alt="Dashboard" className="h-4 w-4" />
                    <h2 className="text-[#8F94A0] text-base font-semibold">Dashboard</h2>
                </div>
                <div className="p-4 flex items-center space-x-3">
                    <img src="/shopping.png" alt="Inventory" className="h-6 w-6" />
                    <h2 className="text-[#8F94A0] text-base font-semibold">Inventory</h2>
                </div>
                <ul className="flex flex-col p-4 space-y-2">
                    <li className="flex items-center space-x-3" onClick={toggleMenu}>
                        <img src="/box.png" alt="Orders" className="h-6 w-6" />
                        <span className="text-[#8F94A0] text-base font-semibold">Orders</span>
                        <span className="ml-auto text-[#8F94A0]">
                            {isOpen ? '' : <img src="/arrow-down.png" alt="Arrow"></img>}
                        </span>
                    </li>
                    {isOpen && (
                        <ul className="pl-6 space-y-1">
                            <li className="text-[#8F94A0] text-base font-semibold">Pending Orders</li>
                            <li className="text-[#8F94A0] text-base font-semibold">Completed Orders</li>
                        </ul>
                    )}
                </ul>
                <div className="p-4 flex items-center space-x-3">
                    <img src="/ticket.png" alt="Tickets" className="h-6 w-6" />
                    <h2 className="text-[#8F94A0] text-base font-semibold">Tickets</h2>
                </div>
                <div className="p-4 flex items-center space-x-3">
                    <img src="/people.png" alt="Employees" className="h-6 w-6" />
                    <h2 className="text-[#8F94A0] text-lg font-semibold">Employees</h2>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
