'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Clubs() {
  // Hardcoded data - can be replaced with database queries in future
  const clubsData = {
    title: "Our Partner Clubs",
    subtitle: "Supporting local football clubs with premium teamwear",
    description: "We're proud to partner with local football clubs to provide high-quality teamwear and merchandise. Each club has its own unique identity and we help bring that to life through our products.",
    clubs: [
      {
        id: 1,
        name: "AFC Barwell",
        slug: "afc-barwell",
        description: "AFC Barwell is a community-focused football club with a rich history and passionate supporters.",
        founded: "1985",
        league: "Midland League Premier Division",
        colors: ["#FF0000", "#FFFFFF"],
        achievements: ["League Champions 2019", "Cup Winners 2021"],
        products: ["Home Kit", "Away Kit", "Training Wear", "Fan Merchandise"]
      },
      {
        id: 2,
        name: "Hinckley AFC",
        slug: "hinckley-afc",
        description: "Hinckley AFC represents the heart of the local community with a strong tradition of developing young talent.",
        founded: "1972",
        league: "Midland League Division One",
        colors: ["#0000FF", "#FFFFFF"],
        achievements: ["Youth Development Award 2020", "Community Club of the Year 2022"],
        products: ["Home Kit", "Away Kit", "Training Wear", "Youth Kits"]
      },
      {
        id: 3,
        name: "Stoke Golding FC",
        slug: "stoke-golding-fc",
        description: "Stoke Golding FC is a family-oriented club that promotes football at all levels within the community.",
        founded: "1990",
        league: "Leicestershire Senior League",
        colors: ["#00FF00", "#000000"],
        achievements: ["Fair Play Award 2021", "Community Engagement Award 2023"],
        products: ["Home Kit", "Away Kit", "Training Wear", "Junior Kits"]
      }
    ],
    stats: [
      { number: "3", label: "Partner Clubs" },
      { number: "500+", label: "Players Supported" },
      { number: "1000+", label: "Kits Delivered" },
      { number: "5", label: "Years Partnership" }
    ]
  };

  return (
    <div className="min-h-screen relative">
      {/* Hero Section with Stadium Background */}
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
              {clubsData.title}
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto drop-shadow-lg"
            >
              {clubsData.subtitle}
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
            <p className="text-lg text-gray-600 leading-relaxed">
              {clubsData.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clubsData.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-green-600 mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Meet Our Partner Clubs
          </motion.h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {clubsData.clubs.map((club, index) => (
              <motion.div
                key={club.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Club Header */}
                <div 
                  className="h-32 flex items-center justify-center text-white relative"
                  style={{ 
                    background: `linear-gradient(135deg, ${club.colors[0]}, ${club.colors[1]})` 
                  }}
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">{club.name}</h3>
                    <p className="text-sm opacity-90">Founded {club.founded}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{club.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-500 w-20">League:</span>
                      <span className="text-sm text-gray-700">{club.league}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-500 w-20">Founded:</span>
                      <span className="text-sm text-gray-700">{club.founded}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Recent Achievements:</h4>
                    <ul className="space-y-1">
                      {club.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Available Products:</h4>
                    <div className="flex flex-wrap gap-2">
                      {club.products.map((product, productIndex) => (
                        <span 
                          key={productIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={`/clubs/${club.slug}`}
                      className="block w-full bg-green-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                    >
                      Shop {club.name}
                    </Link>
                  </motion.div>
                </div>
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
            <h2 className="text-3xl font-bold mb-6">Want to Partner With Us?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Are you a local football club looking for quality teamwear? We&apos;d love to hear from you and discuss how we can support your club.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Become a Partner
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
