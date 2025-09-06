'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getProductBySlug, getSimilarProducts, getClubById } from '@/data/products';

export default function ProductPage() {
  const params = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Get product data directly from hardcoded data
  const product = getProductBySlug(params.slug);
  const similarProducts = product ? getSimilarProducts(product) : [];
  const club = product ? getClubById(product.club_id) : null;

  // Error state - product not found
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you are looking for does not exist.</p>
          <Link
            href="/shop"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  // Get available sizes and colors from product variations
  const availableSizes = [...new Set(product.product_variations?.map(v => v.size) || [])];
  const availableColors = [...new Set(product.product_variations?.map(v => v.color) || [])];

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    // Add to cart logic here
    alert('Added to cart!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative h-96 bg-white rounded-xl shadow-lg overflow-hidden">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 bg-white rounded-lg shadow-md overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-green-600' : 'border-transparent'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-green-600">£{product.price}</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Size Selection */}
            {availableSizes.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border-2 rounded-lg font-medium transition-colors ${
                        selectedSize === size
                          ? 'border-green-600 bg-green-600 text-white'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {availableColors.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {availableColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border-2 rounded-lg font-medium transition-colors ${
                        selectedColor === color
                          ? 'border-green-600 bg-green-600 text-white'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors"
            >
              Add to Cart - £{(product.price * quantity).toFixed(2)}
            </motion.button>

            {/* Product Information */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium capitalize">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Subcategory:</span>
                  <span className="font-medium capitalize">{product.subcategory}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Club:</span>
                  <span className="font-medium">Manchester United</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-medium">£{product.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-medium text-green-600">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Similar Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarProducts.map((similarProduct) => (
                <Link key={similarProduct.id} href={`/products/${similarProduct.slug}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    <div className="relative h-48 bg-gray-100">
                      <Image
                        src={similarProduct.images[0]}
                        alt={similarProduct.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{similarProduct.name}</h3>
                      <p className="text-green-600 font-bold">£{similarProduct.price}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}