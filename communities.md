---
layout: base
title: Communities
search_exclude: true
menu: nav/mainHeader.html
---


<html lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Communities | Cartage</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .community-card:hover .community-cover {
            transform: scale(1.03);
            transition: transform 0.3s ease;
        }
        .community-cover {
            transition: transform 0.3s ease;
        }
        .search-bar:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }
        .filter-dropdown {
            scrollbar-width: thin;
            scrollbar-color: #3b82f6 #f1f1f1;
        }
        .filter-dropdown::-webkit-scrollbar {
            width: 6px;
        }
        .filter-dropdown::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        .filter-dropdown::-webkit-scrollbar-thumb {
            background-color: #3b82f6;
            border-radius: 20px;
        }
    </style>
<body class="bg-gray-50 font-sans">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-10">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <div class="flex items-center space-x-2">
                <i class="fas fa-camera-retro text-2xl text-blue-600"></i>
                <h1 class="text-xl font-bold text-gray-800">Cartage</h1>
            </div>
            <nav class="hidden md:flex space-x-6">
                <a href="#" class="text-gray-600 hover:text-blue-600">Home</a>
                <a href="#" class="text-gray-600 hover:text-blue-600">Explore</a>
                <a href="#" class="text-blue-600 font-medium">Communities</a>
                <a href="#" class="text-gray-600 hover:text-blue-600">Events</a>
            </nav>
            <div class="flex items-center space-x-4">
                <button class="md:hidden text-gray-600">
                    <i class="fas fa-bars text-xl"></i>
                </button>
                <div class="hidden md:flex items-center space-x-2">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" class="w-8 h-8 rounded-full">
                    <span class="text-sm font-medium">JohnD</span>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
        <!-- Page Header -->
        <div class="mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-2">Communities</h2>
            <p class="text-gray-600">Connect with fellow car photographers in specialized communities</p>
        </div>

        <!-- Search and Filter Section -->
        <div class="mb-8">
            <div class="flex flex-col md:flex-row gap-4">
                <!-- Search Bar -->
                <div class="relative flex-grow">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i class="fas fa-search text-gray-400"></i>
                    </div>
                    <input type="text" class="search-bar w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500" placeholder="Search communities...">
                </div>
                
                <!-- Filter Dropdowns -->
                <div class="flex flex-col sm:flex-row gap-2">
                    <div class="relative">
                        <button id="tagFilterBtn" class="flex items-center justify-between w-full sm:w-48 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                            <span>All Tags</span>
                            <i class="fas fa-chevron-down ml-2 text-gray-500"></i>
                        </button>
                        <div id="tagFilterDropdown" class="hidden absolute z-10 mt-1 w-48 bg-white shadow-lg rounded-lg border border-gray-200 max-h-60 overflow-y-auto filter-dropdown">
                            <div class="p-2">
                                <div class="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer">
                                    <input type="checkbox" id="photography" class="mr-2" checked>
                                    <label for="photography" class="cursor-pointer">Photography Style</label>
                                </div>
                                <div class="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer">
                                    <input type="checkbox" id="carType" class="mr-2" checked>
                                    <label for="carType" class="cursor-pointer">Car Type</label>
                                </div>
                                <div class="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer">
                                    <input type="checkbox" id="activity" class="mr-2" checked>
                                    <label for="activity" class="cursor-pointer">Activity</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="relative">
                        <button id="sortBtn" class="flex items-center justify-between w-full sm:w-48 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                            <span>Popular</span>
                            <i class="fas fa-chevron-down ml-2 text-gray-500"></i>
                        </button>
                        <div id="sortDropdown" class="hidden absolute z-10 mt-1 w-48 bg-white shadow-lg rounded-lg border border-gray-200">
                            <div class="p-2">
                                <div class="p-2 hover:bg-gray-100 rounded cursor-pointer">Popular</div>
                                <div class="p-2 hover:bg-gray-100 rounded cursor-pointer">Newest</div>
                                <div class="p-2 hover:bg-gray-100 rounded cursor-pointer">Most Members</div>
                                <div class="p-2 hover:bg-gray-100 rounded cursor-pointer">Recently Active</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Communities Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Community Card 1 -->
            <div class="community-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div class="relative h-40 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                         alt="JDM Legends" 
                         class="community-cover w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute bottom-3 left-3">
                        <h3 class="text-xl font-bold text-white">JDM Legends</h3>
                    </div>
                </div>
                <div class="p-4">
                    <p class="text-gray-600 mb-4">For fans of classic and modern Japanese Domestic Market cars. Share your best shots and connect with fellow JDM enthusiasts.</p>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <i class="fas fa-users text-gray-500 mr-1"></i>
                            <span class="text-sm text-gray-600">12.8k members</span>
                        </div>
                        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <!-- Community Card 2 -->
            <div class="community-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div class="relative h-40 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                         alt="Euro Builds" 
                         class="community-cover w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute bottom-3 left-3">
                        <h3 class="text-xl font-bold text-white">Euro Builds</h3>
                    </div>
                </div>
                <div class="p-4">
                    <p class="text-gray-600 mb-4">European car builds and photography. From classic Porsches to modern BMWs, showcase your European automotive passion.</p>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <i class="fas fa-users text-gray-500 mr-1"></i>
                            <span class="text-sm text-gray-600">8.5k members</span>
                        </div>
                        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <!-- Community Card 3 -->
            <div class="community-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div class="relative h-40 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                         alt="Track Day Shooters" 
                         class="community-cover w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute bottom-3 left-3">
                        <h3 class="text-xl font-bold text-white">Track Day Shooters</h3>
                    </div>
                </div>
                <div class="p-4">
                    <p class="text-gray-600 mb-4">Photos and videos from racing circuits and track days. Capture the speed, the angles, and the adrenaline of motorsports.</p>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <i class="fas fa-users text-gray-500 mr-1"></i>
                            <span class="text-sm text-gray-600">6.2k members</span>
                        </div>
                        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <!-- Community Card 4 -->
            <div class="community-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div class="relative h-40 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                         alt="Stance Society" 
                         class="community-cover w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute bottom-3 left-3">
                        <h3 class="text-xl font-bold text-white">Stance Society</h3>
                    </div>
                </div>
                <div class="p-4">
                    <p class="text-gray-600 mb-4">Aesthetic and fitment-focused photography. For those who appreciate the art of stance, fitment, and automotive aesthetics.</p>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <i class="fas fa-users text-gray-500 mr-1"></i>
                            <span class="text-sm text-gray-600">15.3k members</span>
                        </div>
                        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <!-- Community Card 5 -->
            <div class="community-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div class="relative h-40 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80" 
                         alt="Off-Road Collective" 
                         class="community-cover w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute bottom-3 left-3">
                        <h3 class="text-xl font-bold text-white">Off-Road Collective</h3>
                    </div>
                </div>
                <div class="p-4">
                    <p class="text-gray-600 mb-4">Off-road, 4x4, and adventure vehicle content. From mud-covered Jeeps to desert-running trucks, show us your off-road beasts.</p>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <i class="fas fa-users text-gray-500 mr-1"></i>
                            <span class="text-sm text-gray-600">9.7k members</span>
                        </div>
                        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <!-- Community Card 6 (Create New) -->
            <div class="community-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center min-h-[300px]">
                <div class="text-center p-6">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-plus text-blue-600 text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Create Community</h3>
                    <p class="text-gray-600 mb-4">Start your own community and connect with like-minded car photographers</p>
                    <button class="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                        Create
                    </button>
                </div>
            </div>
        </div>

        <!-- Pagination -->
        <div class="mt-10 flex justify-center">
            <nav class="flex items-center space-x-1">
                <button class="px-3 py-1 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="px-3 py-1 rounded-lg bg-blue-600 text-white">1</button>
                <button class="px-3 py-1 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100">2</button>
                <button class="px-3 py-1 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100">3</button>
                <span class="px-2 text-gray-500">...</span>
                <button class="px-3 py-1 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100">8</button>
                <button class="px-3 py-1 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </nav>
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8 mt-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center space-x-2 mb-4">
                        <i class="fas fa-camera-retro text-2xl text-blue-400"></i>
                        <h3 class="text-xl font-bold">Cartage</h3>
                    </div>
                    <p class="text-gray-400">The social platform for car photographers to share, connect, and inspire.</p>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Explore</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">Popular</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Latest</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Events</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Challenges</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Communities</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">Browse All</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Create Community</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Guidelines</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Connect</h4>
                    <div class="flex space-x-4 mb-4">
                        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-instagram text-xl"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter text-xl"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-facebook text-xl"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-discord text-xl"></i></a>
                    </div>
                    <button class="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">Contact Us</button>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                <p>&copy; 2023 Cartage. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Dropdown toggle functionality
        document.getElementById('tagFilterBtn').addEventListener('click', function() {
            document.getElementById('tagFilterDropdown').classList.toggle('hidden');
            document.getElementById('sortDropdown').classList.add('hidden');
        });

        document.getElementById('sortBtn').addEventListener('click', function() {
            document.getElementById('sortDropdown').classList.toggle('hidden');
            document.getElementById('tagFilterDropdown').classList.add('hidden');
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('#tagFilterBtn') && !event.target.closest('#tagFilterDropdown')) {
                document.getElementById('tagFilterDropdown').classList.add('hidden');
            }
            if (!event.target.closest('#sortBtn') && !event.target.closest('#sortDropdown')) {
                document.getElementById('sortDropdown').classList.add('hidden');
            }
        });

        // Update filter button text when selecting an option
        document.querySelectorAll('#sortDropdown div').forEach(item => {
            item.addEventListener('click', function() {
                document.getElementById('sortBtn').querySelector('span').textContent = this.textContent;
                document.getElementById('sortDropdown').classList.add('hidden');
            });
        });