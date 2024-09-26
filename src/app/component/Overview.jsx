"use client";

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders, setSelectedOrder } from '@/app/redux/overviewSlice';

const Overview = () => {
  const dispatch = useDispatch();
  const { orders, loading, error, selectedOrder } = useSelector((state) => state.overview);

  console.log('order', orders)
  console.log('selected', selectedOrder)

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-4">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Order ID</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Store Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Region</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id} onClick={() => dispatch(setSelectedOrder(order))}>
              <td className="px-6 py-4 text-sm text-gray-700">{order.id}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{order.name}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{order.username}</td>
              <td className={`px-6 py-4 text-sm  ${order.statusColor}`}>{order.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Overview;
