// components/OrderOverview.tsx
import React from 'react';

const orders = [
  {
    id: "1566446",
    date: "2024-09-16",
    storeName: "Jackson Place",
    region: "North America",
    status: "Packed",
    statusColor: "text-blue-500",
  },
  {
    id: "1566445",
    date: "2024-09-16",
    storeName: "Jackson Place",
    region: "North America",
    status: "New Order",
    statusColor: "text-green-500",
  },
  {
    id: "1566444",
    date: "2024-09-16",
    storeName: "Jackson Place",
    region: "North America",
    status: "Order Pending",
    statusColor: "text-yellow-500",
  },
  // Add more orders as needed
];

const OrderOverview = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by Store Name"
          className="p-2 border border-gray-300 rounded-md"
        />
        <button className="px-4 py-2 bg-green-500 text-white rounded-md">Export CSV</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Order ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Store Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Region</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-sm text-gray-700">{order.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{order.date}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{order.storeName}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{order.region}</td>
                <td className={`px-6 py-4 text-sm font-semibold ${order.statusColor}`}>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderOverview;
