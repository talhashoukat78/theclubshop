'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    storeName: 'The Club Shop',
    storeEmail: 'admin@theclubshop.com',
    storePhone: '+1 (555) 123-4567',
    storeAddress: '123 Football Street, Sports City, SC 12345',
    currency: 'USD',
    timezone: 'UTC-5',
    language: 'English',
    maintenanceMode: false,
    allowRegistration: true,
    requireEmailVerification: true,
    lowStockThreshold: 10,
    autoCancelOrders: 7,
    emailNotifications: true,
    smsNotifications: false,
    orderConfirmation: true,
    shippingConfirmation: true,
    deliveryConfirmation: true
  });

  const tabs = [
    { id: 'general', name: 'General', icon: '⚙️' },
    { id: 'store', name: 'Store Info', icon: '🏪' },
    { id: 'orders', name: 'Orders', icon: '📦' },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
    { id: 'security', name: 'Security', icon: '🔒' }
  ];

  const handleInputChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Here you would typically save to your backend
    console.log('Saving settings:', settings);
    alert('Settings saved successfully!');
  };

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">General Settings</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
            <select
              value={settings.currency}
              onChange={(e) => handleInputChange('currency', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
              <option value="CAD">CAD - Canadian Dollar</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
            <select
              value={settings.timezone}
              onChange={(e) => handleInputChange('timezone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="UTC-5">UTC-5 (Eastern Time)</option>
              <option value="UTC-6">UTC-6 (Central Time)</option>
              <option value="UTC-7">UTC-7 (Mountain Time)</option>
              <option value="UTC-8">UTC-8 (Pacific Time)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
            <select
              value={settings.language}
              onChange={(e) => handleInputChange('language', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="maintenanceMode"
              checked={settings.maintenanceMode}
              onChange={(e) => handleInputChange('maintenanceMode', e.target.checked)}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="maintenanceMode" className="ml-2 block text-sm text-gray-900">
              Maintenance Mode
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStoreSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Store Information</h3>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Store Name</label>
            <input
              type="text"
              value={settings.storeName}
              onChange={(e) => handleInputChange('storeName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Store Email</label>
            <input
              type="email"
              value={settings.storeEmail}
              onChange={(e) => handleInputChange('storeEmail', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Store Phone</label>
            <input
              type="tel"
              value={settings.storePhone}
              onChange={(e) => handleInputChange('storePhone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Store Address</label>
            <textarea
              value={settings.storeAddress}
              onChange={(e) => handleInputChange('storeAddress', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderOrderSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Order Settings</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Low Stock Threshold</label>
            <input
              type="number"
              value={settings.lowStockThreshold}
              onChange={(e) => handleInputChange('lowStockThreshold', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Auto Cancel Orders (days)</label>
            <input
              type="number"
              value={settings.autoCancelOrders}
              onChange={(e) => handleInputChange('autoCancelOrders', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="allowRegistration"
              checked={settings.allowRegistration}
              onChange={(e) => handleInputChange('allowRegistration', e.target.checked)}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="allowRegistration" className="ml-2 block text-sm text-gray-900">
              Allow Customer Registration
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="requireEmailVerification"
              checked={settings.requireEmailVerification}
              onChange={(e) => handleInputChange('requireEmailVerification', e.target.checked)}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="requireEmailVerification" className="ml-2 block text-sm text-gray-900">
              Require Email Verification
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900">Email Notifications</h4>
              <p className="text-sm text-gray-500">Receive notifications via email</p>
            </div>
            <input
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={(e) => handleInputChange('emailNotifications', e.target.checked)}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900">SMS Notifications</h4>
              <p className="text-sm text-gray-500">Receive notifications via SMS</p>
            </div>
            <input
              type="checkbox"
              checked={settings.smsNotifications}
              onChange={(e) => handleInputChange('smsNotifications', e.target.checked)}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900">Order Confirmation</h4>
              <p className="text-sm text-gray-500">Send confirmation emails for new orders</p>
            </div>
            <input
              type="checkbox"
              checked={settings.orderConfirmation}
              onChange={(e) => handleInputChange('orderConfirmation', e.target.checked)}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900">Shipping Confirmation</h4>
              <p className="text-sm text-gray-500">Send emails when orders are shipped</p>
            </div>
            <input
              type="checkbox"
              checked={settings.shippingConfirmation}
              onChange={(e) => handleInputChange('shippingConfirmation', e.target.checked)}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900">Delivery Confirmation</h4>
              <p className="text-sm text-gray-500">Send emails when orders are delivered</p>
            </div>
            <input
              type="checkbox"
              checked={settings.deliveryConfirmation}
              onChange={(e) => handleInputChange('deliveryConfirmation', e.target.checked)}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Security Settings</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Change Password</h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <input
                type="password"
                placeholder="Current Password"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <input
                type="password"
                placeholder="New Password"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
              Update Password
            </button>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Two-Factor Authentication</h4>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Enable 2FA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general': return renderGeneralSettings();
      case 'store': return renderStoreSettings();
      case 'orders': return renderOrderSettings();
      case 'notifications': return renderNotificationSettings();
      case 'security': return renderSecuritySettings();
      default: return renderGeneralSettings();
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-2 text-gray-600">Manage your store configuration and preferences.</p>
      </div>

      {/* Settings Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="p-6">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {renderTabContent()}
            
            {/* Save Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-end">
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  Save Settings
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
