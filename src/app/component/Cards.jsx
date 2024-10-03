"use client";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchOrdersByStatus, setCurrentPage, setcurrentstatus } from '@/app/redux/overviewSlice';

const Cards = () => {
  const dispatch = useDispatch();
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (status) => {
    setSelectedCard(status);
    dispatch(setCurrentPage(1));
    dispatch(setcurrentstatus(status));
    dispatch(fetchOrdersByStatus(status));
  };

  const ordersData = [
    { id: "01", title: "Order Requests", count: 10, description: "Total no. of requests from Stores", status: "in-transit" },
    { id: "02", title: "Order In Process", count: 50, description: "No. of orders in ship and pack", status: "in-process" },
    { id: "03", title: "Order Delivered", count: 200, description: "Total no. of orders delivered", status: "completed" },
  ];

  return (
    <div className="p-13">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold mb-6">Overview</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {ordersData.map((order, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-transform transform hover:scale-105 cursor-pointer border-2 shadow-2xl ${
                selectedCard === order.status ? 'bg-[#13834B]' : 'bg-white'
              }`}
              onClick={() => handleCardClick(order.status)}
            >
              <h3
                className={`text-xl font-bold mb-4 ${
                  selectedCard === order.status ? 'text-white' : 'text-black'
                }`}
              >
                {order.title}
              </h3>
              <p
                className={`text-5xl font-extrabold mb-2 ${
                  selectedCard === order.status ? 'text-white' : 'text-black'
                }`}
              >
                {order.count}
              </p>
              <p
                className={`text-sm ${
                  selectedCard === order.status ? 'text-white' : 'text-black'
                }`}
              >
                {order.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
