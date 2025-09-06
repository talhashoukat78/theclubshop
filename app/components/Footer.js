'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerData = {
    company: {
      name: "The Club Shop",
      description: "The ultimate destination for premium football merchandise and teamwear for local clubs across the UK.",
      logo: "/logo.png"
    },
    quickLinks: [
      { name: "Home", href: "/" },
      { name: "Shop", href: "/shop" },
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Clubs", href: "/clubs" }
    ],
    categories: [
      { name: "Team Kits", href: "/shop?category=kits" },
      { name: "Training Wear", href: "/shop?category=training" },
      { name: "Casual Wear", href: "/shop?category=casual" },
      { name: "Accessories", href: "/shop?category=accessories" }
    ],
    clubs: [
      { name: "AFC Barwell", href: "/clubs/afc-barwell" },
      { name: "Hinckley AFC", href: "/clubs/hinckley-afc" },
      { name: "All Clubs", href: "/clubs" }
    ],
    support: [
      { name: "Size Guide", href: "/size-guide" },
      { name: "Shipping Info", href: "/shipping" },
      { name: "Returns", href: "/returns" },
      { name: "FAQ", href: "/faq" },
      { name: "Track Order", href: "/track-order" }
    ],
    contact: {
      email: "info@theclubshop.uk",
      phone: "+44 1234 567890",
      address: "123 Football Street, Sports City, UK SC1 2AB"
    },
    social: [
      { name: "Facebook", href: "#", icon: "📘" },
      { name: "Twitter", href: "#", icon: "🐦" },
      { name: "Instagram", href: "#", icon: "📷" },
      { name: "YouTube", href: "#", icon: "📺" }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">⚽</span>
              </div>
              <h3 className="text-2xl font-bold text-white">The Club Shop</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              {footerData.company.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <span className="mr-3">📧</span>
                <a href={`mailto:${footerData.contact.email}`} className="hover:text-green-400 transition-colors">
                  {footerData.contact.email}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-3">📞</span>
                <a href={`tel:${footerData.contact.phone}`} className="hover:text-green-400 transition-colors">
                  {footerData.contact.phone}
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <span className="mr-3 mt-1">📍</span>
                <span>{footerData.contact.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Categories</h4>
            <ul className="space-y-3">
              {footerData.categories.map((category, index) => (
                <li key={index}>
                  <Link 
                    href={category.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-3">
              {footerData.support.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} The Club Shop. All rights reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-4 mb-4 md:mb-0"
            >
              {footerData.social.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-lg hover:bg-green-600 transition-colors duration-200"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-green-400 transition-colors">
                Cookie Policy
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-gray-800 border-t border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-gray-400 text-sm">
            <div className="flex items-center">
              <span className="mr-2">🔒</span>
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">🚚</span>
              <span>Free UK Delivery</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">↩️</span>
              <span>Easy Returns</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">⭐</span>
              <span>5-Star Service</span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
