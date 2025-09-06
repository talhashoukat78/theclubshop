'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  // Hardcoded data - can be replaced with database queries in future
  const aboutData = {
    title: "About The Club Shop",
    subtitle: "The ultimate destination for local football merchandise",
    description: "The Club Shop is a one-stop destination for small and local football clubs to find the best selection of teamwear and merchandise. We offer an extensive range of high-quality products, expertly designed in your team's colors, so you can show your unwavering support for your favorite club. Join our vibrant community and contribute to the success of your club with every purchase.",
    features: [
      {
        title: "Wide Range of Products",
        description: "From replica shirts to everyday clothing items like hoodies and t-shirts, we have everything you need to showcase your club allegiance in style.",
        icon: "🎽"
      },
      {
        title: "High-Quality Design",
        description: "Our merchandise is expertly designed in your team's colours, ensuring that you stand out from the crowd with high-quality and authentic teamwear.",
        icon: "✨"
      },
      {
        title: "Contribution to Your Club",
        description: "With every purchase, you make a direct contribution to the success of your club. Support your team while enjoying top-notch merchandise.",
        icon: "⚽"
      }
    ],
    stats: [
      { number: "500+", label: "Happy Customers" },
      { number: "3", label: "Partner Clubs" },
      { number: "100+", label: "Products Available" },
      { number: "24/7", label: "Customer Support" }
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
              {aboutData.title}
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto drop-shadow-lg"
            >
              {aboutData.subtitle}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-black mb-8" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}>About Us</h2>
            <p className="text-lg text-black leading-relaxed mb-12" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}>
              {aboutData.description}
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {aboutData.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-4" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}>{feature.title}</h3>
                <p className="text-black" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aboutData.stats.map((stat, index) => (
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
                <p className="text-black font-medium" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-black mb-8" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}>Our Mission</h2>
            <p className="text-lg text-black leading-relaxed mb-8" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}>
              At The Club Shop, we believe that every local football club deserves access to high-quality merchandise that represents their unique identity. We're committed to providing affordable, premium teamwear that helps clubs build their brand and connect with their community.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <a
                href="/contact"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
