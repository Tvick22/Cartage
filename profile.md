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
        <div class="relative flex flex-col items-center">
            <img id="profile-pic" 
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sample_User_Icon.png/600px-Sample_User_Icon.png"
                 alt="Profile picture"
                 class="w-32 h-32 rounded-full border-4 border-amber-500 object-cover">
            <label for="profile-pic-upload" class="cursor-pointer bg-amber-500 mt-2 px-3 py-1 rounded-md text-white text-sm shadow-md">
                Upload Photo
            </label>
            <input type="file" id="profile-pic-upload" class="hidden" accept="image/*">
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
                <ul id="activity-list" class="space-y-2">
                    <li class="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                        <div><i class="fas fa-camera-retro text-amber-500 mr-3"></i>Taking pictures</div>
                        <button onclick="removeActivity(this)" class="text-red-500 hover:underline text-sm">Delete</button>
                    </li>
                    <li class="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                        <div><i class="fas fa-car text-blue-500 mr-3"></i>Going to car meets</div>
                        <button onclick="removeActivity(this)" class="text-red-500 hover:underline text-sm">Delete</button>
                    </li>
                    <li class="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                        <div><i class="fas fa-flag-checkered text-red-500 mr-3"></i>Attending car shows</div>
                        <button onclick="removeActivity(this)" class="text-red-500 hover:underline text-sm">Delete</button>
                    </li>
                </ul>

                <!-- Add Activity Button -->
                <button onclick="addActivity()"
                        class="mt-4 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md font-medium">
                    + Add Activity
                </button>
            </div>
        </div>
    </div>
</div>

<!-- Scripts -->
<script>
    // Handle profile picture upload
    document.getElementById('profile-pic-upload').addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('profile-pic').src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });

    // Add activity function
    function addActivity() {
        const activityText = prompt("Enter a new activity:");
        if (activityText) {
            const li = document.createElement("li");
            li.className = "flex items-center justify-between bg-gray-50 p-2 rounded-md";
            li.innerHTML = `<div><i class="fas fa-star text-yellow-500 mr-3"></i>${activityText}</div>
                            <button onclick="removeActivity(this)" class="text-red-500 hover:underline text-sm">Delete</button>`;
            document.getElementById("activity-list").appendChild(li);
        }
    }

    // Remove activity
    function removeActivity(button) {
        button.parentElement.remove();
    }
</script>


