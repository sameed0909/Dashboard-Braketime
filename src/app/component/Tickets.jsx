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
        < div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-[380px] mx-auto h-auto mt-6  justify-between">
            <h2 className="text-2xl font-bold text-center mb-4">Tickets</h2>                
        </div>
    );
};

export default InventoryOverview;
