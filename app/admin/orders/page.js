'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function OrdersPage() {
  const [selectedStatus, setSelectedStatus] = useState('all');
  
  // Mock orders data
  const orders = [
    {
      id: 1,
      order_number: 'ORD-001',
      customer_name: 'John Doe',
      customer_email: 'john@example.com',
      total_amount: 89.99,
      status: 'delivered',
      payment_status: 'paid',
      created_at: '2024-01-15T10:00:00Z',
      items: [
        { product_name: 'Manchester United Home Jersey 2024', quantity: 1, price: 89.99 }
      ]
    },
    {
      id: 2,
      order_number: 'ORD-002',
      customer_name: 'Jane Smith',
      customer_email: 'jane@example.com',
      total_amount: 95.99,
      status: 'processing',
      payment_status: 'paid',
      created_at: '2024-01-16T14:30:00Z',
      items: [
        { product_name: 'Real Madrid Home Jersey 2024', quantity: 1, price: 95.99 }
      ]
    },
    {
      id: 3,
      order_number: 'ORD-003',
      customer_name: 'Mike Johnson',
      customer_email: 'mike@example.com',
      total_amount: 65.99,
      status: 'shipped',
      payment_status: 'paid',
      created_at: '2024-01-17T09:15:00Z',
      items: [
        { product_name: 'Liverpool Training Kit 2024', quantity: 1, price: 65.99 }
      ]
    }
  ];

  const filteredOrders = selectedStatus === 'all' 
    ? orders 
    : orders.filter(order => order.status.toLowerCase() === selectedStatus.toLowerCase());

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleStatusUpdate = (orderId, newStatus) => {
    alert(`Order status update disabled in demo mode. Would update order ${orderId} to ${newStatus}`);
  };


  const stats = {
    totalOrders: orders.length,
    totalRevenue: orders.reduce((sum, order) => sum + order.total_amount, 0),
    pendingOrders: orders.filter(order => order.status === 'pending').length,
    deliveredOrders: orders.filter(order => order.status === 'delivered').length
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
        <p className="mt-2 text-gray-600">Manage and track customer orders.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { name: 'Total Orders', value: stats.total, change: '+15.3%', color: 'blue' },
          { name: 'Pending Orders', value: stats.pending, change: '-5.2%', color: 'yellow' },
          { name: 'Delivered Orders', value: stats.delivered, change: '+18.7%', color: 'green' },
          { name: 'Total Revenue', value: `$${stats.totalRevenue.toFixed(2)}`, change: '+20.1%', color: 'emerald' }
        ].map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
              </div>
              <div className={`h-12 w-12 bg-${stat.color}-50 rounded-lg flex items-center justify-center text-${stat.color}-600`}>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status Filter</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="all">All Orders</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
              Export Orders
            </button>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Orders ({filteredOrders.length})
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Products
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order, index) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.order_number}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{order.customer_name}</div>
                      <div className="text-sm text-gray-500">{order.customer_email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {order.order_items && order.order_items.length > 0 ? (
                        order.order_items.map((item, idx) => (
                          <div key={idx} className="mb-1">
                            {item.product_name}
                            {item.size && <span className="text-gray-500"> - {item.size}</span>}
                            {item.color && <span className="text-gray-500"> ({item.color})</span>}
                            <span className="text-gray-500"> x{item.quantity}</span>
                          </div>
                        ))
                      ) : (
                        <span className="text-gray-500">No items</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">${order.total_amount}</div>
                    <div className="text-sm text-gray-500 capitalize">{order.payment_status}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(order.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="text-green-600 hover:text-green-900">
                        View
                      </button>
                      <button className="text-blue-600 hover:text-blue-900">
                        Edit
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
