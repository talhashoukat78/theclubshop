// Centralized product data - no Supabase needed!
export const products = [
  {
    id: 1,
    name: 'Manchester United Home Jersey 2024',
    slug: 'manchester-united-home-jersey-2024',
    price: 89.99,
    base_price: 89.99,
    description: 'Official Manchester United home jersey for the 2024 season. Made with premium materials and featuring the iconic red color that has defined the club for generations. Perfect for match days and casual wear.',
    images: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=800&fit=crop&crop=center'
    ],
    category: 'jerseys',
    subcategory: 'home',
    club_id: 1,
    is_active: true,
    created_at: '2024-01-15T10:00:00Z',
    product_variations: [
      { id: 1, size: 'S', color: 'Red', price: 89.99, stock_quantity: 10 },
      { id: 2, size: 'M', color: 'Red', price: 89.99, stock_quantity: 15 },
      { id: 3, size: 'L', color: 'Red', price: 89.99, stock_quantity: 12 },
      { id: 4, size: 'XL', color: 'Red', price: 89.99, stock_quantity: 8 }
    ]
  },
  {
    id: 2,
    name: 'Real Madrid Home Jersey 2024',
    slug: 'real-madrid-home-jersey-2024',
    price: 95.99,
    base_price: 95.99,
    description: 'Official Real Madrid home jersey for the 2024 season. Crafted with advanced technology for optimal performance and comfort. Features the legendary white color and club crest.',
    images: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=800&fit=crop&crop=center'
    ],
    category: 'jerseys',
    subcategory: 'home',
    club_id: 2,
    is_active: true,
    created_at: '2024-01-16T10:00:00Z',
    product_variations: [
      { id: 5, size: 'S', color: 'White', price: 95.99, stock_quantity: 8 },
      { id: 6, size: 'M', color: 'White', price: 95.99, stock_quantity: 20 },
      { id: 7, size: 'L', color: 'White', price: 95.99, stock_quantity: 15 },
      { id: 8, size: 'XL', color: 'White', price: 95.99, stock_quantity: 10 }
    ]
  },
  {
    id: 3,
    name: 'Barcelona Away Jersey 2024',
    slug: 'barcelona-away-jersey-2024',
    price: 92.99,
    base_price: 92.99,
    description: 'Official Barcelona away jersey for the 2024 season. Features a stunning design with the club\'s traditional colors and modern styling. Perfect for showing your support.',
    images: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=800&fit=crop&crop=center'
    ],
    category: 'jerseys',
    subcategory: 'away',
    club_id: 3,
    is_active: true,
    created_at: '2024-01-17T10:00:00Z',
    product_variations: [
      { id: 9, size: 'S', color: 'Blue', price: 92.99, stock_quantity: 12 },
      { id: 10, size: 'M', color: 'Blue', price: 92.99, stock_quantity: 18 },
      { id: 11, size: 'L', color: 'Blue', price: 92.99, stock_quantity: 14 },
      { id: 12, size: 'XL', color: 'Blue', price: 92.99, stock_quantity: 6 }
    ]
  },
  {
    id: 4,
    name: 'Liverpool Training Kit 2024',
    slug: 'liverpool-training-kit-2024',
    price: 65.99,
    base_price: 65.99,
    description: 'Official Liverpool training kit for the 2024 season. Designed for optimal performance during training sessions. Lightweight and breathable material.',
    images: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=800&fit=crop&crop=center'
    ],
    category: 'training',
    subcategory: 'training',
    club_id: 4,
    is_active: true,
    created_at: '2024-01-18T10:00:00Z',
    product_variations: [
      { id: 13, size: 'S', color: 'Red', price: 65.99, stock_quantity: 15 },
      { id: 14, size: 'M', color: 'Red', price: 65.99, stock_quantity: 22 },
      { id: 15, size: 'L', color: 'Red', price: 65.99, stock_quantity: 18 },
      { id: 16, size: 'XL', color: 'Red', price: 65.99, stock_quantity: 12 }
    ]
  },
  {
    id: 5,
    name: 'Chelsea Casual T-Shirt',
    slug: 'chelsea-casual-t-shirt',
    price: 35.99,
    base_price: 35.99,
    description: 'Comfortable Chelsea casual t-shirt perfect for everyday wear. Made from 100% cotton with the club logo prominently displayed.',
    images: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=800&fit=crop&crop=center'
    ],
    category: 'casual',
    subcategory: 't-shirts',
    club_id: 5,
    is_active: true,
    created_at: '2024-01-19T10:00:00Z',
    product_variations: [
      { id: 17, size: 'S', color: 'Blue', price: 35.99, stock_quantity: 25 },
      { id: 18, size: 'M', color: 'Blue', price: 35.99, stock_quantity: 30 },
      { id: 19, size: 'L', color: 'Blue', price: 35.99, stock_quantity: 28 },
      { id: 20, size: 'XL', color: 'Blue', price: 35.99, stock_quantity: 20 }
    ]
  },
  {
    id: 6,
    name: 'Arsenal Scarf',
    slug: 'arsenal-scarf',
    price: 24.99,
    base_price: 24.99,
    description: 'Official Arsenal scarf made from premium materials. Perfect for cold match days and showing your support for the Gunners.',
    images: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=800&fit=crop&crop=center'
    ],
    category: 'accessories',
    subcategory: 'scarves',
    club_id: 6,
    is_active: true,
    created_at: '2024-01-20T10:00:00Z',
    product_variations: [
      { id: 21, size: 'One Size', color: 'Red/White', price: 24.99, stock_quantity: 50 }
    ]
  }
];

export const clubs = [
  { id: 1, name: 'Manchester United', slug: 'manchester-united', is_active: true },
  { id: 2, name: 'Real Madrid', slug: 'real-madrid', is_active: true },
  { id: 3, name: 'Barcelona', slug: 'barcelona', is_active: true },
  { id: 4, name: 'Liverpool', slug: 'liverpool', is_active: true },
  { id: 5, name: 'Chelsea', slug: 'chelsea', is_active: true },
  { id: 6, name: 'Arsenal', slug: 'arsenal', is_active: true }
];

// Helper functions
export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (category) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getClubById = (id) => {
  return clubs.find(club => club.id === id);
};

export const getSimilarProducts = (currentProduct, limit = 4) => {
  return products
    .filter(product => 
      product.id !== currentProduct.id && 
      product.category === currentProduct.category
    )
    .slice(0, limit);
};
