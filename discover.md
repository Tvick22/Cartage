---
layout: base
title: Discover
search_exclude: true
menu: nav/mainHeader.html
permalink: /discover/
---




<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Discover - ShotSpot</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .gradient-bg {
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
        }
        
        .photo-card {
            transition: all 0.3s ease;
            break-inside: avoid;
        }
        
        .photo-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .masonry-grid {
            column-count: 1;
            column-gap: 1.5rem;
        }
        
        @media (min-width: 640px) {
            .masonry-grid { column-count: 2; }
        }
        
        @media (min-width: 1024px) {
            .masonry-grid { column-count: 3; }
        }
        
        @media (min-width: 1280px) {
            .masonry-grid { column-count: 4; }
        }
        
        .like-btn {
            transition: all 0.3s ease;
        }
        
        .like-btn.liked {
            color: #ef4444;
            transform: scale(1.2);
        }
        
        .photo-overlay {
            background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
        }
        
        .nav-link {
            position: relative;
        }

        .nav-link::after {
            content: "";
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: #f59e0b;
            transition: width 0.3s ease;
        }

        .nav-link:hover::after {
            width: 100%;
        }
    </style>
</head>
<body class="bg-gray-50 min-h-screen">


    <!-- Main Content -->
    <div class="container mx-auto px-6 py-8">
        <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">Discover Amazing Photography</h1>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">Explore stunning images from talented photographers around the world. Like, download, and get inspired.</p>
        </div>

        <!-- Photos Grid -->
        <div class="masonry-grid" id="photos-grid">
            <!-- Photos will be inserted here by JavaScript -->
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12">
            <button id="load-more" class="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105">
                <i class="fas fa-plus mr-2"></i>Load More Photos
            </button>
        </div>
    </div>

    <script>
        // Photo data with Unsplash images and random photographer handles
        const photos = [
            {
                url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop',
                photographer: '@mountain_explorer',
                likes: 234,
                id: 1
            },
            {
                url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
                photographer: '@forest_wanderer',
                likes: 189,
                id: 2
            },
            {
                url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=1000&fit=crop',
                photographer: '@sky_chaser',
                likes: 412,
                id: 3
            },
            {
                url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&h=1200&fit=crop',
                photographer: '@ocean_dreamer',
                likes: 356,
                id: 4
            },
            {
                url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=800&fit=crop',
                photographer: '@urban_lens',
                likes: 178,
                id: 5
            },
            {
                url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=1000&fit=crop',
                photographer: '@sunset_seeker',
                likes: 298,
                id: 6
            },
            {
                url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=1200&fit=crop',
                photographer: '@peak_hunter',
                likes: 445,
                id: 7
            },
            {
                url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=900&fit=crop',
                photographer: '@nature_shots',
                likes: 267,
                id: 8
            },
            {
                url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&h=1100&fit=crop',
                photographer: '@wave_rider',
                likes: 334,
                id: 9
            },
            {
                url: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=800&fit=crop',
                photographer: '@green_thumb',
                likes: 156,
                id: 10
            },
            {
                url: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=1200&fit=crop',
                photographer: '@city_lights',
                likes: 389,
                id: 11
            },
            {
                url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=1000&fit=crop',
                photographer: '@wild_life',
                likes: 523,
                id: 12
            },
            {
                url: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?w=800&h=600&fit=crop',
                photographer: '@home_vibes',
                likes: 201,
                id: 13
            },
            {
                url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1100&fit=crop',
                photographer: '@adventure_awaits',
                likes: 445,
                id: 14
            },
            {
                url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=900&fit=crop',
                photographer: '@minimalist_eye',
                likes: 312,
                id: 15
            }
        ];

        let likedPhotos = new Set();
        let currentPhotoIndex = 0;
        const photosPerLoad = 8;

        function createPhotoCard(photo) {
            const isLiked = likedPhotos.has(photo.id);
            
            return `
                <div class="photo-card bg-white rounded-xl shadow-lg overflow-hidden mb-6 relative group">
                    <div class="relative overflow-hidden">
                        <img src="${photo.url}" alt="Photo by ${photo.photographer}" class="w-full object-cover transition-transform duration-300 group-hover:scale-105">
                        <div class="photo-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                <span class="text-white font-medium text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                                    ${photo.photographer}
                                </span>
                                <div class="flex space-x-2">
                                    <button onclick="toggleLike(${photo.id})" class="like-btn bg-white bg-opacity-20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-opacity-30 transition ${isLiked ? 'liked' : ''}">
                                        <i class="fas fa-heart"></i>
                                    </button>
                                    <button onclick="downloadPhoto('${photo.url}', '${photo.photographer}')" class="bg-white bg-opacity-20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-opacity-30 transition">
                                        <i class="fas fa-download"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="flex items-center justify-between">
                            <span class="text-gray-600 text-sm">${photo.photographer}</span>
                            <div class="flex items-center space-x-4">
                                <button onclick="toggleLike(${photo.id})" class="like-btn flex items-center space-x-1 text-gray-600 hover:text-red-500 transition ${isLiked ? 'liked text-red-500' : ''}">
                                    <i class="fas fa-heart"></i>
                                    <span class="like-count-${photo.id}">${photo.likes + (isLiked ? 1 : 0)}</span>
                                </button>
                                <button onclick="downloadPhoto('${photo.url}', '${photo.photographer}')" class="text-gray-600 hover:text-amber-500 transition">
                                    <i class="fas fa-download"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function loadPhotos() {
            const grid = document.getElementById('photos-grid');
            const endIndex = Math.min(currentPhotoIndex + photosPerLoad, photos.length);
            
            for (let i = currentPhotoIndex; i < endIndex; i++) {
                grid.innerHTML += createPhotoCard(photos[i]);
            }
            
            currentPhotoIndex = endIndex;
            
            if (currentPhotoIndex >= photos.length) {
                document.getElementById('load-more').style.display = 'none';
            }
        }

        function toggleLike(photoId) {
            const photo = photos.find(p => p.id === photoId);
            const likeButtons = document.querySelectorAll(`button[onclick="toggleLike(${photoId})"]`);
            const likeCountElements = document.querySelectorAll(`.like-count-${photoId}`);
            
            if (likedPhotos.has(photoId)) {
                likedPhotos.delete(photoId);
                likeButtons.forEach(btn => {
                    btn.classList.remove('liked', 'text-red-500');
                });
                likeCountElements.forEach(el => {
                    el.textContent = photo.likes;
                });
            } else {
                likedPhotos.add(photoId);
                likeButtons.forEach(btn => {
                    btn.classList.add('liked', 'text-red-500');
                });
                likeCountElements.forEach(el => {
                    el.textContent = photo.likes + 1;
                });
            }
        }

        async function downloadPhoto(url, photographer) {
            try {
                const response = await fetch(url);
                const blob = await response.blob();
                const downloadUrl = window.URL.createObjectURL(blob);
                
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.download = `photo-by-${photographer.replace('@', '')}.jpg`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                window.URL.revokeObjectURL(downloadUrl);
                
                // Show success message
                showNotification('Photo downloaded successfully!', 'success');
            } catch (error) {
                showNotification('Failed to download photo', 'error');
            }
        }

        function showNotification(message, type) {
            const notification = document.createElement('div');
            notification.className = `fixed top-20 right-4 px-6 py-3 rounded-lg text-white font-medium z-50 transform translate-x-full transition-transform duration-300 ${
                type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.remove('translate-x-full');
            }, 100);
            
            setTimeout(() => {
                notification.classList.add('translate-x-full');
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }

        // Event listeners
        document.addEventListener('DOMContentLoaded', function() {
            // Load initial photos
            loadPhotos();
            
            // Load more button
            document.getElementById('load-more').addEventListener('click', loadPhotos);
            
            // Mobile menu toggle
            document.getElementById('menu-toggle').addEventListener('click', function() {
                const mobileMenu = document.getElementById('mobile-menu');
                mobileMenu.classList.toggle('hidden');
            });
        });
    </script>
</body>
</html>

// large_data.js - A file with lots of data for GitHub activity
const largeDataSet = {
  users: [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", age: 28, city: "New York" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", age: 34, city: "Los Angeles" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", age: 25, city: "Chicago" },
    { id: 4, name: "Diana Wilson", email: "diana@example.com", age: 31, city: "Houston" },
    { id: 5, name: "Edward Davis", email: "edward@example.com", age: 29, city: "Phoenix" },
    { id: 6, name: "Fiona Miller", email: "fiona@example.com", age: 27, city: "Philadelphia" },
    { id: 7, name: "George Garcia", email: "george@example.com", age: 33, city: "San Antonio" },
    { id: 8, name: "Hannah Rodriguez", email: "hannah@example.com", age: 26, city: "San Diego" },
    { id: 9, name: "Ian Martinez", email: "ian@example.com", age: 30, city: "Dallas" },
    { id: 10, name: "Julia Anderson", email: "julia@example.com", age: 32, city: "San Jose" },
    { id: 11, name: "Kevin Taylor", email: "kevin@example.com", age: 35, city: "Austin" },
    { id: 12, name: "Laura Thomas", email: "laura@example.com", age: 24, city: "Jacksonville" },
    { id: 13, name: "Michael Jackson", email: "michael@example.com", age: 28, city: "Fort Worth" },
    { id: 14, name: "Nancy White", email: "nancy@example.com", age: 36, city: "Columbus" },
    { id: 15, name: "Oliver Harris", email: "oliver@example.com", age: 29, city: "Charlotte" },
    { id: 16, name: "Patricia Martin", email: "patricia@example.com", age: 31, city: "San Francisco" },
    { id: 17, name: "Quincy Thompson", email: "quincy@example.com", age: 27, city: "Indianapolis" },
    { id: 18, name: "Rachel Garcia", email: "rachel@example.com", age: 33, city: "Seattle" },
    { id: 19, name: "Samuel Lee", email: "samuel@example.com", age: 30, city: "Denver" },
    { id: 20, name: "Tina Clark", email: "tina@example.com", age: 25, city: "Washington" }
  ],
  
  products: [
    { id: 1, name: "Laptop Pro", price: 1299.99, category: "Electronics", stock: 45 },
    { id: 2, name: "Wireless Mouse", price: 29.99, category: "Electronics", stock: 120 },
    { id: 3, name: "Gaming Keyboard", price: 89.99, category: "Electronics", stock: 67 },
    { id: 4, name: "4K Monitor", price: 399.99, category: "Electronics", stock: 23 },
    { id: 5, name: "USB Cable", price: 12.99, category: "Electronics", stock: 200 },
    { id: 6, name: "Desk Chair", price: 199.99, category: "Furniture", stock: 34 },
    { id: 7, name: "Standing Desk", price: 299.99, category: "Furniture", stock: 18 },
    { id: 8, name: "Table Lamp", price: 49.99, category: "Furniture", stock: 56 },
    { id: 9, name: "Bookshelf", price: 129.99, category: "Furniture", stock: 28 },
    { id: 10, name: "Coffee Mug", price: 14.99, category: "Kitchen", stock: 89 },
    { id: 11, name: "Water Bottle", price: 19.99, category: "Kitchen", stock: 145 },
    { id: 12, name: "Notebook", price: 8.99, category: "Office", stock: 167 },
    { id: 13, name: "Pen Set", price: 15.99, category: "Office", stock: 234 },
    { id: 14, name: "Backpack", price: 59.99, category: "Travel", stock: 78 },
    { id: 15, name: "Travel Mug", price: 24.99, category: "Travel", stock: 92 }
  ],

  companies: [
    { id: 1, name: "TechCorp Inc", industry: "Technology", employees: 1500, revenue: 50000000 },
    { id: 2, name: "Global Solutions", industry: "Consulting", employees: 850, revenue: 25000000 },
    { id: 3, name: "Innovation Labs", industry: "Research", employees: 320, revenue: 8000000 },
    { id: 4, name: "Digital Dynamics", industry: "Software", employees: 750, revenue: 35000000 },
    { id: 5, name: "Future Systems", industry: "Technology", employees: 1200, revenue: 42000000 },
    { id: 6, name: "Creative Agency", industry: "Marketing", employees: 180, revenue: 6000000 },
    { id: 7, name: "Data Insights", industry: "Analytics", employees: 420, revenue: 15000000 },
    { id: 8, name: "Cloud Networks", industry: "Infrastructure", employees: 680, revenue: 28000000 },
    { id: 9, name: "Mobile First", industry: "App Development", employees: 290, revenue: 12000000 },
    { id: 10, name: "AI Ventures", industry: "Artificial Intelligence", employees: 540, revenue: 22000000 }
  ],

  countries: [
    { code: "US", name: "United States", population: 331000000, capital: "Washington D.C." },
    { code: "CA", name: "Canada", population: 38000000, capital: "Ottawa" },
    { code: "UK", name: "United Kingdom", population: 67000000, capital: "London" },
    { code: "FR", name: "France", population: 67000000, capital: "Paris" },
    { code: "DE", name: "Germany", population: 83000000, capital: "Berlin" },
    { code: "IT", name: "Italy", population: 60000000, capital: "Rome" },
    { code: "ES", name: "Spain", population: 47000000, capital: "Madrid" },
    { code: "JP", name: "Japan", population: 125000000, capital: "Tokyo" },
    { code: "AU", name: "Australia", population: 25000000, capital: "Canberra" },
    { code: "BR", name: "Brazil", population: 212000000, capital: "Brasília" }
  ],

  colors: [
    "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF",
    "#800000", "#008000", "#000080", "#808000", "#800080", "#008080",
    "#FFA500", "#FFC0CB", "#A52A2A", "#808080", "#000000", "#FFFFFF",
    "#FFD700", "#C0C0C0", "#FF6347", "#40E0D0", "#EE82EE", "#F0E68C"
  ],

  dummyData: {
    lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    booleans: [true, false, true, true, false, false, true, false, true, false],
    dates: ["2024-01-01", "2024-02-15", "2024-03-20", "2024-04-10", "2024-05-25"],
    keywords: ["javascript", "python", "react", "nodejs", "mongodb", "sql", "html", "css"]
  }
};

// Utility functions
function generateRandomId() {
  return Math.random().toString(36).substr(2, 9);
}

function getCurrentTimestamp() {
  return new Date().toISOString();
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function generateRandomUser() {
  const firstNames = ["John", "Jane", "Mike", "Sarah", "David", "Emma", "Chris", "Lisa"];
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller"];
  
  return {
    id: generateRandomId(),
    firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
    lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
    age: Math.floor(Math.random() * 50) + 18,
    createdAt: getCurrentTimestamp()
  };
}

// Sample configurations
const configurations = {
  api: {
    baseUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3,
    endpoints: {
      users: "/users",
      products: "/products",
      orders: "/orders",
      analytics: "/analytics"
    }
  },
  database: {
    host: "localhost",
    port: 5432,
    name: "sample_db",
    ssl: false,
    poolSize: 10
  },
  cache: {
    ttl: 3600,
    maxSize: 1000,
    strategy: "lru"
  }
};

// Export everything
module.exports = {
  largeDataSet,
  generateRandomId,
  getCurrentTimestamp,
  shuffleArray,
  generateRandomUser,
  configurations
};

// Additional sample data for padding
const additionalSampleData = {
  animals: [
    "Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Monkey", "Kangaroo",
    "Penguin", "Dolphin", "Whale", "Shark", "Eagle", "Parrot", "Owl",
    "Bear", "Wolf", "Fox", "Rabbit", "Squirrel", "Deer"
  ],
  
  cities: [
    "New York", "London", "Paris", "Tokyo", "Sydney", "Toronto", "Berlin",
    "Rome", "Madrid", "Amsterdam", "Stockholm", "Copenhagen", "Vienna",
    "Prague", "Budapest", "Warsaw", "Helsinki", "Oslo", "Dublin", "Lisbon"
  ],
  
  foods: [
    "Pizza", "Burger", "Pasta", "Sushi", "Tacos", "Salad", "Soup", "Sandwich",
    "Rice", "Bread", "Cheese", "Chicken", "Beef", "Fish", "Vegetables",
    "Fruits", "Dessert", "Ice Cream", "Cake", "Cookies"
  ],
  
  hobbies: [
    "Reading", "Writing", "Painting", "Drawing", "Photography", "Music",
    "Dancing", "Singing", "Cooking", "Gardening", "Hiking", "Cycling",
    "Swimming", "Running", "Yoga", "Gaming", "Movies", "Travel", "Sports"
  ]
};

// More utility functions for completeness
function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

console.log("Large data file loaded successfully!");
console.log(`Total users: ${largeDataSet.users.length}`);
console.log(`Total products: ${largeDataSet.products.length}`);
console.log(`Total companies: ${largeDataSet.companies.length}`);