'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Hardcoded data - can be replaced with database queries in future
  const contactData = {
    title: "Contact Us",
    subtitle: "Get in touch with The Club Shop team",
    description: "Have questions about our products or services? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    contactInfo: {
      email: "info@theclubshop.uk",
      phone: "+44 1234 567890",
      address: "123 Football Street, Sports City, SC1 2AB",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM"
    },
    faqs: [
      {
        question: "How long does it take to produce custom team kits?",
        answer: "Custom team kits typically take 2-3 weeks for production and delivery. Rush orders can be accommodated with additional fees."
      },
      {
        question: "Do you offer bulk discounts?",
        answer: "Yes, we offer special pricing for bulk orders. Contact us for a custom quote based on your team size and requirements."
      },
      {
        question: "Can I see samples before placing an order?",
        answer: "Absolutely! We can provide fabric samples and mock-ups to help you make the right choice for your team."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, bank transfers, and PayPal. Payment terms can be discussed for larger orders."
      }
    ]
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - can be connected to backend API
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
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
              {contactData.title}
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-black max-w-3xl mx-auto"
              style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}
            >
              {contactData.subtitle}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <p className="text-gray-600 mb-8">{contactData.description}</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us more about your requirements..."
                  />
                </motion.div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="text-green-600 text-xl">📧</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">{contactData.contactInfo.email}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="text-green-600 text-xl">📞</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">{contactData.contactInfo.phone}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="text-green-600 text-xl">📍</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">{contactData.contactInfo.address}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="text-green-600 text-xl">🕒</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">{contactData.contactInfo.hours}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="space-y-6">
            {contactData.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
