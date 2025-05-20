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

<!-- Profile Section -->
<div class="p-6 bg-white rounded-lg shadow-lg max-w-5xl mx-auto mt-8">
    <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10">
        
        <!-- Profile Picture and Role -->
        <div class="relative">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                 alt="Profile picture"
                 class="w-32 h-32 rounded-full border-4 border-amber-500 object-cover">
            <div class="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
                <label for="profile-pic-upload" class="cursor-pointer bg-amber-500 p-2 rounded-full shadow-lg">
                    <i class="fas fa-camera text-white text-sm"></i>
                </label>
                <input type="file" id="profile-pic-upload" class="hidden">
            </div>
        </div>

        <!-- Profile Details -->
        <div class="flex-1">
            <div class="flex flex-col space-y-1 mb-4">
                <h2 class="text-3xl font-bold text-gray-900">Alex Johnson</h2>
                <p class="text-gray-500">@alexjohnson_photography</p>
                <span class="text-sm text-gray-600 font-medium">Photographer</span>
            </div>

            <div class="flex space-x-4 mb-6">
                <button class="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md font-medium">
                    <i class="fas fa-envelope mr-2"></i>Message
                </button>
                <button class="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md font-medium">
                    <i class="fas fa-user-plus mr-2"></i>Follow
                </button>
            </div>

            <!-- Activity Section -->
            <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Alex spends most of his time on...</h3>
                <ul class="space-y-2">
                    <li class="flex items-center bg-gray-50 p-2 rounded-md">
                        <i class="fas fa-camera-retro text-amber-500 mr-3"></i>
                        Taking pictures
                    </li>
                    <li class="flex items-center bg-gray-50 p-2 rounded-md">
                        <i class="fas fa-car text-blue-500 mr-3"></i>
                        Going to car meets
                    </li>
                    <li class="flex items-center bg-gray-50 p-2 rounded-md">
                        <i class="fas fa-flag-checkered text-red-500 mr-3"></i>
                        Attending car shows
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
