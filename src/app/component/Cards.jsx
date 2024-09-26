"use client";
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedOrder } from '@/app/redux/overviewSlice';

const Cards = () => {
  const dispatch = useDispatch();

  const handleCardClick = (order) => {
    dispatch(setSelectedOrder(order));
  };

  const ordersData = [
    { id: "1566446", title: "Order Requests", count: 146, description: "Total no. of requests from Stores" },
    { id: "1566445", title: "Order In Process", count: 198, description: "No. of orders in ship and pack" },
    { id: "1566444", title: "Order Delivered", count: 649, description: "Total no. of orders delivered" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-10">
      {ordersData.map((order, index) => (
        <div
          key={index}
          className="bg-[#13834B] p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
          onClick={() => handleCardClick(order)}
        >
          <h3 className="text-xl font-bold text-white mb-4">{order.title}</h3>
          <p className="text-5xl font-extrabold text-white mb-2">{order.count}</p>
          <p className="text-sm text-white">{order.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
