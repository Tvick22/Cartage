---
layout: base
title: Explore
search_exclude: true
menu: nav/mainHeader.html
permalink: /explore-cars/
---


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShotSpot | Explore Photos</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
        }
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(251, 191, 36, 0.2);
        }
        .floating-btn {
            transition: all 0.3s ease;
        }
        .floating-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.5s ease forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .modal {
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .modal-hidden {
            opacity: 0;
            transform: translateY(20px);
            pointer-events: none;
        }
        .modal-visible {
            opacity: 1;
            transform: translateY(0);
        }
        .tag-option {
            transition: all 0.2s ease;
        }
        .tag-option.selected {
            background-color: #f59e0b;
            color: #111827;
        }
        .carousel-container {
            position: relative;
            overflow: hidden;
        }
        .carousel-slide {
            display: flex;
            transition: transform 0.5s ease;
        }
        .carousel-nav {
            position: absolute;
            top: 50%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            transform: translateY(-50%);
            z-index: 10;
        }
        .carousel-nav button {
            background-color: rgba(31, 41, 55, 0.7);
            color: white;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            margin: 0 10px;
        }
        .edit-tool {
            padding: 8px;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .edit-tool:hover {
            background-color: #374151;
        }
        .edit-tool.active {
            background-color: #f59e0b;
            color: #111827;
        }
        .edit-slider {
            width: 100%;
            margin-top: 8px;
        }
    </style>
</head>
<body class="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white">


    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
        <div class="flex justify-between items-center mb-8">
            <h1 class="text-3xl font-bold">Explore Photos</h1>
            <div class="flex space-x-4">
                <button id="filterBtn" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full transition">
                    <i class="fas fa-sliders-h mr-2"></i> Filters
                </button>
            </div>
        </div>

        <!-- Filter Modal -->
        <div id="filterModal" class="modal modal-hidden fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
            <div class="bg-gray-800 rounded-xl p-6 w-full max-w-md">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold">Filter Posts</h3>
                    <button id="closeFilterModal" class="text-gray-400 hover:text-white">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="space-y-4">
                    <div>
                        <label class="block text-gray-300 mb-2">Category</label>
                        <div class="flex flex-wrap gap-2">
                            <button class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="landscape">Landscape</button>
                            <button class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="portrait">Portrait</button>
                            <button class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="street">Street</button>
                            <button class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="nature">Nature</button>
                            <button class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="urban">Urban</button>
                            <button class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="wildlife">Wildlife</button>
                            <button class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="macro">Macro</button>
                            <button class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="aerial">Aerial</button>
                        </div>
                    </div>
                    <div>
                        <label class="block text-gray-300 mb-2">Style</label>
                        <div class="flex flex-wrap gap-2">
                            <button class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="minimal">Minimal</button>
                            <button class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="bw">Black & White</button>
                            <button class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="vintage">Vintage</button>
                            <button class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="moody">Moody</button>
                            <button class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="colorful">Colorful</button>
                            <button class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="abstract">Abstract</button>
                            <button class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="film">Film</button>
                            <button class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="longexposure">Long Exposure</button>
                        </div>
                    </div>
                    <div>
                        <label class="block text-gray-300 mb-2">Sort By</label>
                        <select class="w-full bg-gray-700 rounded px-3 py-2">
                            <option>Most Recent</option>
                            <option>Most Popular</option>
                            <option>Highest Rated</option>
                        </select>
                    </div>
                </div>
                <div class="mt-6 flex justify-end space-x-3">
                    <button id="resetFilters" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">
                        Reset
                    </button>
                    <button id="applyFilters" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded">
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>

        <!-- Upload Modal -->
        <div id="uploadModal" class="modal modal-hidden fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
            <div class="bg-gray-800 rounded-xl p-6 w-full max-w-2xl">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold">Upload Your Car</h3>
                    <button id="closeUploadModal" class="text-gray-400 hover:text-white">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <form id="uploadForm">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-4">
                            <div>
                                <label class="block text-gray-300 mb-2">Photo Title</label>
                                <input type="text" id="photoTitle" class="w-full bg-gray-700 rounded px-3 py-2"
                                       placeholder="e.g. Sunset at the Beach">
                            </div>
                            <div>
                                <label class="block text-gray-300 mb-2">Photos (Max 5)</label>
                                <div class="border-2 border-dashed border-gray-600 rounded-lg p-4">
                                    <div id="imagePreviews" class="grid grid-cols-3 gap-2 mb-3">
                                        <!-- Image previews will be added here -->
                                    </div>
                                    <div id="uploadControls" class="text-center">
                                        <input type="file" id="carImages" accept="image/*" class="hidden">
                                        <label for="carImages" class="cursor-pointer inline-block">
                                            <i class="fas fa-cloud-upload-alt text-3xl text-amber-400 mb-2"></i>
                                            <p class="text-gray-400">Click to upload first image</p>
                                            <p class="text-sm text-gray-500">PNG, JPG, JPEG (max. 5MB)</p>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label class="block text-gray-300 mb-2">Description</label>
                                <textarea id="photoDescription" class="w-full bg-gray-700 rounded px-3 py-2" rows="3"
                                          placeholder="Tell us about your photo..."></textarea>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-gray-300 mb-2">Category</label>
                                <div class="flex flex-wrap gap-2">
                                    <button type="button" class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="landscape">Landscape</button>
                                    <button type="button" class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="portrait">Portrait</button>
                                    <button type="button" class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="street">Street</button>
                                    <button type="button" class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="nature">Nature</button>
                                    <button type="button" class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="urban">Urban</button>
                                    <button type="button" class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="wildlife">Wildlife</button>
                                    <button type="button" class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="macro">Macro</button>
                                    <button type="button" class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="aerial">Aerial</button>
                                </div>
                            </div>
                            <div>
                                <label class="block text-gray-300 mb-2">Style</label>
                                <div class="flex flex-wrap gap-2">
                                    <button type="button" class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="minimal">Minimal</button>
                                    <button type="button" class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="blackandwhite">Black & White</button>
                                    <button type="button" class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="vintage">Vintage</button>
                                    <button type="button" class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="moody">Moody</button>
                                    <button type="button" class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="colorful">Colorful</button>
                                    <button type="button" class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="abstract">Abstract</button>
                                    <button type="button" class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="film">Film</button>
                                    <button type="button" class="tag-option px-3 py-1 bg-gray-700 rounded-full" data-tag="longexposure">Long Exposure</button>
                                </div>
                            </div>
                            <div>
                                <label class="block text-gray-300 mb-2">Custom Tags</label>
                                <div class="flex items-center space-x-2">
                                    <input type="text" id="customTag" class="flex-1 bg-gray-700 rounded px-3 py-2"
                                           placeholder="Add your own tag">
                                    <button type="button" onclick="addCustomTag()"
                                            class="px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded">
                                        Add
                                    </button>
                                </div>
                                <div id="customTagsContainer" class="flex flex-wrap gap-2 mt-2">
                                    <!-- Custom tags will appear here -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 flex justify-end space-x-3">
                        <button type="button" id="cancelUpload" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">
                            Cancel
                        </button>
                        <button type="submit" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded">
                            Post Photo
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Image Edit Modal -->
        <div id="imageEditModal" class="modal modal-hidden fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50">
            <div class="bg-gray-800 rounded-xl p-6 w-full max-w-2xl">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold">Edit Image</h3>
                    <button id="closeImageEdit" class="text-gray-400 hover:text-white">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="mb-4">
                    <img id="editingImage" class="w-full h-96 object-contain rounded-lg" src="" alt="Editing image">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="edit-tool" data-tool="brightness">
                        <i class="fas fa-sun mr-2"></i> Brightness
                        <input type="range" min="-100" max="100" value="0" class="edit-slider" data-property="brightness">
                    </div>
                    <div class="edit-tool" data-tool="contrast">
                        <i class="fas fa-adjust mr-2"></i> Contrast
                        <input type="range" min="-100" max="100" value="0" class="edit-slider" data-property="contrast">
                    </div>
                    <div class="edit-tool" data-tool="saturation">
                        <i class="fas fa-palette mr-2"></i> Saturation
                        <input type="range" min="-100" max="100" value="0" class="edit-slider" data-property="saturation">
                    </div>
                    <div class="edit-tool" data-tool="temperature">
                        <i class="fas fa-temperature-high mr-2"></i> Temperature
                        <input type="range" min="-100" max="100" value="0" class="edit-slider" data-property="temperature">
                    </div>
                </div>
                <div class="mt-6 flex justify-end space-x-3">
                    <button id="cancelImageEdit" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">
                        Cancel
                    </button>
                    <button id="saveImageEdit" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>

        <!-- Car Detail Modal -->
        <div id="carDetailModal" class="modal modal-hidden fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div class="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div class="flex justify-between items-center p-4 border-b border-gray-700 sticky top-0 bg-gray-800 z-10">
                    <h3 id="detailCarModel" class="text-xl font-bold"></h3>
                    <button id="closeCarDetailModal" class="text-gray-400 hover:text-white">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="p-4">
                    <div class="carousel-container mb-4 rounded-lg overflow-hidden">
                        <div class="carousel-slide" id="detailCarousel">
                            <!-- Carousel slides will be added here -->
                        </div>
                        <div class="carousel-nav">
                            <button id="carouselPrev"><i class="fas fa-chevron-left"></i></button>
                            <button id="carouselNext"><i class="fas fa-chevron-right"></i></button>
                        </div>
                    </div>
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <p id="detailUsername" class="text-gray-400 text-sm"></p>
                        </div>
                        <button class="bookmark-btn text-gray-400 hover:text-amber-500 transition">
                            <i class="far fa-bookmark text-xl"></i>
                        </button>
                    </div>
                    <p id="detailDescription" class="mb-4 text-gray-300"></p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <!-- Tags will be added here -->
                    </div>
                    <div class="flex items-center space-x-4">
                        <button class="like-btn text-gray-400 hover:text-amber-500 transition">
                            <i class="far fa-heart"></i>
                            <span class="like-count ml-1">0</span>
                        </button>
                        <button class="text-gray-400 hover:text-amber-500 transition">
                            <i class="far fa-connect"></i>
                            <span class="ml-1">Connect</span>
                        </button>
                        <button class="text-gray-400 hover:text-amber-500 transition">
                            <i class="fas fa-share"></i>
                            <span class="ml-1">Share</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Masonry Grid -->
        <div id="postsContainer" class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <!-- Posts will be dynamically added here -->
        </div>

        <!-- Floating Add Button -->
        <button id="addPostBtn" class="fixed bottom-8 right-8 floating-btn w-16 h-16 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
            <i class="fas fa-plus text-2xl"></i>
        </button>
    </main>



    <script type="module">
    import { getPosts } from "{{site.baseurl}}/assets/js/api/imagePosts.js"

    const posts = await getPosts()

    console.log(posts)
        // Sample car data (only 3 demo posts)
        const samplePhotos = posts

        // DOM Elements
        const postsContainer = document.getElementById('postsContainer');
        const filterBtn = document.getElementById('filterBtn');
        const filterModal = document.getElementById('filterModal');
        const closeFilterModal = document.getElementById('closeFilterModal');
        const resetFilters = document.getElementById('resetFilters');
        const applyFilters = document.getElementById('applyFilters');
        const addPostBtn = document.getElementById('addPostBtn');
        const uploadModal = document.getElementById('uploadModal');
        const closeUploadModal = document.getElementById('closeUploadModal');
        const cancelUpload = document.getElementById('cancelUpload');
        const uploadForm = document.getElementById('uploadForm');
        const carImages = document.getElementById('carImages');
        const imagePreviews = document.getElementById('imagePreviews');
        const carDetailModal = document.getElementById('carDetailModal');
        const closeCarDetailModal = document.getElementById('closeCarDetailModal');
        const detailCarModel = document.getElementById('detailCarModel');
        const detailUsername = document.getElementById('detailUsername');
        const detailDescription = document.getElementById('detailDescription');
        const detailCarousel = document.getElementById('detailCarousel');
        const carouselPrev = document.getElementById('carouselPrev');
        const carouselNext = document.getElementById('carouselNext');
        const editToolsSection = document.getElementById('editToolsSection');
        const imageEditModal = document.getElementById('imageEditModal');
        const closeImageEdit = document.getElementById('closeImageEdit');
        const editingImage = document.getElementById('editingImage');

        // State
        let photos = [...samplePhotos];
        let nextId = 4;
        let selectedCategories = [];
        let selectedStyles = [];
        let currentCarouselIndex = 0;
        let currentCarouselImages = [];
        let currentEditingImages = [];
        let currentImageFilters = {};

        // Initialize the app
        function init() {
            renderPosts();
            setupEventListeners();
        }

        // Render all posts
        function renderPosts() {
            postsContainer.innerHTML = '';

            // Filter cars based on selected tags and brands
            let filteredPhotos = photos;

            if (selectedCategories.length > 0 || selectedStyles.length > 0) {
                filteredPhotos = photos.filter(photo => {
                    const photoTags = photo.tags.map(tag => tag.toLowerCase().replace('#', ''));
                    const hasCategory = selectedCategories.length === 0 || selectedCategories.some(tag => photoTags.includes(tag));
                    const hasStyle = selectedStyles.length === 0 || selectedStyles.some(brand => photoTags.includes(brand));
                    return hasCategory && hasStyle;
                });
            }

            filteredPhotos.forEach((photo, index) => {
                const delayClass = `delay-${(index % 3) * 100}`;
                const postElement = createPostElement(photo, delayClass);
                postsContainer.appendChild(postElement);
            });
        }

        // Create a post element
        function createPostElement(photo, delayClass) {
            const post = document.createElement('div');
            post.className = `card bg-gray-800 rounded-xl overflow-hidden animate-fade-in ${delayClass}`;
            post.dataset.id = photo.id;

            const likeIconClass = photo.isLiked ? 'fas fa-heart text-amber-400' : 'far fa-heart';
            const bookmarkIconClass = photo.isBookmarked ? 'fas fa-bookmark text-amber-400' : 'far fa-bookmark';

            post.innerHTML = `
                <img src="${photo.images[0]}" alt="${photo.title}" class="w-full h-64 object-cover">
                <div class="p-4">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="font-bold text-lg">${photo.title}</h3>
                            <p class="text-gray-400 text-sm">${photo.username}</p>
                        </div>
                        <button class="bookmark-btn ${photo.isBookmarked ? 'text-amber-400' : 'text-gray-400'} hover:text-amber-500 transition">
                            <i class="${bookmarkIconClass} text-xl"></i>
                        </button>
                    </div>
                    <p class="mt-2 text-gray-300 line-clamp-2">${photo.description}</p>
                    <div class="mt-4 flex justify-between items-center">
                        <div class="flex space-x-2">
                            ${photo.tags.slice(0, 2).map(tag => `<span class="px-2 py-1 bg-gray-700 rounded-full text-xs">${tag}</span>`).join('')}
                            ${photo.tags.length > 2 ? `<span class="px-2 py-1 bg-gray-700 rounded-full text-xs">+${photo.tags.length - 2}</span>` : ''}
                        </div>
                        <div class="flex items-center space-x-2">
                            <button class="like-btn ${photo.isLiked ? 'text-amber-400' : 'text-gray-400'} hover:text-amber-500 transition">
                                <i class="${likeIconClass}"></i>
                            </button>
                            <span class="like-count">${photo.likes}</span>
                        </div>
                    </div>
                </div>
            `;

            return post;
        }

        // Setup event listeners
        function setupEventListeners() {
            // Filter modal
            filterBtn.addEventListener('click', () => toggleModal(filterModal));
            closeFilterModal.addEventListener('click', () => toggleModal(filterModal));
            resetFilters.addEventListener('click', resetAllFilters);
            applyFilters.addEventListener('click', applyAllFilters);

            // Tag selection in filter modal
            document.querySelectorAll('#filterModal .tag-option').forEach(btn => {
                btn.addEventListener('click', function() {
                    this.classList.toggle('selected');
                });
            });

            // Upload modal
            addPostBtn.addEventListener('click', () => toggleModal(uploadModal));
            closeUploadModal.addEventListener('click', () => {
                resetUploadForm();
                toggleModal(uploadModal);
            });
            cancelUpload.addEventListener('click', () => {
                resetUploadForm();
                toggleModal(uploadModal);
            });

            // Image upload preview
            carImages.addEventListener('change', handleImageUpload);

            // Tag selection in upload modal
            document.querySelectorAll('#uploadForm .tag-option').forEach(btn => {
                btn.addEventListener('click', function() {
                    this.classList.toggle('selected');
                });
            });

            // Form submission
            uploadForm.addEventListener('submit', handleFormSubmit);

            // Car detail modal
            closeCarDetailModal.addEventListener('click', () => toggleModal(carDetailModal));

            // Carousel navigation
            carouselPrev.addEventListener('click', () => navigateCarousel(-1));
            carouselNext.addEventListener('click', () => navigateCarousel(1));

            // Edit tools
            document.querySelectorAll('.edit-tool').forEach(tool => {
                tool.addEventListener('click', function() {
                    document.querySelectorAll('.edit-tool').forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            // Edit sliders
            document.querySelectorAll('.edit-slider').forEach(slider => {
                slider.addEventListener('input', function() {
                    const property = this.dataset.property;
                    const value = this.value;
                    applyImageFilter(property, value);
                });
            });

            // Delegate events for dynamically created elements
            postsContainer.addEventListener('click', (e) => {
                const card = e.target.closest('.card');
                if (!card) return;

                const photoId = parseInt(card.dataset.id);
                const photo = photos.find(c => c.id === photoId);

                if (e.target.closest('.like-btn')) {
                    toggleLike(photo);
                } else if (e.target.closest('.bookmark-btn')) {
                    toggleBookmark(photo);
                } else {
                    // Clicked on the card itself - show detail view
                    showCarDetail(photo);
                }
            });

            // Close image edit modal
            closeImageEdit.addEventListener('click', () => toggleModal(imageEditModal));
        }

        // Toggle modal visibility
        function toggleModal(modal) {
            modal.classList.toggle('modal-hidden');
            modal.classList.toggle('modal-visible');

            // Reset carousel when closing detail modal
            if (modal === carDetailModal && modal.classList.contains('modal-hidden')) {
                currentCarouselIndex = 0;
            }
        }

        // Reset all filters
        function resetAllFilters() {
            document.querySelectorAll('#filterModal .tag-option').forEach(btn => {
                btn.classList.remove('selected');
            });
            selectedCategories = [];
            selectedStyles = [];
            renderPosts();
            toggleModal(filterModal);
        }

        // Apply all filters
        function applyAllFilters() {
            selectedCategories = [];
            selectedStyles = [];

            // Get selected tags
            document.querySelectorAll('#filterModal .tag-option.selected').forEach(btn => {
                const tag = btn.dataset.tag;
                if (['landscape', 'portrait', 'street', 'nature', 'urban', 'wildlife', 'macro', 'aerial'].includes(tag)) {
                    selectedCategories.push(tag);
                } else {
                    selectedStyles.push(tag);
                }
            });

            renderPosts();
            toggleModal(filterModal);
        }

        // Handle image upload preview
        function handleImageUpload(e) {
            const files = e.target.files;
            if (files.length > 0) {
                const file = files[0];

                // Check if we've reached the maximum number of images
                if (currentEditingImages.length >= 5) {
                    alert('Maximum 5 images allowed');
                    return;
                }

                const reader = new FileReader();

                reader.onload = function(event) {
                    // Add the new image to the array
                    const newImageIndex = currentEditingImages.length;
                    currentEditingImages.push({
                        original: event.target.result,
                        current: event.target.result,
                        filters: {
                            brightness: 0,
                            contrast: 0,
                            saturation: 0,
                            temperature: 0
                        }
                    });

                    // Create preview element
                    const imgContainer = document.createElement('div');
                    imgContainer.className = 'relative group';
                    imgContainer.innerHTML = updateImagePreview(currentEditingImages[newImageIndex], newImageIndex);

                    imagePreviews.appendChild(imgContainer);
                    updateUploadControls();
                };

                reader.readAsDataURL(file);
            }

            // Reset the input so the same file can be selected again
            e.target.value = '';
        }

        // Add new function to update upload controls
        function updateUploadControls() {
            const uploadControls = document.getElementById('uploadControls');

            if (currentEditingImages.length < 5) {
                uploadControls.innerHTML = `
                    <input type="file" id="carImages" accept="image/*" class="hidden">
                    <label for="carImages" class="cursor-pointer inline-block">
                        <i class="fas fa-plus-circle text-3xl text-amber-400 mb-2"></i>
                        <p class="text-gray-400">Add ${currentEditingImages.length === 0 ? 'first' : 'another'} image</p>
                        <p class="text-sm text-gray-500">${5 - currentEditingImages.length} spots remaining</p>
                    </label>
                `;

                // Reattach event listener to new input
                document.getElementById('carImages').addEventListener('change', handleImageUpload);
            } else {
                uploadControls.innerHTML = '<p class="text-gray-400">Maximum images reached</p>';
            }
        }

        // Update removeImage function
        function removeImage(index) {
            currentEditingImages.splice(index, 1);

            // Rebuild previews to update indices
            imagePreviews.innerHTML = '';
            currentEditingImages.forEach((img, idx) => {
                const imgContainer = document.createElement('div');
                imgContainer.className = 'relative group';
                imgContainer.innerHTML = updateImagePreview(currentEditingImages[idx], idx);
                imagePreviews.appendChild(imgContainer);
            });

            updateUploadControls();
        }

        // Update resetUploadForm function
        function resetUploadForm() {
            uploadForm.reset();
            imagePreviews.innerHTML = '';
            currentEditingImages = [];
            updateUploadControls();

            // Reset selected tags
            document.querySelectorAll('#uploadForm .tag-option').forEach(btn => {
                btn.classList.remove('selected');
            });
        }

        // Toggle like status
        function toggleLike(photo) {
            photo.isLiked = !photo.isLiked;
            photo.likes += photo.isLiked ? 1 : -1;
            renderPosts();

            // Update detail modal if open
            if (!carDetailModal.classList.contains('modal-hidden')) {
                const likeBtn = carDetailModal.querySelector('.like-btn i');
                const likeCount = carDetailModal.querySelector('.like-count');

                likeBtn.className = photo.isLiked ? 'fas fa-heart text-amber-400' : 'far fa-heart';
                likeCount.textContent = photo.likes;
            }
        }

        // Toggle bookmark status
        function toggleBookmark(photo) {
            photo.isBookmarked = !photo.isBookmarked;
            renderPosts();

            // Update detail modal if open
            if (!carDetailModal.classList.contains('modal-hidden')) {
                const bookmarkBtn = carDetailModal.querySelector('.bookmark-btn i');
                bookmarkBtn.className = photo.isBookmarked ? 'fas fa-bookmark text-amber-400' : 'far fa-bookmark';
            }
        }

        // Show car detail view
        function showCarDetail(photo) {
            detailCarModel.textContent = photo.title;
            detailUsername.textContent = photo.username;
            detailDescription.textContent = photo.description;

            // Clear previous tags
            const tagsContainer = carDetailModal.querySelector('.flex.flex-wrap.gap-2.mb-4');
            tagsContainer.innerHTML = '';

            // Add tags
            photo.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.className = 'px-2 py-1 bg-gray-700 rounded-full text-xs';
                tagElement.textContent = tag;
                tagsContainer.appendChild(tagElement);
            });

            // Set up carousel
            detailCarousel.innerHTML = '';
            currentCarouselImages = photo.images;
            currentCarouselIndex = 0;

            photo.images.forEach((img, index) => {
                const slide = document.createElement('div');
                slide.className = 'min-w-full';
                slide.innerHTML = `<img src="${img}" alt="${photo.title}" class="w-full h-96 object-contain">`;
                detailCarousel.appendChild(slide);
            });

            // Update like and bookmark buttons
            const likeBtn = carDetailModal.querySelector('.like-btn i');
            const likeCount = carDetailModal.querySelector('.like-count');
            const bookmarkBtn = carDetailModal.querySelector('.bookmark-btn i');

            likeBtn.className = photo.isLiked ? 'fas fa-heart text-amber-400' : 'far fa-heart';
            likeCount.textContent = photo.likes;
            bookmarkBtn.className = photo.isBookmarked ? 'fas fa-bookmark text-amber-400' : 'far fa-bookmark';

            // Show modal
            toggleModal(carDetailModal);
        }

        // Navigate carousel
        function navigateCarousel(direction) {
            currentCarouselIndex += direction;

            if (currentCarouselIndex < 0) {
                currentCarouselIndex = currentCarouselImages.length - 1;
            } else if (currentCarouselIndex >= currentCarouselImages.length) {
                currentCarouselIndex = 0;
            }

            detailCarousel.style.transform = `translateX(-${currentCarouselIndex * 100}%)`;
        }

        // Update the editImage function
        function editImage(index) {
            const imageData = currentEditingImages[index];
            const editModal = document.getElementById('imageEditModal');

            // Set up the edit modal without closing upload modal
            editModal.innerHTML = `
                <div class="bg-gray-800 rounded-xl p-6 w-full max-w-4xl">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-xl font-bold">Edit Image</h3>
                        <button type="button" onclick="event.preventDefault(); closeImageEditModal()" class="text-gray-400 hover:text-white">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="mb-6">
                        <img id="editingImage" src="${imageData.current}"
                             class="w-full h-[60vh] object-contain rounded-lg"
                             alt="Editing image">
                    </div>
                    <div class="grid grid-cols-2 gap-4 mb-4">
                        <div class="edit-tool bg-gray-700 p-3 rounded-lg">
                            <div class="flex items-center mb-2">
                                <i class="fas fa-sun mr-2"></i>
                                <span>Brightness</span>
                            </div>
                            <input type="range" min="-100" max="100" value="${imageData.filters?.brightness || 0}"
                                   class="w-full" data-filter="brightness">
                        </div>
                        <div class="edit-tool bg-gray-700 p-3 rounded-lg">
                            <div class="flex items-center mb-2">
                                <i class="fas fa-adjust mr-2"></i>
                                <span>Contrast</span>
                            </div>
                            <input type="range" min="-100" max="100" value="${imageData.filters?.contrast || 0}"
                                   class="w-full" data-filter="contrast">
                        </div>
                        <div class="edit-tool bg-gray-700 p-3 rounded-lg">
                            <div class="flex items-center mb-2">
                                <i class="fas fa-palette mr-2"></i>
                                <span>Saturation</span>
                            </div>
                            <input type="range" min="-100" max="100" value="${imageData.filters?.saturation || 0}"
                                   class="w-full" data-filter="saturation">
                        </div>
                        <div class="edit-tool bg-gray-700 p-3 rounded-lg">
                            <div class="flex items-center mb-2">
                                <i class="fas fa-temperature-high mr-2"></i>
                                <span>Temperature</span>
                            </div>
                            <input type="range" min="-100" max="100" value="${imageData.filters?.temperature || 0}"
                                   class="w-full" data-filter="temperature">
                        </div>
                    </div>
                    <div class="flex justify-end space-x-3">
                        <button type="button" onclick="event.preventDefault(); resetImageFilters(${index})"
                                class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">
                            Reset
                        </button>
                        <button type="button" onclick="event.preventDefault(); saveImageEdit(${index})"
                                class="px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded">
                            Save Changes
                        </button>
                    </div>
                </div>
            `;

            // Show the edit modal without hiding upload modal
            editModal.classList.remove('modal-hidden');
            editModal.classList.add('modal-visible');

            // Add event listeners to range inputs
            editModal.querySelectorAll('input[type="range"]').forEach(input => {
                input.addEventListener('input', (event) => {
                    event.preventDefault();
                    applyImageFilters(index);
                });
            });
        }

        // Function to apply filters to the image
        function applyImageFilters(index) {
            const editingImage = document.getElementById('editingImage');
            const filters = {};

            document.querySelectorAll('#imageEditModal input[type="range"]').forEach(input => {
                const filter = input.dataset.filter;
                const value = input.value;
                filters[filter] = value;
            });

            // Apply CSS filters
            const filterString = `
                brightness(${100 + parseInt(filters.brightness)}%)
                contrast(${100 + parseInt(filters.contrast)}%)
                saturate(${100 + parseInt(filters.saturation)}%)
                hue-rotate(${filters.temperature}deg)
            `;

            editingImage.style.filter = filterString;
            currentEditingImages[index].filters = filters;
        }

        // Function to save the edited image
        function saveImageEdit(index) {
            const editingImage = document.getElementById('editingImage');

            // Create a canvas to save the filtered image
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = editingImage.naturalWidth;
            canvas.height = editingImage.naturalHeight;

            // Draw the filtered image to canvas
            ctx.filter = editingImage.style.filter;
            ctx.drawImage(editingImage, 0, 0);

            // Save the filtered image
            currentEditingImages[index].current = canvas.toDataURL('image/jpeg');

            // Update the preview
            const previewImage = document.querySelector(`#imagePreviews img[data-index="${index}"]`);
            if (previewImage) {
                previewImage.src = currentEditingImages[index].current;
            }

            closeImageEditModal();
        }

        // Function to reset image filters
        function resetImageFilters(index) {
            const editingImage = document.getElementById('editingImage');
            editingImage.style.filter = 'none';

            // Reset all range inputs
            document.querySelectorAll('#imageEditModal input[type="range"]').forEach(input => {
                input.value = 0;
            });

            currentEditingImages[index].filters = {
                brightness: 0,
                contrast: 0,
                saturation: 0,
                temperature: 0
            };
        }

        // Function to close the image edit modal
        function closeImageEditModal() {
            const editModal = document.getElementById('imageEditModal');
            editModal.classList.remove('modal-visible');
            editModal.classList.add('modal-hidden');
        }

        // Update the handleImageUpload preview HTML
        function updateImagePreview(imageData, index) {
            return `
                <div class="relative group">
                    <img src="${imageData.current}"
                         class="w-full h-24 object-cover rounded"
                         data-index="${index}">
                    <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                        <button type="button" class="text-white hover:text-amber-400" onclick="event.preventDefault(); event.stopPropagation(); editImage(${index})">
                            <i class="fas fa-search-plus"></i>
                        </button>
                        <button type="button" class="text-white hover:text-red-400" onclick="event.preventDefault(); event.stopPropagation(); removeImage(${index})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        }
        // Initialize the app
        init();

        // Add handleFormSubmit function
        function handleFormSubmit(e) {
            e.preventDefault();

            const title = document.getElementById('photoTitle').value;
            const description = document.getElementById('photoDescription').value;

            // Validate form
            if (!title || !description || currentEditingImages.length === 0) {
                alert('Please fill in all fields and upload at least one image');
                return;
            }

            // Get all selected tags
            const selectedTags = Array.from(document.querySelectorAll('#uploadForm .tag-option.selected'))
                .map(btn => `#${btn.dataset.tag}`);

            // Create new photo object
            const newPhoto = {
                id: photos.length + 1,
                images: currentEditingImages.map(img => img.current),
                title: title,
                username: "@user",
                description: description,
                tags: selectedTags,
                likes: 0,
                isLiked: false,
                isBookmarked: false
            };

            // Add to beginning of photos array
            photos.unshift(newPhoto);

            // Reset form and close modal
            resetUploadForm();
            toggleModal(uploadModal);

            // Re-render posts to show new photo
            renderPosts();
        }
    </script>
</body>
</html>
