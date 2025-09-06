'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TeamKits() {
  // Hardcoded data - can be replaced with database queries in future
  const teamKitsData = {
    title: "Team Kits and TeamWear",
    subtitle: "Premium quality teamwear designed for your club",
    description: "Discover our extensive range of high-quality team kits and teamwear. From match day kits to training gear, we have everything your team needs to look professional and perform at their best.",
    categories: [
      {
        name: "Match Day Kits",
        description: "Official match day shirts, shorts, and socks in your club colors",
        image: "/api/placeholder/400/300",
        items: ["Home Kit", "Away Kit", "Third Kit", "Goalkeeper Kit"]
      },
      {
        name: "Training Wear",
        description: "Comfortable and durable training gear for practice sessions",
        image: "/api/placeholder/400/300",
        items: ["Training Tops", "Training Shorts", "Training Pants", "Training Jackets"]
      },
      {
        name: "Casual Wear",
        description: "Everyday clothing items for fans and supporters",
        image: "/api/placeholder/400/300",
        items: ["T-Shirts", "Hoodies", "Polo Shirts", "Caps"]
      },
      {
        name: "Accessories",
        description: "Essential accessories to complete your team's look",
        image: "/api/placeholder/400/300",
        items: ["Socks", "Shin Guards", "Bags", "Water Bottles"]
      }
    ],
    features: [
      {
        title: "Custom Design",
        description: "All kits are designed specifically for your club with your colors and logo",
        icon: "🎨"
      },
      {
        title: "Premium Quality",
        description: "Made from high-quality materials that last season after season",
        icon: "⭐"
      },
      {
        title: "Quick Delivery",
        description: "Fast turnaround times to get your team ready for the season",
        icon: "🚚"
      },
      {
        title: "Bulk Orders",
        description: "Special pricing for team orders and bulk purchases",
        icon: "👥"
      }
    ]
  };

  return (
    <div className="min-h-screen relative">
      {/* Hero Section with Green Gradient Background */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden min-h-screen flex items-center -mt-20 pt-20"
      >
        {/* Stunning Green Gradient Background */}
        <div className="absolute inset-0 -top-20 bg-gradient-to-br from-green-600 via-emerald-700 to-green-800">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-600/30 to-green-700/20"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl"
            >
              {teamKitsData.title}
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto drop-shadow-lg"
            >
              {teamKitsData.subtitle}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg text-black leading-relaxed" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}>
              {teamKitsData.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-black mb-12"
            style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}
          >
            Our Product Categories
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamKitsData.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
                  <div className="text-6xl">⚽</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-3" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}>{category.name}</h3>
                  <p className="text-black mb-4" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}>{category.description}</p>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-black flex items-center" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}>
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Why Choose Our Team Kits?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamKitsData.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-6"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-3" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}>{feature.title}</h3>
                <p className="text-black" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-black" style={{textShadow: '2px 2px 4px rgba(255,255,255,0.8), -2px -2px 4px rgba(255,255,255,0.8), 2px -2px 4px rgba(255,255,255,0.8), -2px 2px 4px rgba(255,255,255,0.8)'}}>Ready to Kit Out Your Team?</h2>
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}>
              Contact us today to discuss your team's kit requirements and get a custom quote.
            </p>
            <div className="flex gap-4 justify-center flex-col sm:flex-row">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Get Quote
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/clubs"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
              >
                View Clubs
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
