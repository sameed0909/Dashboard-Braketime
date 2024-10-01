// components/Sidebar.jsx

import { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col h-screen bg-white shadow-lg w-64">
            <div className="flex items-center justify-between p-4 border-b">
            <img src="/logo.png" alt="BrakeTime Logo" className="h-150 w-150" />
            </div>
            <div className="p-4">
                <h2 className="text-gray-700 text-lg font-semibold">Dash board</h2>
            </div>
            <ul className="flex flex-col p-4 space-y-2">
                <li className="flex items-center">
                    <span className="material-icons text-gray-600">shopping_cart</span>
                    <span className="ml-2 text-gray-700">Inventory</span>
                </li>
                <li className="flex items-center" onClick={toggleMenu}>
                    <span className="material-icons text-gray-600">assignment</span>
                    <span className="ml-2 text-gray-700">Order</span>
                    <span className="ml-auto text-gray-600">
                        {isOpen ? '▲' : '▼'}
                    </span>
                </li>
                {isOpen && (
                    <ul className="pl-6 space-y-1">
                        <li className="text-gray-600">Pending Orders</li>
                        <li className="text-gray-600">Completed Orders</li>
                    </ul>
                )}
                <li className="flex items-center">
                    <span className="material-icons text-gray-600">ticket</span>
                    <span className="ml-2 text-gray-700">Tickets</span>
                </li>
                <li className="flex items-center">
                    <span className="material-icons text-gray-600">people</span>
                    <span className="ml-2 text-gray-700">Employees</span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
