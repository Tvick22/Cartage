---
layout: base
search_exclude: true
menu: nav/mainHeader.html
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShotSpot - Share Your Visual Stories</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: #F8FAFC;
            color: #1F2937;
            overflow-x: hidden;
        }
        
        .gradient-bg {
            background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
        }
        
        .card-hover {
            transition: all 0.3s ease;
        }
        
        .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .fade-in {
            animation: fadeIn 0.5s ease-in;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .nav-link {
            position: relative;
        }
        
        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: #F59E0B;
            transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
            width: 100%;
        }
        
        /* Camera animation styles */
        .camera-animation {
            position: relative;
            width: 100%;
            height: 400px;
            margin: 0 auto;
            overflow: hidden;
        }
        
        .camera {
            position: absolute;
            width: 120px;
            height: 100px;
            background: #333;
            border-radius: 15px;
            left: 50%;
            transform: translateX(-50%);
            top: 50px;
            z-index: 10;
        }
        
        .camera-lens {
            position: absolute;
            width: 50px;
            height: 50px;
            background: #1E293B;
            border-radius: 50%;
            border: 5px solid #F59E0B;
            top: 25px;
            left: 35px;
        }
        
        .flash {
            position: absolute;
            width: 15px;
            height: 15px;
            background: #F59E0B;
            border-radius: 50%;
            top: 15px;
            right: 15px;
        }
        
        .photo {
            position: absolute;
            width: 100px;
            height: 80px;
            background: white;
            border-radius: 5px;
            left: 50%;
            transform: translateX(-50%);
            top: 180px;
            opacity: 0;
            z-index: 5;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .computer {
            position: absolute;
            width: 150px;
            height: 120px;
            background: #333;
            border-radius: 10px;
            left: 50%;
            transform: translateX(-50%);
            bottom: 50px;
            z-index: 10;
        }
        
        .screen {
            position: absolute;
            width: 130px;
            height: 80px;
            background: #60A5FA;
            border-radius: 5px;
            top: 10px;
            left: 10px;
            overflow: hidden;
        }
        
        .upload-line {
            position: absolute;
            width: 4px;
            height: 0;
            background: #F59E0B;
            left: 50%;
            transform: translateX(-50%);
            top: 180px;
            z-index: 1;
        }
        
        .keyboard {
            position: absolute;
            width: 120px;
            height: 10px;
            background: #555;
            border-radius: 3px;
            bottom: 10px;
            left: 15px;
        }
        
        /* Animation classes */
        .animate-flash {
            animation: flash 0.3s ease-out;
        }
        
        @keyframes flash {
            0% { opacity: 0; }
            50% { opacity: 1; background: white; }
            100% { opacity: 0; }
        }
        
        .animate-photo-move {
            animation: photoMove 1.5s ease-in-out forwards;
        }
        
        @keyframes photoMove {
            0% { opacity: 0; transform: translateX(-50%) translateY(0); }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { opacity: 0; transform: translateX(-50%) translateY(150px); }
        }
        
        .animate-upload-line {
            animation: uploadLine 1.5s ease-in-out forwards;
        }
        
        @keyframes uploadLine {
            0% { height: 0; }
            100% { height: 150px; }
        }
        
        .animate-screen-content {
            animation: screenContent 0.5s ease-in 1.5s forwards;
        }
        
        @keyframes screenContent {
            0% { background: #60A5FA; }
            100% { background: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb') center/cover; }
        }
        
        /* Floating animation */
        .floating {
            animation: floating 3s ease-in-out infinite;
        }
        
        @keyframes floating {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
        }
        
        /* Pulse animation */
        .pulse {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    </style>
</head>
<body class="min-h-screen">
    <!-- Navigation -->
    <nav class="gradient-bg text-white shadow-lg">
        <div class="container mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center space-x-2">
                    <i class="fas fa-camera-retro text-2xl text-amber-400"></i>
                    <span class="text-xl font-bold">ShotSpot</span>
                </div>
                
                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#" class="nav-link font-medium">Home</a>
                    <a href="explore-cars" class="nav-link font-medium">Explore</a>
                    <a href="#" class="nav-link font-medium">Profile</a>
                    <a href="#" class="nav-link font-medium">Documentation</a>
                    <a href="#" class="nav-link font-medium">Contact</a>
                    <div class="flex items-center space-x-4">
                        <a href="#" class="px-4 py-2 rounded-md font-medium text-white hover:bg-amber-500 hover:bg-opacity-20 transition">Sign In</a>
                        <a href="#" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded-md font-medium text-white transition">Sign Up</a>
                    </div>
                </div>
                
                <!-- Mobile menu button -->
                <div class="md:hidden">
                    <button id="menu-toggle" class="text-white focus:outline-none">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
            
            <!-- Mobile Navigation -->
            <div id="mobile-menu" class="hidden md:hidden mt-4 pb-4">
                <a href="#" class="block py-2 font-medium">Home</a>
                <a href="#" class="block py-2 font-medium">Explore</a>
                <a href="#" class="block py-2 font-medium">Profile</a>
                <a href="#" class="block py-2 font-medium">Documentation</a>
                <a href="#" class="block py-2 font-medium">Contact</a>
                <div class="mt-4 pt-4 border-t border-gray-700">
                    <a href="#" class="block py-2 text-center font-medium">Sign In</a>
                    <a href="#" class="block py-2 bg-amber-500 text-center rounded-md font-medium">Sign Up</a>
                </div>
            </div>
        </div>
    </nav>
    
    <!-- Hero Section -->
    <section class="py-16 px-4">
        <div class="container mx-auto max-w-6xl">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-12 md:mb-0 md:pr-12 fade-in">
                    <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">Capture. Share. Inspire.</h1>
                    <p class="text-lg text-gray-600 mb-8">ShotSpot is where photographers and visual storytellers come together to showcase their work, discover inspiration, and connect with a creative community.</p>
                    <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="#" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md text-center transition pulse">Start Exploring</a>
                        <a href="#" class="px-6 py-3 border border-gray-300 hover:bg-gray-50 font-medium rounded-md text-center transition">Learn More</a>
                    </div>
                </div>
                <div class="md:w-1/2 fade-in" style="animation-delay: 0.2s;">
                    <!-- Camera to computer animation -->
                    <div class="camera-animation">
                        <div class="camera">
                            <div class="camera-lens"></div>
                            <div class="flash" id="flash"></div>
                        </div>
                        <div class="photo" id="photo"></div>
                        <div class="upload-line" id="upload-line"></div>
                        <div class="computer">
                            <div class="screen" id="screen"></div>
                            <div class="keyboard"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Features Section -->
    <section class="py-16 px-4 bg-white">
        <div class="container mx-auto max-w-6xl">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold mb-4">Why Choose ShotSpot?</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">A platform designed by creatives, for creatives.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Feature 1 -->
                <div class="bg-gray-50 p-8 rounded-xl card-hover">
                    <div class="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6 floating">
                        <i class="fas fa-cloud-upload-alt text-amber-500 text-xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Seamless Uploads</h3>
                    <p class="text-gray-600">Upload your photos in high resolution with our lightning-fast servers. No compression, no quality loss.</p>
                </div>
                
                <!-- Feature 2 -->
                <div class="bg-gray-50 p-8 rounded-xl card-hover">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 floating" style="animation-delay: 0.2s;">
                        <i class="fas fa-users text-blue-500 text-xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Engaged Community</h3>
                    <p class="text-gray-600">Connect with fellow photographers, get feedback, and grow your audience in our supportive community.</p>
                </div>
                
                <!-- Feature 3 -->
                <div class="bg-gray-50 p-8 rounded-xl card-hover">
                    <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6 floating" style="animation-delay: 0.4s;">
                        <i class="fas fa-chart-line text-green-500 text-xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Powerful Analytics</h3>
                    <p class="text-gray-600">Track how your photos perform with detailed insights on views, likes, and engagement metrics.</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Trending Photos -->
    <section class="py-16 px-4 bg-gray-50">
        <div class="container mx-auto max-w-6xl">
            <div class="flex justify-between items-center mb-12">
                <h2 class="text-3xl font-bold">Trending This Week</h2>
                <a href="#" class="text-amber-500 font-medium flex items-center">
                    View All <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <!-- Photo 1 -->
                <div class="rounded-xl overflow-hidden shadow-md card-hover">
                    <div class="w-full h-48 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb');"></div>
                    <div class="p-4 bg-white">
                        <div class="flex items-center">
                            <div class="w-8 h-8 rounded-full bg-cover bg-center mr-2" style="background-image: url('https://randomuser.me/api/portraits/women/44.jpg');"></div>
                            <span class="text-sm font-medium">@nature_lover</span>
                        </div>
                        <div class="flex justify-between items-center mt-2">
                            <div class="flex space-x-2">
                                <i class="fas fa-heart text-red-500"></i>
                                <span class="text-xs text-gray-500">1.2k</span>
                            </div>
                            <i class="fas fa-bookmark text-gray-400 hover:text-amber-500 cursor-pointer"></i>
                        </div>
                    </div>
                </div>
                
                <!-- Photo 2 -->
                <div class="rounded-xl overflow-hidden shadow-md card-hover">
                    <div class="w-full h-48 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0');"></div>
                    <div class="p-4 bg-white">
                        <div class="flex items-center">
                            <div class="w-8 h-8 rounded-full bg-cover bg-center mr-2" style="background-image: url('https://randomuser.me/api/portraits/men/32.jpg');"></div>
                            <span class="text-sm font-medium">@urban_explorer</span>
                        </div>
                        <div class="flex justify-between items-center mt-2">
                            <div class="flex space-x-2">
                                <i class="fas fa-heart text-red-500"></i>
                                <span class="text-xs text-gray-500">856</span>
                            </div>
                            <i class="fas fa-bookmark text-gray-400 hover:text-amber-500 cursor-pointer"></i>
                        </div>
                    </div>
                </div>
                
                <!-- Photo 3 -->
                <div class="rounded-xl overflow-hidden shadow-md card-hover">
                    <div class="w-full h-48 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1519125323398-675f0ddb6308');"></div>
                    <div class="p-4 bg-white">
                        <div class="flex items-center">
                            <div class="w-8 h-8 rounded-full bg-cover bg-center mr-2" style="background-image: url('https://randomuser.me/api/portraits/women/68.jpg');"></div>
                            <span class="text-sm font-medium">@wildlife_artist</span>
                        </div>
                        <div class="flex justify-between items-center mt-2">
                            <div class="flex space-x-2">
                                <i class="fas fa-heart text-red-500"></i>
                                <span class="text-xs text-gray-500">1.5k</span>
                            </div>
                            <i class="fas fa-bookmark text-gray-400 hover:text-amber-500 cursor-pointer"></i>
                        </div>
                    </div>
                </div>
                
                <!-- Photo 4 -->
                <div class="rounded-xl overflow-hidden shadow-md card-hover">
                    <div class="w-full h-48 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1517649763962-0c623066f29a');"></div>
                    <div class="p-4 bg-white">
                        <div class="flex items-center">
                            <div class="w-8 h-8 rounded-full bg-cover bg-center mr-2" style="background-image: url('https://randomuser.me/api/portraits/men/75.jpg');"></div>
                            <span class="text-sm font-medium">@adventure_seeker</span>
                        </div>
                        <div class="flex justify-between items-center mt-2">
                            <div class="flex space-x-2">
                                <i class="fas fa-heart text-red-500"></i>
                                <span class="text-xs text-gray-500">2.1k</span>
                            </div>
                            <i class="fas fa-bookmark text-gray-400 hover:text-amber-500 cursor-pointer"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Testimonials -->
    <section class="py-16 px-4 bg-white">
        <div class="container mx-auto max-w-6xl">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold mb-4">What Our Community Says</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Join thousands of photographers who love ShotSpot</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Testimonial 1 -->
                <div class="bg-gray-50 p-8 rounded-xl card-hover">
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 rounded-full bg-cover bg-center mr-4" style="background-image: url('https://randomuser.me/api/portraits/women/63.jpg');"></div>
                        <div>
                            <h4 class="font-semibold">Sarah Johnson</h4>
                            <p class="text-sm text-gray-500">Professional Photographer</p>
                        </div>
                    </div>
                    <p class="text-gray-600 italic">"ShotSpot has completely transformed how I share my work. The community engagement is incredible and the platform is so easy to use."</p>
                    <div class="flex mt-4 text-amber-500">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                
                <!-- Testimonial 2 -->
                <div class="bg-gray-50 p-8 rounded-xl card-hover">
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 rounded-full bg-cover bg-center mr-4" style="background-image: url('https://randomuser.me/api/portraits/men/42.jpg');"></div>
                        <div>
                            <h4 class="font-semibold">Michael Chen</h4>
                            <p class="text-sm text-gray-500">Travel Photographer</p>
                        </div>
                    </div>
                    <p class="text-gray-600 italic">"The image quality preservation is unmatched. My photos look exactly as I intended them to, with no compression artifacts."</p>
                    <div class="flex mt-4 text-amber-500">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                
                <!-- Testimonial 3 -->
                <div class="bg-gray-50 p-8 rounded-xl card-hover">
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 rounded-full bg-cover bg-center mr-4" style="background-image: url('https://randomuser.me/api/portraits/women/28.jpg');"></div>
                        <div>
                            <h4 class="font-semibold">Emma Rodriguez</h4>
                            <p class="text-sm text-gray-500">Amateur Photographer</p>
                        </div>
                    </div>
                    <p class="text-gray-600 italic">"As a beginner, I've learned so much from the ShotSpot community. The feedback has helped me improve my skills dramatically."</p>
                    <div class="flex mt-4 text-amber-500">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 px-4 gradient-bg text-white">
        <div class="container mx-auto max-w-4xl text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Share Your Visual Story?</h2>
            <p class="text-lg mb-8 max-w-2xl mx-auto">Join thousands of photographers and visual artists showcasing their work on ShotSpot.</p>
            <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#" class="px-8 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition">Create Account</a>
                <a href="#" class="px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:bg-opacity-10 transition">Learn More</a>
            </div>
        </div>
    </section>
    
    <!-- Footer -->
    <footer class="bg-white py-12 px-4">
        <div class="container mx-auto max-w-6xl">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- Column 1 -->
                <div>
                    <div class="flex items-center space-x-2 mb-4">
                        <i class="fas fa-camera-retro text-2xl text-amber-500"></i>
                        <span class="text-xl font-bold">ShotSpot</span>
                    </div>
                    <p class="text-gray-600 mb-4">The premier platform for photographers to share, discover, and connect.</p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-500 hover:text-amber-500"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="text-gray-500 hover:text-amber-500"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="text-gray-500 hover:text-amber-500"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="text-gray-500 hover:text-amber-500"><i class="fab fa-pinterest"></i></a>
                    </div>
                </div>
                
                <!-- Column 2 -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">Navigation</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-600 hover:text-amber-500">Home</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-amber-500">Explore</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-amber-500">Profile</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-amber-500">Sign In</a></li>
                    </ul>
                </div>
                
                <!-- Column 3 -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">Resources</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-600 hover:text-amber-500">Documentation</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-amber-500">Tutorials</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-amber-500">Blog</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-amber-500">Community</a></li>
                    </ul>
                </div>
                
                <!-- Column 4 -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">Support</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-600 hover:text-amber-500">Contact Us</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-amber-500">Help Center</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-amber-500">Privacy Policy</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-amber-500">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
                <p>&copy; 2023 ShotSpot. All rights reserved.</p>
            </div>
        </div>
    </footer>
    
    <script>
        // Mobile menu toggle
        document.getElementById('menu-toggle').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
        
        // Simple animation observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
        
        // Camera to computer animation sequence
        function startCameraAnimation() {
            const flash = document.getElementById('flash');
            const photo = document.getElementById('photo');
            const uploadLine = document.getElementById('upload-line');
            const screen = document.getElementById('screen');
            
            // Flash animation
            setTimeout(() => {
                flash.classList.add('animate-flash');
            }, 500);
            
            // Photo appears and moves down
            setTimeout(() => {
                photo.classList.add('animate-photo-move');
            }, 800);
            
            // Upload line grows
            setTimeout(() => {
                uploadLine.classList.add('animate-upload-line');
            }, 800);
            
            // Screen shows the uploaded photo
            setTimeout(() => {
                screen.classList.add('animate-screen-content');
            }, 2300);
            
            // Reset animation after it completes
            setTimeout(() => {
                flash.classList.remove('animate-flash');
                photo.classList.remove('animate-photo-move');
                uploadLine.classList.remove('animate-upload-line');
                screen.classList.remove('animate-screen-content');
                
                // Restart animation
                setTimeout(startCameraAnimation, 2000);
            }, 4000);
        }
        
        // Start the animation when the page loads
        window.addEventListener('load', () => {
            startCameraAnimation();
        });
    </script>
</body>
</html>