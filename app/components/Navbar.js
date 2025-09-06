'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { clubs } from '@/data/products';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const [isClubsOpen, setIsClubsOpen] = useState(false);
  const pathname = usePathname();

  // Function to check if a link is active
  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  // Hardcoded clubs data
  const clubs = [
    { id: 1, name: "AFC Barwell", slug: "afc-barwell" },
    { id: 2, name: "Hinckley AFC", slug: "hinckley-afc" },
    { id: 3, name: "Stoke Golding FC", slug: "stoke-golding-fc" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsWhatWeDoOpen(false);
    setIsClubsOpen(false);
    
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const toggleWhatWeDo = () => {
    setIsWhatWeDoOpen(!isWhatWeDoOpen);
    setIsClubsOpen(false);
  };

  const toggleClubs = () => {
    setIsClubsOpen(!isClubsOpen);
    setIsWhatWeDoOpen(false);
  };

  // Cleanup effect to restore body scroll when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Helper function to get text colors
  const getTextColor = (isActive = false) => {
    return isActive 
      ? 'text-green-400 bg-green-600/20 border border-green-500/50 px-3 py-1 rounded-lg'
      : 'text-white hover:text-green-300';
  };
  
  const getTextStyle = () => {
    return {
      textShadow: '1px 1px 2px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)',
      WebkitTextStroke: '0.5px rgba(0,0,0,0.5)'
    };
  };
  
  return (
    <nav className={`${pathname === '/' ? 'fixed' : 'relative'} top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/20 shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="The Club Shop Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
                priority
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white" style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8), -2px -2px 4px rgba(0,0,0,0.8), 2px -2px 4px rgba(0,0,0,0.8), -2px 2px 4px rgba(0,0,0,0.8)',
                  WebkitTextStroke: '1px rgba(0,0,0,0.5)'
                }}>
                  The Club Shop
                </h1>
                <p className="text-sm text-green-300 -mt-1 font-medium" style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)',
                  WebkitTextStroke: '0.5px rgba(0,0,0,0.5)'
                }}>
                  Premium Teamwear
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors duration-200 font-medium ${getTextColor(isActive('/'))}`}
              style={getTextStyle()}
            >
              Home
            </Link>
            
            {/* What We Do Dropdown */}
            <div className="relative">
              <button
                onClick={toggleWhatWeDo}
                className={`transition-colors duration-200 font-medium flex items-center ${getTextColor(isActive('/about') || isActive('/team-kits'))}`}
                style={getTextStyle()}
              >
                What We Do
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {isWhatWeDoOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-lg shadow-xl border border-gray-200/50 py-2"
                  >
                    <Link
                      href="/about"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                      onClick={() => setIsWhatWeDoOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/team-kits"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                      onClick={() => setIsWhatWeDoOpen(false)}
                    >
                      Team Kits & TeamWear
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Clubs Dropdown */}
            <div className="relative">
              <button
                onClick={toggleClubs}
                className={`transition-colors duration-200 font-medium flex items-center ${getTextColor(isActive('/clubs'))}`}
                style={getTextStyle()}
              >
                Clubs
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {isClubsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-lg shadow-xl border border-gray-200/50 py-2"
                  >
                    {clubs.map((club) => (
                      <Link
                        key={club.id}
                        href={`/clubs/${club.slug}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        onClick={() => setIsClubsOpen(false)}
                      >
                        {club.name}
                      </Link>
                    ))}
                    <div className="border-t border-gray-200 my-1"></div>
                    <Link
                      href="/clubs"
                      className="block px-4 py-2 text-green-600 font-semibold hover:bg-green-50 transition-colors duration-200"
                      onClick={() => setIsClubsOpen(false)}
                    >
                      View All Clubs
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className={`transition-colors duration-200 font-medium ${getTextColor(isActive('/contact'))}`}
              style={getTextStyle()}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Shop and Profile Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/shop"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              Shop
            </Link>
            
            <Link
              href="/dashboard"
              className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl shadow-lg transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
              </svg>
              Dashboard
            </Link>
            
            
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-white hover:text-green-300 transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/20 backdrop-blur-md border-t border-white/20 max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-4">
              
              {/* Home */}
              <Link
                href="/"
                className={`block px-4 py-3 transition-colors duration-200 rounded-lg ${
                  isActive('/')
                    ? 'text-green-400 bg-green-600/30 border border-green-500/50'
                    : 'text-white hover:bg-green-600/20 hover:text-green-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* What We Do */}
              <div>
                <button
                  onClick={toggleWhatWeDo}
                  className={`w-full text-left px-4 py-3 transition-colors duration-200 rounded-lg flex items-center justify-between ${
                    isActive('/about') || isActive('/team-kits')
                      ? 'text-green-400 bg-green-600/30 border border-green-500/50'
                      : 'text-white hover:bg-green-600/20 hover:text-green-300'
                  }`}
                >
                  What We Do
                  <svg 
                    className={`h-4 w-4 transition-transform duration-200 ${isWhatWeDoOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {isWhatWeDoOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-6 space-y-2 mt-2">
                        <Link
                          href="/about"
                          className="block px-4 py-2 text-gray-300 hover:bg-green-600/20 hover:text-green-300 transition-colors duration-200 rounded-lg"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          About
                        </Link>
                        <Link
                          href="/team-kits"
                          className="block px-4 py-2 text-gray-300 hover:bg-green-600/20 hover:text-green-300 transition-colors duration-200 rounded-lg"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Team Kits & TeamWear
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Clubs */}
              <div>
                <button
                  onClick={toggleClubs}
                  className={`w-full text-left px-4 py-3 transition-colors duration-200 rounded-lg flex items-center justify-between ${
                    isActive('/clubs')
                      ? 'text-green-400 bg-green-600/30 border border-green-500/50'
                      : 'text-white hover:bg-green-600/20 hover:text-green-300'
                  }`}
                >
                  Clubs
                  <svg 
                    className={`h-4 w-4 transition-transform duration-200 ${isClubsOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {isClubsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-6 space-y-2 mt-2">
                        {clubs.map((club) => (
                          <Link
                            key={club.id}
                            href={`/clubs/${club.slug}`}
                            className="block px-4 py-2 text-gray-300 hover:bg-green-600/20 hover:text-green-300 transition-colors duration-200 rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {club.name}
                          </Link>
                        ))}
                        <Link
                          href="/clubs"
                          className="block px-4 py-2 text-green-400 font-semibold hover:bg-green-600/20 hover:text-green-300 transition-colors duration-200 rounded-lg border-t border-gray-600 mt-2 pt-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          View All Clubs
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact */}
              <Link
                href="/contact"
                className={`block px-4 py-3 transition-colors duration-200 rounded-lg ${
                  isActive('/contact')
                    ? 'text-green-400 bg-green-600/30 border border-green-500/50'
                    : 'text-white hover:bg-green-600/20 hover:text-green-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Shop and Profile Buttons */}
              <div className="pt-4 space-y-3">
                <Link
                  href="/shop"
                  className="block w-full text-center px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                    Shop
                  </div>
                </Link>
                
                <Link
                  href="/dashboard"
                  className="block w-full text-center px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl shadow-lg transition-all duration-300 backdrop-blur-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
                    </svg>
                    Dashboard
                  </div>
                </Link>
                
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}