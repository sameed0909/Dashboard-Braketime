// components/OverviewCards.tsx
import React from 'react';

const cards = [
  {
    title: "Order Requests",
    count: 146,
    description: "Total no. of requests from Stores",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
  },
  {
    title: "Order In Process",
    count: 198,
    description: "No. of orders in ship and pack",
    bgColor: "bg-gray-100",
    textColor: "text-gray-600",
  },
  {
    title: "Order Delivered",
    count: 649,
    description: "Total no. of orders delivered",
    bgColor: "bg-gray-100",
    textColor: "text-gray-600",
  },
];

const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.bgColor} p-6 rounded-lg shadow-md flex flex-col justify-between`}
        >
          <h3 className="text-xl font-semibold">{card.title}</h3>
          <p className={`${card.textColor} text-4xl font-bold`}>{card.count}</p>
          <p className="text-sm text-gray-500">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;
