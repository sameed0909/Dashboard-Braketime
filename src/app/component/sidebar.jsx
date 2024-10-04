import { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col bg-white w-full p-4 font-['Red_Hat_Display']">
            <div className="min-h-screen bg-[#FCFCFC] rounded-lg">
                <div className="flex items-center justify-between p-4">
                    <img src="/logo.png" alt="BrakeTime Logo" className="h-150 w-150" />
                </div>
                <div className="p-4">
                    <img src="/people.png" alt="Dashboard" className="h-150 w-150" />
                    <h2 className="text-[#8F94A0] text-lg font-semibold">Dashboard</h2>
                </div>
                <div className="p-4">
                    <img src="/vector.png" alt="Dashboard" className="h-150 w-150" />
                    <h2 className="text-[#8F94A0] text-lg font-semibold">Inventory</h2>
                </div>
                <ul className="flex flex-col p-4 space-y-2">
                    <li className="flex items-center" onClick={toggleMenu}>
                        <img src="/box.png" alt="Dashboard" className="h-150 w-150" />
                        <span className="text-[#8F94A0] text-lg font-semibold">Orders</span>
                        <span className="ml-auto text-[#8F94A0]">
                            {isOpen ? '▲' : '▼'}
                        </span>
                    </li>
                    {isOpen && (
                        <ul className="pl-6 space-y-1">
                            <li className="text-[#8F94A0] text-lg font-semibold">Pending Orders</li>
                            <li className="text-[#8F94A0] text-lg font-semibold">Completed Orders</li>
                        </ul>
                    )}
                </ul>
                <div className="p-4">
                    <img src="/ticket.png" alt="Dashboard" className="h-150 w-150" />
                    <h2 className="text-[#8F94A0] text-lg font-semibold">Tickets</h2>
                </div>
                <div className="p-4">
                    <img src="/people.png" alt="Dashboard" className="h-150 w-150" />
                    <h2 className="text-[#8F94A0] text-lg font-semibold">Employees</h2>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
