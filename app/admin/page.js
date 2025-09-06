'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AdminDashboard() {
  const stats = [
    {
      name: 'Total Revenue',
      value: '$45,231',
      change: '+20.1%',
      changeType: 'positive',
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      name: 'Total Orders',
      value: '2,350',
      change: '+15.3%',
      changeType: 'positive',
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      name: 'Total Products',
      value: '1,234',
      change: '+8.2%',
      changeType: 'positive',
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      name: 'Active Customers',
      value: '5,678',
      change: '+12.5%',
      changeType: 'positive',
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    }
  ];

  const recentOrders = [
    {
      id: '#ORD-001',
      customer: 'John Smith',
      product: 'AFC Barwell Home Kit',
      amount: '$89.99',
      status: 'Completed',
      date: '2024-01-15'
    },
    {
      id: '#ORD-002',
      customer: 'Sarah Johnson',
      product: 'Hinckley AFC Training Kit',
      amount: '$65.50',
      status: 'Processing',
      date: '2024-01-14'
    },
    {
      id: '#ORD-003',
      customer: 'Mike Wilson',
      product: 'Stoke Golding FC Away Kit',
      amount: '$89.99',
      status: 'Shipped',
      date: '2024-01-13'
    },
    {
      id: '#ORD-004',
      customer: 'Emma Brown',
      product: 'AFC Barwell Training Kit',
      amount: '$65.50',
      status: 'Pending',
      date: '2024-01-12'
    }
  ];

  const topProducts = [
    { name: 'AFC Barwell Home Kit', sales: 156, revenue: '$14,044' },
    { name: 'Hinckley AFC Training Kit', sales: 134, revenue: '$8,777' },
    { name: 'Stoke Golding FC Away Kit', sales: 98, revenue: '$8,819' },
    { name: 'AFC Barwell Training Kit', sales: 87, revenue: '$5,699' },
    { name: 'Hinckley AFC Home Kit', sales: 76, revenue: '$6,840' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome back! Here's what's happening with your store today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
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
                <p className={`text-sm mt-1 ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change} from last month
                </p>
              </div>
              <div className="h-12 w-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                {stat.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200"
        >
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
              <Link
                href="/admin/orders"
                className="text-sm text-green-600 hover:text-green-700 font-medium"
              >
                View all
              </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium text-gray-900">{order.id}</span>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{order.customer} • {order.product}</p>
                    <p className="text-xs text-gray-500">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{order.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Top Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200"
        >
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Top Products</h2>
              <Link
                href="/admin/products"
                className="text-sm text-green-600 hover:text-green-700 font-medium"
              >
                View all
              </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.sales} sales</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{product.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/admin/products/new"
            className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors duration-200"
          >
            <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Add Product</p>
              <p className="text-xs text-gray-500">Create new product</p>
            </div>
          </Link>

          <Link
            href="/admin/orders"
            className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors duration-200"
          >
            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Manage Orders</p>
              <p className="text-xs text-gray-500">View all orders</p>
            </div>
          </Link>

          <Link
            href="/admin/customers"
            className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors duration-200"
          >
            <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">View Customers</p>
              <p className="text-xs text-gray-500">Customer management</p>
            </div>
          </Link>

          <Link
            href="/admin/analytics"
            className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors duration-200"
          >
            <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="h-5 w-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">View Analytics</p>
              <p className="text-xs text-gray-500">Sales reports</p>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
