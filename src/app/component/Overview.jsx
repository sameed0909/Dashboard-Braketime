"use client";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders, setCurrentPage } from '@/app/redux/overviewSlice';

const Overview = () => {
  const dispatch = useDispatch();
  const { orders, loading, error, currentPage, totalOrders, ordersPerPage } = useSelector((state) => state.overview);

  useEffect(() => {
    dispatch(fetchOrders({ page: currentPage, limit: ordersPerPage }));
  }, [dispatch, currentPage, ordersPerPage]);

  const totalPages = Math.ceil(totalOrders / ordersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-4 mt-4">
      <h2 className="text-3xl font-bold mb-6">Order Overview</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Order ID</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Cost</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Store Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id} className="cursor-pointer">
              <td className="px-6 py-4 text-sm text-gray-700">{order.order_number}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{order.shipping_cost}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{order.store.name}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{order.order_status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button onClick={handlePreviousPage} disabled={currentPage === 1} className="bg-[#13834B] text-white px-4 py-2 rounded-lg disabled:opacity-50">
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="bg-[#13834B] text-white px-4 py-2 rounded-lg disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
};

export default Overview;
