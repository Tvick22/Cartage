---
layout: base
title: Events
search_exclude: true
menu: nav/mainHeader.html
---


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Find Events | Cartage</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .custom-pin {
            width: 30px;
            height: 30px;
            background-color: #3B82F6;
            border-radius: 50% 50% 50% 0;
            position: relative;
            transform: rotate(-45deg);
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .custom-pin::after {
            content: "";
            width: 18px;
            height: 18px;
            background-color: white;
            border-radius: 50%;
            position: absolute;
            transform: rotate(45deg);
        }
        .map-container {
            height: 400px;
            width: 100%;
            position: relative;
        }
        .event-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .filter-section {
            transition: all 0.3s ease;
        }
        @media (max-width: 768px) {
            .filter-section {
                position: fixed;
                top: 0;
                left: -100%;
                width: 80%;
                height: 100vh;
                z-index: 50;
                background-color: white;
                padding: 1.5rem;
                overflow-y: auto;
            }
            .filter-section.active {
                left: 0;
            }
            .filter-overlay {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0,0,0,0.5);
                z-index: 40;
            }
            .filter-overlay.active {
                display: block;
            }
        }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0 flex items-center">
                        <i class="fas fa-car text-blue-500 text-2xl mr-2"></i>
                        <span class="text-xl font-bold text-gray-900">Cartage</span>
                    </div>
                </div>
                <div class="hidden md:ml-6 md:flex md:items-center md:space-x-8">
                    <a href="#" class="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Home</a>
                    <a href="#" class="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Gallery</a>
                    <a href="#" class="text-blue-600 border-b-2 border-blue-500 px-3 py-2 text-sm font-medium">Events</a>
                    <a href="#" class="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Community</a>
                    <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Upload</button>
                </div>
                <div class="flex items-center md:hidden">
                    <button id="mobile-menu-button" class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col md:flex-row gap-6">
            <!-- Filter Section (Sidebar on desktop, off-canvas on mobile) -->
            <div class="md:hidden flex justify-between items-center mb-4">
                <h1 class="text-2xl font-bold text-gray-900">Find Car Events</h1>
                <button id="filter-toggle" class="bg-blue-500 text-white p-2 rounded-md">
                    <i class="fas fa-filter"></i> Filters
                </button>
            </div>
            
            <div id="filter-overlay" class="filter-overlay"></div>
            
            <div id="filter-section" class="filter-section md:w-64 flex-shrink-0">
                <div class="md:sticky md:top-8">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="text-lg font-semibold text-gray-900">Filters</h2>
                        <button id="close-filters" class="md:hidden text-gray-500 hover:text-gray-700">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <!-- Search -->
                    <div class="mb-6">
                        <label for="search" class="block text-sm font-medium text-gray-700 mb-1">Search</label>
                        <div class="relative rounded-md shadow-sm">
                            <input type="text" id="search" class="focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 pr-10 py-2 sm:text-sm border-gray-300 rounded-md" placeholder="Keyword or location">
                            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <i class="fas fa-search text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Event Type Filter -->
                    <div class="mb-6">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                        <div class="space-y-2">
                            <div class="flex items-center">
                                <input id="meet" name="event-type" type="checkbox" checked class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                <label for="meet" class="ml-2 text-sm text-gray-700">Car Meets</label>
                            </div>
                            <div class="flex items-center">
                                <input id="show" name="event-type" type="checkbox" checked class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                <label for="show" class="ml-2 text-sm text-gray-700">Car Shows</label>
                            </div>
                            <div class="flex items-center">
                                <input id="track" name="event-type" type="checkbox" checked class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                <label for="track" class="ml-2 text-sm text-gray-700">Track Days</label>
                            </div>
                            <div class="flex items-center">
                                <input id="cruise" name="event-type" type="checkbox" checked class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                <label for="cruise" class="ml-2 text-sm text-gray-700">Cruise Nights</label>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Date Filter -->
                    <div class="mb-6">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                        <select class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                            <option>All upcoming events</option>
                            <option>Today</option>
                            <option>This weekend</option>
                            <option>Next 7 days</option>
                            <option>Next 30 days</option>
                            <option>Custom range</option>
                        </select>
                    </div>
                    
                    <!-- Distance Filter -->
                    <div class="mb-6">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Distance</label>
                        <select class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                            <option>Any distance</option>
                            <option>Within 10 miles</option>
                            <option>Within 25 miles</option>
                            <option>Within 50 miles</option>
                            <option>Within 100 miles</option>
                        </select>
                    </div>
                    
                    <button class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                        Apply Filters
                    </button>
                </div>
            </div>
            
            <!-- Main Content Area -->
            <div class="flex-1">
                <h1 class="hidden md:block text-2xl font-bold text-gray-900 mb-6">Find Car Events</h1>
                
                <!-- Map Section -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
                    <div class="p-4 border-b border-gray-200">
                        <h2 class="text-lg font-semibold text-gray-900">Events Near You</h2>
                    </div>
                    <div class="map-container" id="map">
                        <!-- This would be replaced with an actual Google Maps implementation -->
                        <div class="h-full w-full bg-gray-200 flex items-center justify-center relative">
                            <p class="text-gray-500">Interactive map would display here with custom pin markers</p>
                            
                            <!-- Sample pins (would be dynamically placed in a real implementation) -->
                            <div class="custom-pin absolute" style="top: 30%; left: 40%;" data-event="1">
                                <div class="absolute -bottom-7 -left-3 transform rotate-45 text-xs font-bold text-blue-600">1</div>
                            </div>
                            <div class="custom-pin absolute" style="top: 50%; left: 60%;" data-event="2">
                                <div class="absolute -bottom-7 -left-3 transform rotate-45 text-xs font-bold text-blue-600">2</div>
                            </div>
                            <div class="custom-pin absolute" style="top: 70%; left: 30%;" data-event="3">
                                <div class="absolute -bottom-7 -left-3 transform rotate-45 text-xs font-bold text-blue-600">3</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Events List -->
                <div class="mb-6 flex justify-between items-center">
                    <h2 class="text-lg font-semibold text-gray-900">Upcoming Events (3)</h2>
                    <div class="flex items-center">
                        <span class="text-sm text-gray-500 mr-2">View:</span>
                        <button class="p-1 text-gray-500 hover:text-blue-500">
                            <i class="fas fa-th-large"></i>
                        </button>
                        <button class="p-1 ml-1 text-blue-500">
                            <i class="fas fa-list"></i>
                        </button>
                    </div>
                </div>
                
                <!-- Event Cards -->
                <div class="space-y-4">
                    <!-- Event 1 -->
                    <div class="event-card bg-white rounded-lg shadow-sm overflow-hidden transition duration-150 ease-in-out">
                        <div class="p-4 md:p-6">
                            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div class="mb-4 md:mb-0">
                                    <h3 class="text-lg font-semibold text-gray-900">Downtown Cars & Coffee</h3>
                                    <div class="flex items-center mt-1 text-sm text-gray-500">
                                        <i class="fas fa-calendar-day mr-2"></i>
                                        <span>Sat, Jun 10 • 8:00 AM - 12:00 PM</span>
                                    </div>
                                    <div class="flex items-center mt-1 text-sm text-gray-500">
                                        <i class="fas fa-map-marker-alt mr-2"></i>
                                        <span>Central Square, Downtown</span>
                                    </div>
                                </div>
                                <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium transition duration-150 ease-in-out whitespace-nowrap">
                                    RSVP
                                </button>
                            </div>
                            <p class="mt-3 text-sm text-gray-600">
                                Join us for our monthly gathering of car enthusiasts. All makes and models welcome. Free coffee for the first 100 attendees!
                            </p>
                            <div class="mt-3 flex flex-wrap gap-2">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Car Meet</span>
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Free</span>
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">200+ Going</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Event 2 -->
                    <div class="event-card bg-white rounded-lg shadow-sm overflow-hidden transition duration-150 ease-in-out">
                        <div class="p-4 md:p-6">
                            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div class="mb-4 md:mb-0">
                                    <h3 class="text-lg font-semibold text-gray-900">Annual Import Showdown</h3>
                                    <div class="flex items-center mt-1 text-sm text-gray-500">
                                        <i class="fas fa-calendar-day mr-2"></i>
                                        <span>Sun, Jun 18 • 10:00 AM - 5:00 PM</span>
                                    </div>
                                    <div class="flex items-center mt-1 text-sm text-gray-500">
                                        <i class="fas fa-map-marker-alt mr-2"></i>
                                        <span>Fairgrounds Speedway</span>
                                    </div>
                                </div>
                                <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium transition duration-150 ease-in-out whitespace-nowrap">
                                    RSVP
                                </button>
                            </div>
                            <p class="mt-3 text-sm text-gray-600">
                                The biggest import car show in the region! Featuring JDM, Euro, and domestic tuners. Competition classes, vendor booths, and dyno challenge.
                            </p>
                            <div class="mt-3 flex flex-wrap gap-2">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Car Show</span>
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">$20 Entry</span>
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">500+ Going</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Event 3 -->
                    <div class="event-card bg-white rounded-lg shadow-sm overflow-hidden transition duration-150 ease-in-out">
                        <div class="p-4 md:p-6">
                            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div class="mb-4 md:mb-0">
                                    <h3 class="text-lg font-semibold text-gray-900">Track Day Experience</h3>
                                    <div class="flex items-center mt-1 text-sm text-gray-500">
                                        <i class="fas fa-calendar-day mr-2"></i>
                                        <span>Sat, Jul 1 • 7:00 AM - 6:00 PM</span>
                                    </div>
                                    <div class="flex items-center mt-1 text-sm text-gray-500">
                                        <i class="fas fa-map-marker-alt mr-2"></i>
                                        <span>Riverside Raceway</span>
                                    </div>
                                </div>
                                <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium transition duration-150 ease-in-out whitespace-nowrap">
                                    RSVP
                                </button>
                            </div>
                            <p class="mt-3 text-sm text-gray-600">
                                Open track day for all skill levels. Helmets required. Tech inspection available on-site. Limited spots available - register early!
                            </p>
                            <div class="mt-3 flex flex-wrap gap-2">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">Track Day</span>
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">$150</span>
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">45 Going</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Mobile filter toggle
        const filterToggle = document.getElementById('filter-toggle');
        const filterSection = document.getElementById('filter-section');
        const filterOverlay = document.getElementById('filter-overlay');
        const closeFilters = document.getElementById('close-filters');
        
        filterToggle.addEventListener('click', () => {
            filterSection.classList.add('active');
            filterOverlay.classList.add('active');
        });
        
        closeFilters.addEventListener('click', () => {
            filterSection.classList.remove('active');
            filterOverlay.classList.remove('active');
        });
        
        filterOverlay.addEventListener('click', () => {
            filterSection.classList.remove('active');
            filterOverlay.classList.remove('active');
        });
        
        // Simulate map pin clicks
        const pins = document.querySelectorAll('.custom-pin');
        pins.forEach(pin => {
            pin.addEventListener('click', () => {
                const eventId = pin.getAttribute('data-event');
                const eventCard = document.querySelectorAll('.event-card')[eventId - 1];
                
                // Scroll to the event card
                eventCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Highlight the card temporarily
                eventCard.classList.add('ring-2', 'ring-blue-500');
                setTimeout(() => {
                    eventCard.classList.remove('ring-2', 'ring-blue-500');
                }, 2000);
            });
        });