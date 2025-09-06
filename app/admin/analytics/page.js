'use client';

import { motion } from 'framer-motion';

export default function AnalyticsPage() {
  // Mock analytics data
  const analytics = {
    totalRevenue: 251.96,
    totalOrders: 3,
    totalCustomers: 3,
    totalProducts: 6,
    revenue: {
      total: 251.96,
      monthly: 251.96,
      growth: 12.5
    },
    orders: {
      total: 3,
      monthly: 3,
      growth: 8.2
    },
    customers: {
      total: 3,
      monthly: 3,
      growth: 15.3
    },
    topProducts: [
      { name: 'Manchester United Home Jersey 2024', sales: 1, revenue: 89.99 },
      { name: 'Real Madrid Home Jersey 2024', sales: 1, revenue: 95.99 },
      { name: 'Liverpool Training Kit 2024', sales: 1, revenue: 65.99 }
    ],
    recentOrders: [
      { id: 1, customer: 'John Doe', amount: 89.99, date: '2024-01-15' },
      { id: 2, customer: 'Jane Smith', amount: 95.99, date: '2024-01-16' },
      { id: 3, customer: 'Mike Johnson', amount: 65.99, date: '2024-01-17' }
    ]
  };

  const topProducts = analytics.topProducts || [];

  const recentActivity = [
    { type: 'order', message: 'New order #ORD-001 from John Smith', time: '2 minutes ago', amount: '$89.99' },
    { type: 'customer', message: 'New customer registration: Sarah Johnson', time: '15 minutes ago', amount: null },
    { type: 'order', message: 'Order #ORD-002 completed', time: '1 hour ago', amount: '$65.50' },
    { type: 'product', message: 'Product "AFC Barwell Home Kit" stock updated', time: '2 hours ago', amount: null },
    { type: 'order', message: 'New order #ORD-003 from Mike Wilson', time: '3 hours ago', amount: '$89.99' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="mt-2 text-gray-600">Track your store performance and insights.</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { name: 'Total Revenue', value: `$${analytics.totalRevenue.toLocaleString()}`, change: '+20.1%', color: 'green', icon: '💰' },
          { name: 'Total Orders', value: analytics.totalOrders.toLocaleString(), change: '+15.3%', color: 'blue', icon: '📦' },
          { name: 'Total Customers', value: analytics.totalCustomers.toLocaleString(), change: '+12.5%', color: 'purple', icon: '👥' },
          { name: 'Total Products', value: analytics.totalProducts.toLocaleString(), change: '+8.2%', color: 'orange', icon: '🏷️' }
        ].map((metric, index) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                <p className="text-sm text-green-600 mt-1">{metric.change} from last month</p>
              </div>
              <div className="text-3xl">{metric.icon}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue Overview</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📈</div>
              <p className="text-gray-500">Revenue chart would be here</p>
              <p className="text-sm text-gray-400">Integration with Chart.js or similar</p>
            </div>
          </div>
        </motion.div>

        {/* Orders Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Orders Trend</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <p className="text-gray-500">Orders chart would be here</p>
              <p className="text-sm text-gray-400">Integration with Chart.js or similar</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Top Products and Recent Activity */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Top Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200"
        >
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Top Products</h2>
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
                    <p className="text-sm font-medium text-gray-900">${product.revenue.toLocaleString()}</p>
                    <p className="text-xs text-green-600">{product.growth}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200"
        >
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                    activity.type === 'order' ? 'bg-green-100' :
                    activity.type === 'customer' ? 'bg-blue-100' :
                    'bg-purple-100'
                  }`}>
                    {activity.type === 'order' ? '📦' :
                     activity.type === 'customer' ? '👤' : '🏷️'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-gray-500">{activity.time}</p>
                      {activity.amount && (
                        <p className="text-xs font-medium text-green-600">{activity.amount}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Export Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Export Reports</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <svg className="h-5 w-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Sales Report
          </button>
          <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <svg className="h-5 w-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Orders Report
          </button>
          <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <svg className="h-5 w-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
            Customer Report
          </button>
          <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <svg className="h-5 w-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            Product Report
          </button>
        </div>
      </motion.div>
    </div>
  );
}
