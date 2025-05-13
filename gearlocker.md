---
layout: base
title: Gear Locker
search_exclude: true
menu: nav/mainHeader.html
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Gear Locker | Cartage</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 text-gray-800">

  <!-- Main Wrapper -->
  <main class="max-w-7xl mx-auto p-4 sm:p-8">
    
    <!-- Page Title -->
    <div class="mb-6">
      <h1 class="text-3xl sm:text-4xl font-bold">Gear Locker</h1>
      <p class="text-gray-600">Discover and share the gear behind stunning car photography.</p>
    </div>

    <!-- Search and Filters -->
    <div class="flex flex-col sm:flex-row sm:items-end gap-4 mb-6">
      <input type="text" placeholder="Search gear..." class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500" />
      <select class="flex-1 px-4 py-2 border border-gray-300 rounded-md">
        <option>All Categories</option>
        <option>Camera Body</option>
        <option>Lens</option>
        <option>Drone</option>
        <option>Accessory</option>
      </select>
      <select class="flex-1 px-4 py-2 border border-gray-300 rounded-md">
        <option>All Brands</option>
        <option>Sony</option>
        <option>Canon</option>
        <option>Nikon</option>
        <option>DJI</option>
      </select>
      <select class="flex-1 px-4 py-2 border border-gray-300 rounded-md">
        <option>All Users</option>
        <option>@car.snapper</option>
        <option>@drone.dude</option>
      </select>
    </div>

    <!-- Add Gear Button -->
    <div class="flex justify-end mb-6">
      <button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
        + Add Gear
      </button>
    </div>

    <!-- Gear Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <!-- Gear Card -->
      <div class="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
        <img src="https://source.unsplash.com/400x250/?camera,photography" class="w-full h-48 object-cover" alt="Gear photo">
        <div class="p-4 space-y-2">
          <h3 class="text-xl font-semibold">Sony A7 III</h3>
          <p class="text-sm text-gray-500">Full-frame mirrorless camera great for rolling shots and low light.</p>
          <div class="flex flex-wrap gap-2 text-xs mt-2">
            <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded">Camera Body</span>
            <span class="bg-gray-200 text-gray-700 px-2 py-1 rounded">Sony</span>
            <span class="bg-green-100 text-green-700 px-2 py-1 rounded">Low Light</span>
          </div>
          <div class="flex justify-end gap-2 mt-4">
            <button class="text-sm text-indigo-600 hover:underline">Edit</button>
            <button class="text-sm text-red-500 hover:underline">Delete</button>
          </div>
        </div>
      </div>

      <!-- Repeat for more sample gear -->
      <div class="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
        <img src="https://source.unsplash.com/400x250/?lens" class="w-full h-48 object-cover" alt="Gear photo">
        <div class="p-4 space-y-2">
          <h3 class="text-xl font-semibold">Canon EF 70-200mm f/2.8</h3>
          <p class="text-sm text-gray-500">Versatile telephoto lens for tracking fast cars and compressing backgrounds.</p>
          <div class="flex flex-wrap gap-2 text-xs mt-2">
            <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded">Lens</span>
            <span class="bg-gray-200 text-gray-700 px-2 py-1 rounded">Canon</span>
            <span class="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Rolling Shots</span>
          </div>
          <div class="flex justify-end gap-2 mt-4">
            <button class="text-sm text-indigo-600 hover:underline">Edit</button>
            <button class="text-sm text-red-500 hover:underline">Delete</button>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
        <img src="https://source.unsplash.com/400x250/?drone,dji" class="w-full h-48 object-cover" alt="Gear photo">
        <div class="p-4 space-y-2">
          <h3 class="text-xl font-semibold">DJI Mavic Air 2</h3>
          <p class="text-sm text-gray-500">Compact drone with stunning aerial 4K shots, perfect for cinematic scenes.</p>
          <div class="flex flex-wrap gap-2 text-xs mt-2">
            <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded">Drone</span>
            <span class="bg-gray-200 text-gray-700 px-2 py-1 rounded">DJI</span>
            <span class="bg-pink-100 text-pink-700 px-2 py-1 rounded">Cinematic</span>
          </div>
          <div class="flex justify-end gap-2 mt-4">
            <button class="text-sm text-indigo-600 hover:underline">Edit</button>
            <button class="text-sm text-red-500 hover:underline">Delete</button>
          </div>
        </div>
      </div>

    </div>

    <!-- No Gear Message (optional) -->
    <!-- <p class="text-center text-gray-500 mt-12">No gear items found. Try adjusting your filters.</p> -->

  </main>

</body>
</html>
