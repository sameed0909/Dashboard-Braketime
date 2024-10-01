"use client";

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders, setSelectedOrder, setCurrentPage } from '@/app/redux/overviewSlice';

const Overview = () => {
  const dispatch = useDispatch();
  const { orders, loading, error, currentPage, ordersPerPage, totalOrders, selectedOrder } = useSelector((state) => state.overview);

  useEffect(() => {
    dispatch(fetchOrders({ page: currentPage, limit: ordersPerPage }));
  }, [dispatch, currentPage, ordersPerPage]);

  const totalPages = Math.ceil(totalOrders / ordersPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setCurrentPage(page));
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-4">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Order ID</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Store Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {orders.map((order) => (
            <tr
              key={order.id}
              onClick={() => dispatch(setSelectedOrder(order))}
              className={`cursor-pointer ${selectedOrder?.id === order.id ? 'bg-gray-100' : ''}`}
            >
              <td className="px-6 py-4 text-sm text-gray-700">{order.order_number}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{order.name}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{order.username}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{order.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-[#0A502C] text-white rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Previous
        </button>
        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-[#0A502C] text-white rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Overview;
