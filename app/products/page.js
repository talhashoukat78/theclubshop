'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedClub, setSelectedClub] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  // Hardcoded data - can be replaced with database queries in future
  const productsData = {
    categories: [
      { id: 'all', name: 'All Products', icon: '🏪' },
      { id: 'kits', name: 'Team Kits', icon: '⚽' },
      { id: 'training', name: 'Training Wear', icon: '🏃' },
      { id: 'casual', name: 'Casual Wear', icon: '👕' },
      { id: 'accessories', name: 'Accessories', icon: '🎒' }
    ],
    clubs: [
      { id: 'all', name: 'All Clubs' },
      { id: 'afc-barwell', name: 'AFC Barwell' },
      { id: 'hinckley-afc', name: 'Hinckley AFC' },
      { id: 'stoke-golding-fc', name: 'Stoke Golding FC' }
    ],
    products: [
      {
        id: 1,
        name: "AFC Barwell Home Kit 2024/25",
        slug: "afc-barwell-home-kit-2024",
        price: 45.00,
        originalPrice: 50.00,
        category: "kits",
        club: "afc-barwell",
        clubName: "AFC Barwell",
        image: "/api/placeholder/300/400",
        inStock: true,
        rating: 4.8,
        reviews: 24,
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["Red", "White"],
        description: "Official home kit featuring the club's traditional red and white colors with modern design elements.",
        isNew: true,
        isBestSeller: false
      },
      {
        id: 2,
        name: "Hinckley AFC Away Kit 2024/25",
        slug: "hinckley-afc-away-kit-2024",
        price: 45.00,
        originalPrice: 50.00,
        category: "kits",
        club: "hinckley-afc",
        clubName: "Hinckley AFC",
        image: "/api/placeholder/300/400",
        inStock: true,
        rating: 4.9,
        reviews: 18,
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["Blue", "White"],
        description: "Modern away kit with contemporary design and club crest.",
        isNew: false,
        isBestSeller: true
      },
      {
        id: 3,
        name: "Training Top - All Clubs",
        slug: "training-top-all-clubs",
        price: 35.00,
        category: "training",
        club: "all",
        clubName: "All Clubs",
        image: "/api/placeholder/300/400",
        inStock: true,
        rating: 4.7,
        reviews: 32,
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Navy", "Gray"],
        description: "High-quality training top perfect for practice sessions.",
        isNew: false,
        isBestSeller: false
      },
      {
        id: 4,
        name: "Training Shorts - All Clubs",
        slug: "training-shorts-all-clubs",
        price: 25.00,
        category: "training",
        club: "all",
        clubName: "All Clubs",
        image: "/api/placeholder/300/400",
        inStock: true,
        rating: 4.6,
        reviews: 28,
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Navy", "Gray"],
        description: "Comfortable training shorts with moisture-wicking fabric.",
        isNew: false,
        isBestSeller: false
      },
      {
        id: 5,
        name: "Fan T-Shirt - AFC Barwell",
        slug: "fan-t-shirt-afc-barwell",
        price: 20.00,
        category: "casual",
        club: "afc-barwell",
        clubName: "AFC Barwell",
        image: "/api/placeholder/300/400",
        inStock: true,
        rating: 4.5,
        reviews: 15,
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["Red", "White", "Black"],
        description: "Show your support with this comfortable fan t-shirt.",
        isNew: true,
        isBestSeller: false
      },
      {
        id: 6,
        name: "Hoodie - Hinckley AFC",
        slug: "hoodie-hinckley-afc",
        price: 40.00,
        category: "casual",
        club: "hinckley-afc",
        clubName: "Hinckley AFC",
        image: "/api/placeholder/300/400",
        inStock: false,
        rating: 4.8,
        reviews: 22,
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["Blue", "Navy", "Black"],
        description: "Warm and comfortable hoodie perfect for match days.",
        isNew: false,
        isBestSeller: true
      },
      {
        id: 7,
        name: "Club Scarf - All Clubs",
        slug: "club-scarf-all-clubs",
        price: 15.00,
        category: "accessories",
        club: "all",
        clubName: "All Clubs",
        image: "/api/placeholder/300/400",
        inStock: true,
        rating: 4.9,
        reviews: 41,
        sizes: ["One Size"],
        colors: ["Various"],
        description: "Traditional club scarf to show your support.",
        isNew: false,
        isBestSeller: true
      },
      {
        id: 8,
        name: "Training Bag - All Clubs",
        slug: "training-bag-all-clubs",
        price: 30.00,
        category: "accessories",
        club: "all",
        clubName: "All Clubs",
        image: "/api/placeholder/300/400",
        inStock: true,
        rating: 4.7,
        reviews: 19,
        sizes: ["One Size"],
        colors: ["Black", "Navy", "Gray"],
        description: "Durable training bag perfect for carrying your gear.",
        isNew: false,
        isBestSeller: false
      }
    ]
  };

  const filteredProducts = productsData.products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const clubMatch = selectedClub === 'all' || product.club === selectedClub;
    return categoryMatch && clubMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.isNew - a.isNew;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-green-600 to-emerald-800 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              All Products
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-green-100 max-w-3xl mx-auto"
            >
              Discover our complete range of premium teamwear and merchandise
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Filters and Controls */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {productsData.categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Club Filter */}
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700">Club:</label>
              <select
                value={selectedClub}
                onChange={(e) => setSelectedClub(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {productsData.clubs.map((club) => (
                  <option key={club.id} value={club.id}>{club.name}</option>
                ))}
              </select>
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Sort:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                  <option value="newest">Newest</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {sortedProducts.length} of {productsData.products.length} products
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  {/* Product Image */}
                  <Link href={`/products/${product.slug}`}>
                    <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative cursor-pointer hover:opacity-90 transition-opacity duration-200">
                      <div className="text-6xl">⚽</div>
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.isNew && (
                          <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                            New
                          </span>
                        )}
                        {product.isBestSeller && (
                          <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">
                            Best Seller
                          </span>
                        )}
                        {product.originalPrice && (
                          <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                            Sale
                          </span>
                        )}
                      </div>
                      
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <span className="bg-white text-black px-4 py-2 rounded font-medium">
                            Out of Stock
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>

                  <div className="p-6">
                    {/* Product Info */}
                    <div className="mb-4">
                      <Link href={`/products/${product.slug}`}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-green-600 transition-colors duration-200">{product.name}</h3>
                      </Link>
                      <p className="text-sm text-gray-600 mb-2">{product.clubName}</p>
                      <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${
                              i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-xl font-bold text-green-600">£{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            £{product.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    </div>

                    {/* Quick Add to Cart */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={!product.inStock}
                      className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                        product.inStock
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {product.inStock ? 'Quick Add' : 'Out of Stock'}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex">
                    <Link href={`/products/${product.slug}`} className="flex-shrink-0">
                      <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative cursor-pointer hover:opacity-90 transition-opacity duration-200">
                        <div className="text-3xl">⚽</div>
                        
                        {/* Badges */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                          {product.isNew && (
                            <span className="bg-green-500 text-white px-1 py-0.5 rounded text-xs font-medium">
                              New
                            </span>
                          )}
                          {product.isBestSeller && (
                            <span className="bg-yellow-500 text-white px-1 py-0.5 rounded text-xs font-medium">
                              Best
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>

                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <Link href={`/products/${product.slug}`}>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-green-600 transition-colors duration-200">{product.name}</h3>
                          </Link>
                          <p className="text-gray-600 mb-2">{product.clubName}</p>
                          <p className="text-gray-500 mb-4">{product.description}</p>
                          
                          <div className="flex items-center mb-4">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={`text-sm ${
                                    i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                                  }`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                            <span className="text-sm text-gray-600 ml-2">
                              {product.rating} ({product.reviews} reviews)
                            </span>
                          </div>
                        </div>

                        <div className="text-right ml-6">
                          <div className="mb-4">
                            <span className="text-2xl font-bold text-green-600">£{product.price}</span>
                            {product.originalPrice && (
                              <div className="text-sm text-gray-500 line-through">£{product.originalPrice}</div>
                            )}
                          </div>
                          
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            disabled={!product.inStock}
                            className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                              product.inStock
                                ? 'bg-green-600 text-white hover:bg-green-700'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                          >
                            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Products Message */}
          {sortedProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your filters or browse all products.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

