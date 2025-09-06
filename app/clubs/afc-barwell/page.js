'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AFCBarwell() {
  // Hardcoded data - can be replaced with database queries in future
  const clubData = {
    name: "AFC Barwell",
    founded: "1985",
    league: "Midland League Premier Division",
    colors: ["#FF0000", "#FFFFFF"],
    description: "AFC Barwell is a community-focused football club with a rich history and passionate supporters. We're proud to represent our local community and provide opportunities for players of all ages to enjoy the beautiful game.",
    achievements: [
      "League Champions 2019",
      "Cup Winners 2021",
      "Community Club of the Year 2020",
      "Youth Development Excellence Award 2022"
    ],
    products: [
      {
        name: "Home Kit 2024/25",
        price: "£45.00",
        description: "Official home kit featuring the club's traditional red and white colors",
        image: "/api/placeholder/300/400",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        inStock: true
      },
      {
        name: "Away Kit 2024/25",
        price: "£45.00",
        description: "Modern away kit with contemporary design and club crest",
        image: "/api/placeholder/300/400",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        inStock: true
      },
      {
        name: "Training Top",
        price: "£35.00",
        description: "High-quality training top perfect for practice sessions",
        image: "/api/placeholder/300/400",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        inStock: true
      },
      {
        name: "Training Shorts",
        price: "£25.00",
        description: "Comfortable training shorts with moisture-wicking fabric",
        image: "/api/placeholder/300/400",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        inStock: true
      },
      {
        name: "Fan T-Shirt",
        price: "£20.00",
        description: "Show your support with this comfortable fan t-shirt",
        image: "/api/placeholder/300/400",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        inStock: true
      },
      {
        name: "Hoodie",
        price: "£40.00",
        description: "Warm and comfortable hoodie perfect for match days",
        image: "/api/placeholder/300/400",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        inStock: false
      }
    ],
    teamInfo: {
      manager: "John Smith",
      captain: "Mike Johnson",
      stadium: "Kirkby Road",
      capacity: "2,000"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${clubData.colors[0]}, ${clubData.colors[1]})` 
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              {clubData.name}
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-4"
            >
              Founded {clubData.founded} • {clubData.league}
            </motion.p>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg opacity-90 max-w-3xl mx-auto"
            >
              {clubData.description}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Club Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Club Details */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">About {clubData.name}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {clubData.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Information</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Manager:</span>
                      <span className="font-medium">{clubData.teamInfo.manager}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Captain:</span>
                      <span className="font-medium">{clubData.teamInfo.captain}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Stadium:</span>
                      <span className="font-medium">{clubData.teamInfo.stadium}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Capacity:</span>
                      <span className="font-medium">{clubData.teamInfo.capacity}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h3>
                  <ul className="space-y-2">
                    {clubData.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">39</div>
                    <div className="text-sm text-gray-600">Years Established</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">2,000</div>
                    <div className="text-sm text-gray-600">Stadium Capacity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">4</div>
                    <div className="text-sm text-gray-600">Recent Trophies</div>
                  </div>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl shadow-lg p-6 text-white text-center"
              >
                <h3 className="text-lg font-semibold mb-2">Join the Community</h3>
                <p className="text-sm opacity-90 mb-4">Support your local team</p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Involved
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            {clubData.name} Merchandise
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubData.products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                  <div className="text-6xl">⚽</div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-red-600">{product.price}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.inStock 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Available Sizes:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size, sizeIndex) => (
                        <span 
                          key={sizeIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={!product.inStock}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                      product.inStock
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Support {clubData.name}</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Show your support for {clubData.name} by purchasing official merchandise. Every purchase helps support the club and local community.
            </p>
            <div className="flex gap-4 justify-center flex-col sm:flex-row">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/clubs"
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
              >
                View All Clubs
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors duration-200"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

