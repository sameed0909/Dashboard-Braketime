import React from 'react';

const InventoryOverview = () => {
    const inventoryItems = [
        {
            title: 'Low Stock',
            itemsCount: 18,
            description: 'All stock items that are low inventory',
            trend: '-0.01%',
            icon: '/tick.png',
        },
        {
            title: 'Out Of Stock',
            itemsCount: 9,
            description: 'All stock items that are Out of Stock',
            trend: '-0.01%',
            icon: '/cube.png',
        },
        {
            title: 'Short Expire',
            itemsCount: 3,
            description: 'All stock items that are Short expire',
            trend: '-0.01%',
            icon: '/check.png',
        },
    ];

    return (
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-[380px] mx-auto h-auto flex flex-col justify-between  overflow-hidden">
            <h2 className="text-2xl font-bold text-center mb-4">Inventory Overview</h2>
            <div className="flex-grow">
                {inventoryItems.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-between py-2 px-3 border rounded-lg ${index < inventoryItems.length - 1 ? 'mb-4 border-b' : ''}`}
                    >
                        <div className="flex items-center">
                            <div className="bg-[#13834B] rounded-full p-2 mr-3 flex items-center justify-center">
                                <img src={item.icon} alt={item.title} className="h-6 w-8 object-cover" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-sm font-bold">{item.itemsCount} Items</span>
                            <div className={`text-xs ${parseFloat(item.trend) < 0 ? 'text-red-500' : 'text-green-500'}`}>
                                {item.trend}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InventoryOverview;
