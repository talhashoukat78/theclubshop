'use client';

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <div className="min-h-screen relative">
      {/* Ultimate Premium Hero Section */}
      <motion.section 
        style={{ y, opacity }}
        className="relative overflow-hidden min-h-screen flex items-center -mt-20 pt-20"
      >
        {/* Premium Stadium Background with Overlay */}
        <div className="absolute inset-0 -top-20">
          {/* Stadium Image */}
          <div className="absolute inset-0">
            <Image
              src="/connor-coyne-OgqWLzWRSaI-unsplash.jpg"
              alt="Stadium Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Subtle Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Animated Dots */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
            <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
            <div className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '5s'}}></div>
          </div>
        </div>
        
        {/* Advanced Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-400/30 to-emerald-500/20 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-emerald-400/25 to-green-600/15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-green-300/35 to-emerald-400/25 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-br from-emerald-300/20 to-green-500/15 rounded-full blur-lg animate-float" style={{animationDelay: '6s'}}></div>
          <div className="absolute top-60 left-1/3 w-16 h-16 bg-gradient-to-br from-green-200/40 to-emerald-300/30 rounded-full blur-lg animate-float" style={{animationDelay: '8s'}}></div>
          <div className="absolute bottom-60 right-1/4 w-28 h-28 bg-gradient-to-br from-emerald-200/25 to-green-400/20 rounded-full blur-2xl animate-float" style={{animationDelay: '10s'}}></div>
          <div className="absolute top-1/3 left-1/2 w-12 h-12 bg-gradient-to-br from-green-100/50 to-emerald-200/40 rounded-full blur-md animate-float" style={{animationDelay: '12s'}}></div>
        </div>
        
        {/* Premium Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Premium Badge */}
            <div className="mb-12 animate-fade-in-scale">
              <div className="inline-block px-10 py-4 bg-white/95 backdrop-blur-xl border-2 border-green-500/70 rounded-full text-green-800 text-xl font-bold mb-6 shadow-2xl hover:shadow-green-500/30 transition-all duration-500 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full"></div>
                <span className="relative flex items-center gap-3">
                  <span className="text-2xl drop-shadow-lg">🏆</span>
                  <span className="drop-shadow-sm font-extrabold">Premium Football Merchandise</span>
                  <span className="text-2xl drop-shadow-lg">⚽</span>
                </span>
              </div>
            </div>
            
            {/* Stunning Main Heading */}
            <div className="mb-12 animate-slide-up">
              <h1 className="text-7xl md:text-9xl font-black mb-8 leading-tight">
                <span className="block text-white drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), -2px -2px 4px rgba(0,0,0,0.8), 2px -2px 4px rgba(0,0,0,0.8), -2px 2px 4px rgba(0,0,0,0.8)'}}>The Ultimate</span>
                <span className="block text-white drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), -2px -2px 4px rgba(0,0,0,0.8), 2px -2px 4px rgba(0,0,0,0.8), -2px 2px 4px rgba(0,0,0,0.8)'}}>Football</span>
                <span className="block text-green-300 drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), -2px -2px 4px rgba(0,0,0,0.8), 2px -2px 4px rgba(0,0,0,0.8), -2px 2px 4px rgba(0,0,0,0.8)'}}>
                  Experience
                </span>
              </h1>
            </div>
            
            {/* Premium Description */}
            <div className="mb-16 animate-fade-in-scale" style={{animationDelay: '0.3s'}}>
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">
                <p className="text-2xl md:text-4xl mb-8 text-gray-800 max-w-5xl mx-auto leading-relaxed font-medium drop-shadow-lg" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}>
                  Discover <span className="text-green-300 font-semibold">authentic team kits</span>, 
                  <span className="text-green-300 font-semibold"> exclusive merchandise</span>, and 
                  <span className="text-green-300 font-semibold"> premium gear</span> from your favorite local football clubs.
                </p>
                <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed drop-shadow-lg" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}>
                  Where <span className="text-green-300 font-bold">passion meets quality</span> ✨
                </p>
              </div>
            </div>
            
            {/* Premium Action Buttons */}
            <div className="flex gap-8 items-center justify-center flex-col sm:flex-row mb-24 animate-bounce-in" style={{animationDelay: '0.6s'}}>
              <Link
                href="/shop"
                className="group relative px-16 py-6 text-2xl font-black rounded-3xl bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white shadow-2xl hover:shadow-green-500/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border-2 border-white/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-700 to-emerald-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center gap-3">
                  <span className="text-3xl">🛒</span>
                  <span>Shop Now</span>
                  <span className="text-3xl animate-wiggle">⚡</span>
                </span>
              </Link>
              <Link
                href="/clubs"
                className="group px-16 py-6 text-2xl font-black rounded-3xl border-3 border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-500 backdrop-blur-xl glass shadow-2xl hover:shadow-green-500/20 transform hover:scale-110 hover:-translate-y-2 bg-white/90"
              >
                <span className="flex items-center gap-3">
                  <span className="text-3xl">🏟️</span>
                  <span>Explore Clubs</span>
                  <span className="text-3xl">🚀</span>
                </span>
              </Link>
            </div>
            
            {/* Premium Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto animate-slide-up" style={{animationDelay: '0.9s'}}>
              <div className="text-center group">
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20 hover:shadow-green-500/20 transition-all duration-500">
                  <div className="relative">
                    <div className="text-6xl md:text-7xl font-black text-green-600 mb-4 group-hover:scale-125 transition-transform duration-500 drop-shadow-lg">500+</div>
                    <div className="absolute inset-0 text-6xl md:text-7xl font-black text-green-600/20 blur-sm group-hover:blur-md transition-all duration-500">500+</div>
                  </div>
                  <div className="text-black text-xl font-semibold" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}>Premium Products</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20 hover:shadow-green-500/20 transition-all duration-500">
                  <div className="relative">
                    <div className="text-6xl md:text-7xl font-black text-green-600 mb-4 group-hover:scale-125 transition-transform duration-500 drop-shadow-lg">3</div>
                    <div className="absolute inset-0 text-6xl md:text-7xl font-black text-green-600/20 blur-sm group-hover:blur-md transition-all duration-500">3</div>
                  </div>
                  <div className="text-black text-xl font-semibold" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}>Partner Clubs</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20 hover:shadow-green-500/20 transition-all duration-500">
                  <div className="relative">
                    <div className="text-6xl md:text-7xl font-black text-green-600 mb-4 group-hover:scale-125 transition-transform duration-500 drop-shadow-lg">24/7</div>
                    <div className="absolute inset-0 text-6xl md:text-7xl font-black text-green-600/20 blur-sm group-hover:blur-md transition-all duration-500">24/7</div>
                  </div>
                  <div className="text-black text-xl font-semibold" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}>Expert Support</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20 hover:shadow-green-500/20 transition-all duration-500">
                  <div className="relative">
                    <div className="text-6xl md:text-7xl font-black text-green-600 mb-4 group-hover:scale-125 transition-transform duration-500 drop-shadow-lg">100%</div>
                    <div className="absolute inset-0 text-6xl md:text-7xl font-black text-green-600/20 blur-sm group-hover:blur-md transition-all duration-500">100%</div>
                  </div>
                  <div className="text-black text-xl font-semibold" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8), 1px -1px 2px rgba(255,255,255,0.8), -1px 1px 2px rgba(255,255,255,0.8)'}}>Authentic Gear</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Premium Features Section */}
      <motion.section 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 relative bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-8">
              Why Choose TheClubShop?
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're not just another sports retailer. We're your gateway to authentic football culture, 
              premium quality, and unmatched community support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="group">
              <div className="card-modern text-center p-10 hover:scale-105 transition-all duration-500 h-full shadow-xl hover:shadow-2xl">
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-green-200 group-hover:shadow-green-400/25 group-hover:shadow-2xl transition-all duration-300">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-800">100% Authentic</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Every item is officially licensed and authenticated. No knockoffs, no compromises - 
                  just genuine club merchandise that represents your team with pride and passion.
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="card-modern text-center p-10 hover:scale-105 transition-all duration-500 h-full shadow-xl hover:shadow-2xl">
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-green-200 group-hover:shadow-green-400/25 group-hover:shadow-2xl transition-all duration-300">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-800">Lightning Fast</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Get your gear when you need it. Same-day processing, next-day delivery available, 
                  and free shipping on orders over £50. Your team spirit can't wait!
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="card-modern text-center p-10 hover:scale-105 transition-all duration-500 h-full shadow-xl hover:shadow-2xl">
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-green-200 group-hover:shadow-green-400/25 group-hover:shadow-2xl transition-all duration-300">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-800">Premium Quality</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Built to last through every match, every season. Professional-grade materials, 
                  reinforced stitching, and attention to detail that matches the passion of the game.
                </p>
              </div>
            </div>
          </div>

          {/* Community Section with Second Image */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gradient mb-8">Supporting Local Football</h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're proud to support local football clubs in our community. Every purchase helps fund 
                youth development, facility improvements, and keeps the beautiful game alive in our area.
              </p>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-600 text-lg">Direct partnership with local clubs</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-600 text-lg">Community-focused business model</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-600 text-lg">Supporting grassroots football development</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="card-modern p-8 text-center relative overflow-hidden shadow-xl">
                <div className="absolute inset-0">
          <Image
                    src="/jannik-mY2ZHBU6GRk-unsplash.jpg"
                    alt="Football Community"
                    fill
                    className="object-cover opacity-10"
                  />
                </div>
                <div className="relative z-10">
                  <div className="text-8xl mb-6">⚽</div>
                  <h4 className="text-3xl font-bold text-gray-800 mb-6">Join the Community</h4>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    Be part of something bigger. Support your local clubs and connect with fellow football enthusiasts.
                  </p>
                  <Link href="/clubs" className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl">
                    Explore Clubs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Clubs Section */}
      <motion.section 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 relative bg-white"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-8">
              Our Partner Clubs
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Proudly supporting local football clubs with official merchandise, team kits, and exclusive gear. 
              Every purchase directly supports these amazing clubs and their communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="group">
              <div className="card-modern text-center p-10 hover:scale-105 transition-all duration-500 h-full shadow-xl hover:shadow-2xl">
                <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-8 text-white text-3xl font-bold shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-300">
                  AB
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-800">AFC Barwell</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Established in 1992, AFC Barwell has been a cornerstone of local football. 
                  Shop their official kits, training wear, and exclusive merchandise.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="text-green-600 text-lg">📍 Barwell, Leicestershire</div>
                  <div className="text-green-600 text-lg">🏆 Multiple League Titles</div>
                  <div className="text-green-600 text-lg">👥 200+ Active Members</div>
                </div>
                <Link href="/clubs/afc-barwell" className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl group-hover:shadow-lg transition-all duration-300 shadow-lg">
                  Shop AFC Barwell →
                </Link>
              </div>
            </div>
            
            <div className="group">
              <div className="card-modern text-center p-10 hover:scale-105 transition-all duration-500 h-full shadow-xl hover:shadow-2xl">
                <div className="w-28 h-28 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-8 text-white text-3xl font-bold shadow-2xl group-hover:shadow-red-500/25 transition-all duration-300">
                  HA
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-800">Hinckley AFC</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  A community-focused club with a rich history dating back to 1967. 
                  Known for their passionate fanbase and competitive spirit.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="text-green-600 text-lg">📍 Hinckley, Leicestershire</div>
                  <div className="text-green-600 text-lg">🏆 FA Cup Appearances</div>
                  <div className="text-green-600 text-lg">👥 300+ Active Members</div>
                </div>
                <Link href="/clubs/hinckley-afc" className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl group-hover:shadow-lg transition-all duration-300 shadow-lg">
                  Shop Hinckley AFC →
                </Link>
              </div>
            </div>
            
            <div className="group">
              <div className="card-modern text-center p-10 hover:scale-105 transition-all duration-500 h-full shadow-xl hover:shadow-2xl">
                <div className="w-28 h-28 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 text-white text-3xl font-bold shadow-2xl group-hover:shadow-yellow-500/25 transition-all duration-300">
                  SG
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-800">Stoke Golding FC</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  A family-oriented club promoting youth development and community engagement. 
                  Their commitment to grassroots football is unmatched.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="text-green-600 text-lg">📍 Stoke Golding, Leicestershire</div>
                  <div className="text-green-600 text-lg">🏆 Youth Development Focus</div>
                  <div className="text-green-600 text-lg">👥 150+ Active Members</div>
                </div>
                <Link href="/clubs/stoke-golding-fc" className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl group-hover:shadow-lg transition-all duration-300 shadow-lg">
                  Shop Stoke Golding FC →
                </Link>
              </div>
            </div>
          </div>

          {/* Premium Call to Action */}
          <div className="text-center">
            <div className="card-modern p-12 max-w-5xl mx-auto relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0">
          <Image
                  src="/jannik-mY2ZHBU6GRk-unsplash.jpg"
                  alt="Football Action"
                  fill
                  className="object-cover opacity-5"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-gradient mb-6">Ready to Support Your Club?</h3>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  Browse our complete collection of official merchandise, team kits, and exclusive items. 
                  Every purchase helps these clubs continue their important work in the community.
                </p>
                <div className="flex gap-6 justify-center flex-col sm:flex-row">
                  <Link href="/shop" className="btn-primary px-10 py-5 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300">
                    🛒 Browse All Products
                  </Link>
                  <Link href="/clubs" className="border-2 border-green-500 text-green-600 px-10 py-5 text-xl font-semibold rounded-2xl hover:bg-green-500 hover:text-white transition-all duration-300 backdrop-blur-md glass shadow-lg">
                    🏟️ View All Clubs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}