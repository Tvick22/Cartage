---
layout: base
title: My Gallery
search_exclude: true
menu: nav/mainHeader.html
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Profile | Cartage</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .profile-pic-container {
            position: relative;
            width: 150px;
            height: 150px;
        }
        .profile-pic-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s;
        }
        .profile-pic-container:hover .profile-pic-overlay {
            opacity: 1;
        }
        .post-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2px;
        }
        .post-item {
            aspect-ratio: 1/1;
            position: relative;
        }
        .post-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3);
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.2s;
        }
        .post-item:hover .post-overlay {
            opacity: 1;
        }
    </style>
</head>
<body class="bg-gray-100 font-sans">
    <div class="max-w-4xl mx-auto bg-white shadow-sm">
        <!-- Header -->
        <header class="bg-gray-900 text-white p-4">
            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-2">
                    <i class="fas fa-camera-retro text-2xl text-amber-500"></i>
                    <h1 class="text-xl font-bold">Cartage</h1>
                </div>
                <div class="flex items-center space-x-4">
                    <button class="p-2 rounded-full hover:bg-gray-700">
                        <i class="fas fa-search"></i>
                    </button>
                    <button class="p-2 rounded-full hover:bg-gray-700">
                        <i class="fas fa-bell"></i>
                    </button>
                    <button class="p-2 rounded-full hover:bg-gray-700">
                        <i class="fas fa-user"></i>
                    </button>
                </div>
            </div>
        </header>

        

        <!-- Posts Section -->
        <div class="border-t border-gray-200 pt-4">
            <!-- Post Upload Section -->
            <div class="px-6 mb-4">
                <h3 class="text-lg font-semibold mb-2">Upload Your Photos</h3>
                <input type="file" id="image-upload" accept="image/*" class="mb-4" />
                <button onclick="postImage()" class="bg-amber-500 hover:bg-amber-600 text-white px-4 py-1 rounded-md">
                    Post Image
                </button>
            </div>

            <!-- All Posts -->
            <div class="px-2">
                <div class="post-grid" id="postGrid">
                    <!-- Dynamically added posts will appear here -->
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="bg-gray-50 p-4 border-t border-gray-200 mt-6">
            <div class="flex justify-center space-x-6">
                <a href="#" class="text-gray-500 hover:text-gray-700">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-700">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-700">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-700">
                    <i class="fab fa-youtube"></i>
                </a>
            </div>
            <div class="text-center text-gray-500 text-sm mt-2">
                © 2023 Cartage - Automotive Photography Community
            </div>
        </footer>
    </div>

    <script>
        let imageArray = [];

        function postImage() {
            const fileInput = document.getElementById('image-upload');
            const file = fileInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = function() {
                    imageArray.push(reader.result); // Add image to array
                    displayPosts(); // Update the grid with new post
                };
                reader.readAsDataURL(file); // Convert image to base64
            }
        }

        function displayPosts() {
            const postGrid = document.getElementById('postGrid');
            postGrid.innerHTML = ''; // Clear existing posts

            imageArray.forEach(imageSrc => {
                const postItem = document.createElement('div');
                postItem.classList.add('post-item');

                const img = document.createElement('img');
                img.src = imageSrc;
                img.alt = "User Post";
                img.classList.add('w-full', 'h-full', 'object-cover');

                const overlay = document.createElement('div');
                overlay.classList.add('post-overlay');
                overlay.innerHTML = `<div class="flex space-x-4 text-white">
                                        <span><i class="fas fa-heart mr-1"></i> 0</span>
                                        <span><i class="fas fa-comment mr-1"></i> 0</span>
                                      </div>`;
                postItem.appendChild(img);
                postItem.appendChild(overlay);
                postGrid.appendChild(postItem);
            });
        }
    </script>