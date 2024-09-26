"use client";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedOrder } from '@/app/redux/overviewSlice';

const Cards = () => {
  const dispatch = useDispatch();
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (order) => {
    dispatch(setSelectedOrder(order));
    setSelectedCard(order.id);
  };

  const ordersData = [
    { id: "1566446", title: "Order Requests", count: 10, description: "Total no. of requests from Stores" },
    { id: "1566445", title: "Order In Process", count: 50, description: "No. of orders in ship and pack" },
    { id: "1566444", title: "Order Delivered", count: 200, description: "Total no. of orders delivered" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-10">
      {ordersData.map((order, index) => (
        <div
          key={index}
          className={`p-6 rounded-xl shadow-2xl transition-transform transform hover:scale-105 cursor-pointer ${
            selectedCard === order.id ? 'bg-[#0A502C]' : 'bg-white'
          }`}
          onClick={() => handleCardClick(order)}
        >
          <h3 className={`text-xl font-bold mb-4 ${
            selectedCard === order.id ? 'text-white' : 'text-black'
          }`}>
            {order.title}
          </h3>
          <p className={`text-5xl font-extrabold mb-2 ${
            selectedCard === order.id ? 'text-white' : 'text-black'
          }`}>
            {order.count}
          </p>
          <p className={`text-sm ${
            selectedCard === order.id ? 'text-white' : 'text-black'
          }`}>
            {order.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
