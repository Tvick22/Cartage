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