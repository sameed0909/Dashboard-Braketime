import { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col h-[1056] bg-[#FCFCFC] w-64">
            <div className="flex items-center justify-between p-4">
            <img src="/logo.png" alt="BrakeTime Logo" className="h-150 w-150" />
            </div>
            <div className="p-4">
                <h2 className="text-gray-700 text-lg font-semibold">Dash board</h2>
            </div>
            <div className="p-4">
                <h2 className="text-gray-700 text-lg font-semibold">Inventory</h2>
            </div>
            <ul className="flex flex-col p-4 space-y-2">
                <li className="flex items-center" onClick={toggleMenu}>
                    <span className="material-iconstext-gray-700 text-lg font-semibold">Orders</span>
                    <span className="ml-auto text-gray-600">
                        {isOpen ? '▲' : '▼'}
                    </span>
                </li>
                {isOpen && (
                    <ul className="pl-6 space-y-1">
                        <li className="text-gray-700 text-lg font-semibold">Pending Orders</li>
                        <li className="text-gray-700 text-lg font-semibold">Completed Orders</li>
                    </ul>
                )}
                <li className="flex items-center">
                    <span className="ml-2 text-gray-700 text-lg font-semibold">Tickets</span>
                </li>
                <li className="flex items-center">
                    <span className="ml-2 text-gray-700 text-lg font-semibold">Employees</span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
