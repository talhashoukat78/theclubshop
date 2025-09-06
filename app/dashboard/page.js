'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    totalOrders: 3,
    totalSpent: 251.96,
    memberSince: '2024-01-15'
  };

  // Mock orders data
  const orders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 89.99,
      items: [
        { name: 'Manchester United Home Jersey 2024', quantity: 1, price: 89.99 }
      ]
    },
    {
      id: 'ORD-002',
      date: '2024-01-16',
      status: 'Processing',
      total: 95.99,
      items: [
        { name: 'Real Madrid Home Jersey 2024', quantity: 1, price: 95.99 }
      ]
    },
    {
      id: 'ORD-003',
      date: '2024-01-17',
      status: 'Shipped',
      total: 65.99,
      items: [
        { name: 'Liverpool Training Kit 2024', quantity: 1, price: 65.99 }
      ]
    }
  ];

  // Mock wishlist data
  const wishlist = [
    {
      id: 1,
      name: 'Barcelona Away Jersey 2024',
      price: 92.99,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=300&fit=crop&crop=center',
      addedDate: '2024-01-10'
    },
    {
      id: 2,
      name: 'Chelsea Casual T-Shirt',
      price: 35.99,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=300&fit=crop&crop=center',
      addedDate: '2024-01-12'
    },
    {
      id: 3,
      name: 'Arsenal Scarf',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=300&fit=crop&crop=center',
      addedDate: '2024-01-14'
    }
  ];

  // Mock addresses data
  const addresses = [
    {
      id: 1,
      type: 'Home',
      name: 'John Doe',
      address: '123 Main Street',
      city: 'London',
      postcode: 'SW1A 1AA',
      country: 'United Kingdom',
      phone: '+44 20 7946 0958',
      isDefault: true
    },
    {
      id: 2,
      type: 'Work',
      name: 'John Doe',
      address: '456 Business Avenue',
      city: 'Manchester',
      postcode: 'M1 1AA',
      country: 'United Kingdom',
      phone: '+44 161 123 4567',
      isDefault: false
    }
  ];

  // Mock notifications data
  const notifications = [
    {
      id: 1,
      title: 'Order Shipped',
      message: 'Your order #ORD-003 has been shipped and is on its way!',
      date: '2024-01-18',
      isRead: false,
      type: 'order'
    },
    {
      id: 2,
      title: 'New Product Available',
      message: 'Check out the new Barcelona Away Jersey 2024!',
      date: '2024-01-17',
      isRead: true,
      type: 'product'
    },
    {
      id: 3,
      title: 'Order Delivered',
      message: 'Your order #ORD-001 has been delivered successfully.',
      date: '2024-01-16',
      isRead: true,
      type: 'order'
    },
    {
      id: 4,
      title: 'Special Offer',
      message: 'Get 20% off on all training kits this week!',
      date: '2024-01-15',
      isRead: false,
      type: 'promotion'
    }
  ];

  // Mock settings data
  const settings = {
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: true,
    orderUpdates: true,
    newProductAlerts: false,
    language: 'en',
    currency: 'GBP',
    timezone: 'Europe/London'
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'orders', name: 'Orders', icon: '📦' },
    { id: 'wishlist', name: 'Wishlist', icon: '❤️' },
    { id: 'addresses', name: 'Addresses', icon: '📍' },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
    { id: 'profile', name: 'Profile', icon: '👤' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
          <p className="mt-2 text-gray-600">Welcome back, {user.name}!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="text-center mb-6">
                <div className="h-20 w-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white font-bold">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-3 ${
                      activeTab === tab.id
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span className="font-medium">{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                  >
                    <div className="flex items-center">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Total Orders</p>
                        <p className="text-2xl font-bold text-gray-900">{user.totalOrders}</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                  >
                    <div className="flex items-center">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Total Spent</p>
                        <p className="text-2xl font-bold text-gray-900">£{user.totalSpent.toFixed(2)}</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                  >
                    <div className="flex items-center">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Member Since</p>
                        <p className="text-2xl font-bold text-gray-900">{new Date(user.memberSince).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
                    <Link
                      href="/dashboard?tab=orders"
                      onClick={() => setActiveTab('orders')}
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      View All
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {orders.slice(0, 3).map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Order #{order.id}</p>
                          <p className="text-sm text-gray-600">{order.items[0].name}</p>
                          <p className="text-sm text-gray-500">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">£{order.total.toFixed(2)}</p>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Order History</h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">Order #{order.id}</h3>
                          <p className="text-sm text-gray-600">Placed on {order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">£{order.total.toFixed(2)}</p>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex items-center justify-between text-sm">
                            <span className="text-gray-700">{item.name} x {item.quantity}</span>
                            <span className="font-medium">£{item.price.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">My Wishlist</h2>
                  <span className="text-sm text-gray-500">{wishlist.length} items</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlist.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                      <p className="text-lg font-bold text-green-600 mb-3">£{item.price.toFixed(2)}</p>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => alert('Add to cart functionality disabled in demo mode')}
                          className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
                        >
                          Add to Cart
                        </button>
                        <button
                          onClick={() => alert('Remove from wishlist functionality disabled in demo mode')}
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Saved Addresses</h2>
                  <button
                    onClick={() => alert('Add address functionality disabled in demo mode')}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Add Address
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {addresses.map((address) => (
                    <div key={address.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-900">{address.type}</h3>
                          {address.isDefault && (
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                              Default
                            </span>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => alert('Edit address functionality disabled in demo mode')}
                            className="text-green-600 hover:text-green-700 text-sm font-medium"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => alert('Delete address functionality disabled in demo mode')}
                            className="text-red-600 hover:text-red-700 text-sm font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>{address.name}</p>
                        <p>{address.address}</p>
                        <p>{address.city}, {address.postcode}</p>
                        <p>{address.country}</p>
                        <p>{address.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
                  <button
                    onClick={() => alert('Mark all as read functionality disabled in demo mode')}
                    className="text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    Mark All as Read
                  </button>
                </div>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 rounded-lg border ${
                        notification.isRead 
                          ? 'bg-gray-50 border-gray-200' 
                          : 'bg-blue-50 border-blue-200'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                            {!notification.isRead && (
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{notification.message}</p>
                          <p className="text-xs text-gray-500">{notification.date}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            notification.type === 'order' ? 'bg-green-100 text-green-800' :
                            notification.type === 'product' ? 'bg-blue-100 text-blue-800' :
                            'bg-purple-100 text-purple-800'
                          }`}>
                            {notification.type}
                          </span>
                          <button
                            onClick={() => alert('Delete notification functionality disabled in demo mode')}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Settings</h2>
                <div className="space-y-8">
                  {/* Notification Settings */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Email Notifications</p>
                          <p className="text-sm text-gray-600">Receive updates via email</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.emailNotifications}
                            onChange={() => alert('Settings update disabled in demo mode')}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">SMS Notifications</p>
                          <p className="text-sm text-gray-600">Receive updates via SMS</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.smsNotifications}
                            onChange={() => alert('Settings update disabled in demo mode')}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Marketing Emails</p>
                          <p className="text-sm text-gray-600">Receive promotional offers and updates</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.marketingEmails}
                            onChange={() => alert('Settings update disabled in demo mode')}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* General Settings */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">General Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                        <select
                          value={settings.language}
                          onChange={() => alert('Settings update disabled in demo mode')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <option value="en">English</option>
                          <option value="es">Spanish</option>
                          <option value="fr">French</option>
                          <option value="de">German</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                        <select
                          value={settings.currency}
                          onChange={() => alert('Settings update disabled in demo mode')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <option value="GBP">British Pound (£)</option>
                          <option value="USD">US Dollar ($)</option>
                          <option value="EUR">Euro (€)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                        <select
                          value={settings.timezone}
                          onChange={() => alert('Settings update disabled in demo mode')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <option value="Europe/London">London (GMT)</option>
                          <option value="America/New_York">New York (EST)</option>
                          <option value="Europe/Paris">Paris (CET)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => alert('Settings save functionality disabled in demo mode')}
                      className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Save Settings
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={user.name}
                      readOnly
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={user.email}
                      readOnly
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Member Since</label>
                    <input
                      type="text"
                      value={new Date(user.memberSince).toLocaleDateString()}
                      readOnly
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                    />
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => alert('Profile editing is disabled in demo mode')}
                      className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
