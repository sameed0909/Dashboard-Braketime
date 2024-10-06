import { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div className={`flex flex-col bg-white dark:bg-gray-800 w-64 p-4 font-['Red_Hat_Display'] ${isOpen ? 'block' : 'hidden'} md:block`}>
            <div className="min-h-screen bg-[#FCFCFC] dark:bg-gray-900 rounded-lg">
                <div className="flex items-center justify-between p-4">
                    <img src="/logo.png" alt="BrakeTime Logo" className="h-150 w-150" />
                    <button className="md:hidden" onClick={toggleMenu}>
                        <img src="/hamburger-icon.png" alt="Menu" className="h-6 w-6" />
                    </button>
                </div>
                <div className="p-4 flex items-center space-x-3 ml-1" onClick={() => handleItemClick('dashboard')}>
                    <img
                        src="/vector.png"
                        alt="Dashboard"
                        className={`h-4 w-4 ${activeItem === 'dashboard' ? 'text-[#13834B] dark:text-green-500' : 'text-[#8F94A0] dark:text-gray-400'}`}
                    />
                    <h2 className={`text-base font-medium cursor-pointer ${activeItem === 'dashboard' ? 'text-[#13834B] dark:text-green-500' : 'text-[#8F94A0] dark:text-gray-400'}`}>Dashboard</h2>
                </div>
                <div className="p-4 flex items-center space-x-3" onClick={() => handleItemClick('inventory')}>
                    <img
                        src="/shopping.png"
                        alt="Inventory"
                        className={`h-6 w-6 ${activeItem === 'inventory' ? 'text-[#13834B] dark:text-green-500' : 'text-[#8F94A0] dark:text-gray-400'}`}
                    />
                    <h2 className={`text-base font-medium cursor-pointer ${activeItem === 'inventory' ? 'text-[#13834B] dark:text-green-500' : 'text-[#8F94A0] dark:text-gray-400'}`}>Inventory</h2>
                </div>
                <ul className="flex flex-col p-4 space-y-2">
                    <li className="flex items-center space-x-3" onClick={() => { handleItemClick('orders'); toggleMenu(); }}>
                        <img
                            src="/box.png"
                            alt="Orders"
                            className={`h-6 w-6 ${activeItem === 'orders' ? 'text-[#13834B] dark:text-green-500' : 'text-[#8F94A0] dark:text-gray-400'}`}
                        />
                        <span className={`text-base font-medium cursor-pointer ${activeItem === 'orders' ? 'text-[#13834B] dark:text-green-500' : 'text-[#8F94A0] dark:text-gray-400'}`}>
                            Orders
                        </span>
                        <span className="ml-auto text-[#8F94A0] dark:text-gray-400" onClick={toggleMenu}>
                            {isOpen ? <img src="/arrow-down.png" alt="Arrow" /> : <img src="/arrow-down.png" alt="Arrow" />}
                        </span>
                    </li>
                    {isOpen && (
                        <ul className="pl-6 space-y-1">
                            <li className="text-[#8F94A0] dark:text-gray-400 text-base font-medium cursor-pointer">Pending Orders</li>
                            <li className="text-[#8F94A0] dark:text-gray-400 text-base font-medium cursor-pointer">Completed Orders</li>
                        </ul>
                    )}
                </ul>
                <div className="p-4 flex items-center space-x-3" onClick={() => handleItemClick('tickets')}>
                    <img
                        src="/ticket.png"
                        alt="Tickets"
                        className={`h-6 w-6 ${activeItem === 'tickets' ? 'text-[#13834B] dark:text-green-500' : 'text-[#8F94A0] dark:text-gray-400'}`}
                    />
                    <h2 className={`text-base font-medium cursor-pointer ${activeItem === 'tickets' ? 'text-[#13834B] dark:text-green-500' : 'text-[#8F94A0] dark:text-gray-400'}`}>Tickets</h2>
                </div>
                <div className="p-4 flex items-center space-x-3" onClick={() => handleItemClick('employees')}>
                    <img
                        src="/people.png"
                        alt="Employees"
                        className={`h-6 w-6 ${activeItem === 'employees' ? 'text-[#13834B] dark:text-green-500' : 'text-[#8F94A0] dark:text-gray-400'}`}
                    />
                    <h2 className={`text-lg font-medium cursor-pointer ${activeItem === 'employees' ? 'text-[#13834B] dark:text-green-500' : 'text-[#8F94A0] dark:text-gray-400'}`}>Employees</h2>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
