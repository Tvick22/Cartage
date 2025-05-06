---
layout: base
title: Profile
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
       .badge {
           position: relative;
       }
       .badge-tooltip {
           visibility: hidden;
           width: 120px;
           background-color: #333;
           color: #fff;
           text-align: center;
           border-radius: 6px;
           padding: 5px;
           position: absolute;
           z-index: 1;
           bottom: 125%;
           left: 50%;
           margin-left: -60px;
           opacity: 0;
           transition: opacity 0.3s;
       }
       .badge:hover .badge-tooltip {
           visibility: visible;
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
       .post-item.pinned {
           border: 2px solid #f59e0b;
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


       <!-- Profile Section -->
       <div class="p-6">
           <div class="flex flex-col md:flex-row md:items-end md:space-x-8">
               <!-- Profile Picture -->
               <div class="profile-pic-container mb-4 md:mb-0">
                   <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                        alt="Profile picture"
                        class="w-full h-full rounded-full object-cover border-4 border-amber-500">
                   <div class="profile-pic-overlay">
                       <label for="profile-pic-upload" class="cursor-pointer">
                           <i class="fas fa-camera text-white text-2xl"></i>
                       </label>
                       <input type="file" id="profile-pic-upload" class="hidden">
                   </div>
               </div>


               <!-- Profile Info -->
               <div class="flex-1">
                   <div class="flex flex-col md:flex-row md:items-center md:space-x-6 mb-4">
                       <h2 class="text-2xl font-bold">Alex Johnson</h2>
                       <span class="text-gray-600">@alexjohnson_photography</span>
                   </div>


                   <div class="flex space-x-4 mb-4">
                       <button class="bg-amber-500 hover:bg-amber-600 text-white px-4 py-1 rounded-md font-medium">
                           <i class="fas fa-envelope mr-2"></i>Message
                       </button>
                       <button class="bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded-md font-medium">
                           <i class="fas fa-user-plus mr-2"></i>Follow
                       </button>
                       <button class="bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded-md font-medium">
                           <i class="fas fa-camera mr-2"></i>Gear Used
                       </button>
                   </div>


                   <p class="mb-4 text-gray-700">
                       Automotive photographer based in Los Angeles. Passionate about capturing the beauty of classic and modern cars.
                       Nikon shooter. Available for commissions worldwide.
                   </p>


                   <!-- Stats -->
                   <div class="flex space-x-6 mb-4">
                       <div>
                           <span class="font-bold">1,248</span>
                           <span class="text-gray-600"> posts</span>
                       </div>
                       <div>
                           <span class="font-bold">12.5k</span>
                           <span class="text-gray-600"> followers</span>
                       </div>
                       <div>
                           <span class="font-bold">843</span>
                           <span class="text-gray-600"> following</span>
                       </div>
                   </div>


                   <!-- Badges -->
                   <div class="flex space-x-2 mb-4">
                       <div class="badge">
                           <div class="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white">
                               <i class="fas fa-trophy"></i>
                           </div>
                           <span class="badge-tooltip">Winner: 2023 Best Automotive Photo</span>
                       </div>
                       <div class="badge">
                           <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                               <i class="fas fa-medal"></i>
                           </div>
                           <span class="badge-tooltip">Runner-up: 2022 Car Photography Awards</span>
                       </div>
                       <div class="badge">
                           <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
                               <i class="fas fa-star"></i>
                           </div>
                           <span class="badge-tooltip">Featured Photographer: June 2023</span>
                       </div>
                   </div>


                   <!-- Communities -->
                   <div class="mb-4">
                       <h3 class="font-medium text-gray-700 mb-1">Communities</h3>
                       <div class="flex flex-wrap gap-2">
                           <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">Classic Cars</span>
                           <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">Supercars</span>
                           <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">JDM</span>
                           <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">Car Meets</span>
                           <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">...</span>
                       </div>
                   </div>
               </div>
           </div>
       </div>


       <!-- Posts Section -->
       <div class="border-t border-gray-200 pt-4">
           <!-- Sort/Filter Options -->
           <div class="flex justify-between items-center px-6 mb-4">
               <h3 class="text-lg font-semibold">Posts</h3>
               <div class="flex space-x-2">
                   <select class="bg-gray-100 border border-gray-300 rounded-md px-3 py-1 text-sm">
                       <option>Newest First</option>
                       <option>Oldest First</option>
                       <option>Most Popular</option>
                   </select>
                   <select class="bg-gray-100 border border-gray-300 rounded-md px-3 py-1 text-sm">
                       <option>All Content</option>
                       <option>Photos Only</option>
                       <option>Videos Only</option>
                       <option>Featured</option>
                   </select>
               </div>
           </div>


           <!-- Pinned Posts -->
           <div class="mb-6 px-2">
               <h4 class="text-md font-medium px-4 mb-2 flex items-center">
                   <i class="fas fa-thumbtack text-amber-500 mr-2"></i> Pinned Posts
               </h4>
               <div class="post-grid">
                   <!-- Pinned Post 1 -->
                   <div class="post-item pinned">
                       <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                            alt="Pinned post"
                            class="w-full h-full object-cover">
                       <div class="post-overlay">
                           <div class="flex space-x-4 text-white">
                               <span><i class="fas fa-heart mr-1"></i> 1.2k</span>
                               <span><i class="fas fa-comment mr-1"></i> 84</span>
                           </div>
                       </div>
                   </div>
                   <!-- Pinned Post 2 -->
                   <div class="post-item pinned">
                       <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                            alt="Pinned post"
                            class="w-full h-full object-cover">
                       <div class="post-overlay">
                           <div class="flex space-x-4 text-white">
                               <span><i class="fas fa-heart mr-1"></i> 2.1k</span>
                               <span><i class="fas fa-comment mr-1"></i> 156</span>
                           </div>
                       </div>
                   </div>
                   <!-- Pinned Post 3 -->
                   <div class="post-item pinned">
                       <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                            alt="Pinned post"
                            class="w-full h-full object-cover">
                       <div class="post-overlay">
                           <div class="flex space-x-4 text-white">
                               <span><i class="fas fa-heart mr-1"></i> 3.4k</span>
                               <span><i class="fas fa-comment mr-1"></i> 231</span>
                           </div>
                       </div>
                   </div>
               </div>
           </div>


           <!-- All Posts -->
           <div class="px-2">
               <div class="post-grid">
                   <!-- Sample posts - in a real app these would be dynamically generated -->
                   <div class="post-item">
                       <img src="https://images.unsplash.com/photo-1541899481282-d53b3e38fa9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                            alt="Post"
                            class="w-full h-full object-cover">
                       <div class="post-overlay">
                           <div class="flex space-x-4 text-white">
                               <span><i class="fas fa-heart mr-1"></i> 842</span>
                               <span><i class="fas fa-comment mr-1"></i> 43</span>
                           </div>
                       </div>
                   </div>
                   <div class="post-item">
                       <img src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                            alt="Post"
                            class="w-full h-full object-cover">
                       <div class="post-overlay">
                           <div class="flex space-x-4 text-white">
                               <span><i class="fas fa-heart mr-1"></i> 723</span>
                               <span><i class="fas fa-comment mr-1"></i> 38</span>
                           </div>
                       </div>
                   </div>
                   <div class="post-item">
                       <img src="https://images.unsplash.com/photo-1549927681-0b673b8243ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                            alt="Post"
                            class="w-full h-full object-cover">
                       <div class="post-overlay">
                           <div class="flex space-x-4 text-white">
                               <span><i class="fas fa-heart mr-1"></i> 915</span>
                               <span><i class="fas fa-comment mr-1"></i> 52</span>
                           </div>
                       </div>
                   </div>
                   <div class="post-item">
                       <img src="https://images.unsplash.com/photo-1549927681-0b673b8243ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                            alt="Post"
                            class="w-full h-full object-cover">
                       <div class="post-overlay">
                           <div class="flex space-x-4 text-white">
                               <span><i class="fas fa-heart mr-1"></i> 672</span>
                               <span><i class="fas fa-comment mr-1"></i> 29</span>
                           </div>
                       </div>
                   </div>
                   <div class="post-item">
                       <img src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                            alt="Post"
                            class="w-full h-full object-cover">
                       <div class="post-overlay">
                           <div class="flex space-x-4 text-white">
                               <span><i class="fas fa-heart mr-1"></i> 1.1k</span>
                               <span><i class="fas fa-comment mr-1"></i> 67</span>
                           </div>
                       </div>
                   </div>
                   <div class="post-item">
                       <img src="https://images.unsplash.com/photo-1541899481282-d53b3e38fa9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                            alt="Post"
                            class="w-full h-full object-cover">
                       <div class="post-overlay">
                           <div class="flex space-x-4 text-white">
                               <span><i class="fas fa-heart mr-1"></i> 783</span>
                               <span><i class="fas fa-comment mr-1"></i> 41</span>
                           </div>
                       </div>
                   </div>
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
</body>
</html>

