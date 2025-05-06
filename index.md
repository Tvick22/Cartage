---
layout: base
search_exclude: true
menu: nav/mainHeader.html
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cartage - Loading</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&family=Kanit:wght@300;400;700&display=swap');
        
        :root {
            --primary: #ff3c00;
            --secondary: #1a1a1a;
            --accent: #ff9500;
        }
        
        body {
            font-family: 'Kanit', sans-serif;
            background-color: #000;
            overflow: hidden;
            margin: 0;
            padding: 0;
        }
        
        .racing-font {
            font-family: 'Racing Sans One', cursive;
        }
        
        .loader-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            background-color: rgba(0, 0, 0, 0.9);
        }
        
        .camera-flash {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: white;
            opacity: 0;
            z-index: 1;
        }
        
        .car-container {
            position: relative;
            width: 300px;
            height: 150px;
            margin-bottom: 50px;
            perspective: 1000px;
        }
        
        .car {
            position: absolute;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            animation: driveIn 2s forwards, shake 0.3s 2s 3;
        }
        
        .car-body {
            position: absolute;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path d="M50,50 L250,50 L270,100 L230,100 L220,80 L80,80 L70,100 L30,100 Z" fill="%231a1a1a"/><rect x="60" y="60" width="40" height="20" fill="%23ff3c00"/><rect x="200" y="60" width="40" height="20" fill="%23ff3c00"/><circle cx="90" cy="120" r="20" fill="%23333"/><circle cx="210" cy="120" r="20" fill="%23333"/></svg>') no-repeat center center;
            background-size: contain;
            transform: translateZ(20px);
        }
        
        .smoke {
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.7);
            filter: blur(5px);
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            opacity: 0;
        }
        
        .exhaust {
            position: absolute;
            width: 10px;
            height: 30px;
            background: linear-gradient(to top, var(--primary), var(--accent));
            bottom: 20px;
            left: 70px;
            border-radius: 5px;
            transform-origin: bottom;
            transform: scaleY(0);
            box-shadow: 0 0 10px var(--primary);
        }
        
        .exhaust:nth-child(2) {
            left: 220px;
        }
        
        .title {
            font-size: 4rem;
            color: white;
            text-transform: uppercase;
            margin-bottom: 20px;
            position: relative;
            opacity: 0;
            text-shadow: 0 0 10px var(--primary);
        }
        
        .title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 0;
            height: 3px;
            background: linear-gradient(to right, var(--primary), var(--accent));
            transition: width 0.5s;
        }
        
        .loading-bar {
            width: 300px;
            height: 4px;
            background-color: #333;
            border-radius: 2px;
            overflow: hidden;
            position: relative;
        }
        
        .progress {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 0;
            background: linear-gradient(to right, var(--primary), var(--accent));
            transition: width 0.3s;
        }
        
        .shutter {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000;
            z-index: 2;
            transform: scaleY(0);
            transform-origin: top;
        }
        
        .particles {
            position: absolute;
            width: 5px;
            height: 5px;
            background-color: var(--primary);
            border-radius: 50%;
            opacity: 0;
        }
        
        @keyframes driveIn {
            0% {
                transform: translateX(-100%) rotateY(30deg);
                opacity: 0;
            }
            70% {
                transform: translateX(0) rotateY(0);
                opacity: 1;
            }
            100% {
                transform: translateX(0) rotateY(0);
                opacity: 1;
            }
        }
        
        @keyframes shake {
            0%, 100% {
                transform: translateX(0);
            }
            25% {
                transform: translateX(-5px);
            }
            75% {
                transform: translateX(5px);
            }
        }
        
        @keyframes smoke {
            0% {
                transform: translateX(-50%) scale(0.5);
                opacity: 1;
            }
            100% {
                transform: translateX(calc(-50% + 50px)) scale(3);
                opacity: 0;
            }
        }
        
        @keyframes exhaust {
            0% {
                transform: scaleY(0);
            }
            50% {
                transform: scaleY(1);
            }
            100% {
                transform: scaleY(0);
            }
        }
        
        @keyframes flash {
            0% {
                opacity: 0;
            }
            10% {
                opacity: 0.9;
            }
            100% {
                opacity: 0;
            }
        }
        
        @keyframes shutter {
            0% {
                transform: scaleY(0);
            }
            50% {
                transform: scaleY(1);
            }
            100% {
                transform: scaleY(0);
            }
        }
        
        @keyframes particleBurst {
            0% {
                transform: translate(0, 0) scale(0);
                opacity: 1;
            }
            100% {
                transform: translate(var(--tx), var(--ty)) scale(1);
                opacity: 0;
            }
        }
    </style>
</head>
<body>
    <div class="loader-container">
        <div class="camera-flash"></div>
        <div class="shutter"></div>
        
        <div class="car-container">
            <div class="car">
                <div class="car-body"></div>
                <div class="exhaust"></div>
                <div class="exhaust"></div>
            </div>
            <div class="smoke"></div>
            <div class="smoke"></div>
            <div class="smoke"></div>
        </div>
        
        <h1 class="title racing-font">Cartage</h1>
        
        <div class="loading-bar">
            <div class="progress"></div>
        </div>
        
        <div class="text-white mt-8 text-lg opacity-0">
            <span class="font-light">Capturing the </span>
            <span class="font-bold text-orange-500">Essence</span>
            <span class="font-light"> of </span>
            <span class="font-bold text-orange-500">Automotive</span>
            <span class="font-light"> Passion</span>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Elements
            const loader = document.querySelector('.loader-container');
            const title = document.querySelector('.title');
            const progress = document.querySelector('.progress');
            const smokeElements = document.querySelectorAll('.smoke');
            const exhausts = document.querySelectorAll('.exhaust');
            const flash = document.querySelector('.camera-flash');
            const shutter = document.querySelector('.shutter');
            const subtitle = document.querySelector('.text-white.mt-8');
            
            // Create particles
            const particleContainer = document.createElement('div');
            particleContainer.className = 'particle-container';
            particleContainer.style.position = 'absolute';
            particleContainer.style.top = '0';
            particleContainer.style.left = '0';
            particleContainer.style.width = '100%';
            particleContainer.style.height = '100%';
            particleContainer.style.pointerEvents = 'none';
            loader.appendChild(particleContainer);
            
            // Animate title
            setTimeout(() => {
                title.style.opacity = '1';
                title.style.transition = 'opacity 0.5s ease-out';
                
                setTimeout(() => {
                    title.style.textShadow = '0 0 20px var(--primary)';
                    title.querySelector('::after').style.width = '100%';
                }, 500);
            }, 500);
            
            // Animate smoke and exhaust
            setTimeout(() => {
                exhausts.forEach((exhaust, i) => {
                    setTimeout(() => {
                        exhaust.style.animation = 'exhaust 0.3s forwards';
                        
                        // Create smoke after exhaust
                        setTimeout(() => {
                            smokeElements[i].style.left = i === 0 ? '70px' : '220px';
                            smokeElements[i].style.animation = 'smoke 1s forwards';
                        }, 100);
                    }, i * 200);
                });
            }, 1500);
            
            // Camera flash effect
            setTimeout(() => {
                flash.style.animation = 'flash 0.5s forwards';
                
                // Create particles
                createParticles(150, title.getBoundingClientRect());
                
                // Show subtitle
                setTimeout(() => {
                    subtitle.style.opacity = '1';
                    subtitle.style.transition = 'opacity 0.5s ease-out';
                }, 300);
            }, 2500);
            
            // Shutter effect
            setTimeout(() => {
                shutter.style.animation = 'shutter 0.5s forwards';
            }, 3500);
            
            // Loading progress
            let progressValue = 0;
            const progressInterval = setInterval(() => {
                progressValue += Math.random() * 10;
                if (progressValue >= 100) {
                    progressValue = 100;
                    clearInterval(progressInterval);
                    
                    // Complete animation
                    setTimeout(() => {
                        loader.style.opacity = '0';
                        loader.style.pointerEvents = 'none';
                        loader.style.transition = 'opacity 0.5s ease-out';
                        
                        setTimeout(() => {
                            loader.style.display = 'none';
                            // Here you would typically load your main content
                            // document.body.style.overflow = 'auto';
                        }, 500);
                    }, 500);
                }
                progress.style.width = `${progressValue}%`;
            }, 200);
            
            // Helper function to create particles
            function createParticles(count, bounds) {
                const centerX = bounds.left + bounds.width / 2;
                const centerY = bounds.top + bounds.height / 2;
                
                for (let i = 0; i < count; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'particles';
                    
                    // Random angle and distance
                    const angle = Math.random() * Math.PI * 2;
                    const distance = 50 + Math.random() * 100;
                    
                    // Calculate final position
                    const tx = Math.cos(angle) * distance;
                    const ty = Math.sin(angle) * distance;
                    
                    // Set initial position
                    particle.style.left = `${centerX}px`;
                    particle.style.top = `${centerY}px`;
                    
                    // Set animation variables
                    particle.style.setProperty('--tx', `${tx}px`);
                    particle.style.setProperty('--ty', `${ty}px`);
                    
                    // Random size and color variation
                    const size = 2 + Math.random() * 6;
                    particle.style.width = `${size}px`;
                    particle.style.height = `${size}px`;
                    
                    // Color variation
                    const hue = 15 + Math.random() * 30; // orange spectrum
                    particle.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
                    
                    // Animation
                    particle.style.animation = `particleBurst 0.8s ease-out forwards`;
                    particle.style.animationDelay = `${Math.random() * 0.5}s`;
                    
                    particleContainer.appendChild(particle);
                    
                    // Remove particle after animation
                    setTimeout(() => {
                        particle.remove();
                    }, 1000);
                }
            }
        });
    </script>
</body>
</html>






























<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cartage - Social Media for Car Lovers</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;900&display=swap');

        body {
            font-family: 'Montserrat', sans-serif;
            background-color: #f8fafc;
        }

        .hero-gradient {
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
        }

        .car-card:hover .car-image {
            transform: scale(1.03);
            transition: transform 0.3s ease;
        }

        .car-image {
            transition: transform 0.3s ease;
        }

        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }

        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        .typewriter {
            overflow: hidden;
            border-right: .15em solid #f59e0b;
            white-space: nowrap;
            animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
        }

        @keyframes typing {
            from { width: 0 }
            to { width: 100% }
        }

        @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: #f59e0b; }
        }

        .floating {
            animation: floating 3s ease-in-out infinite;
        }

        @keyframes floating {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
        }
    </style>
</head>
    <!-- Hero Section -->
    <section class="hero-gradient text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div class="md:flex items-center justify-between">
                <div class="md:w-1/2 mb-10 md:mb-0">
                    <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Fuel Your <span class="text-amber-400 typewriter">Passion</span> for Cars
                    </h1>
                    <p class="text-lg md:text-xl text-gray-300 mb-8">
                        Share, discover, and connect with car enthusiasts worldwide. Cartage is where automotive passion meets social media.
                    </p>
                    <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button class="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md text-lg font-semibold transition duration-300 shadow-lg">
                            Join the Community
                        </button>
                        <button class="bg-transparent hover:bg-gray-800 text-white border border-gray-400 px-6 py-3 rounded-md text-lg font-semibold transition duration-300">
                            Explore Cars
                        </button>
                    </div>
                </div>
                <div class="md:w-1/2 flex justify-center">
                    <div class="relative w-full max-w-md">
                        <div class="absolute -top-10 -left-10 w-32 h-32 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
                        <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
                        <div class="relative floating">
                            <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                 alt="Sports Car"
                                 class="rounded-xl shadow-2xl border-8 border-gray-800 transform rotate-2">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Trending Now Section -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Trending Now</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Check out what the car community is buzzing about this week
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Trending Car 1 -->
                <div class="car-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                    <div class="relative h-64 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                             alt="Porsche 911"
                             class="car-image w-full h-full object-cover">
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                            <span class="bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded">TRENDING</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-2">
                            <h3 class="text-xl font-bold text-gray-900">Porsche 911 GT3</h3>
                            <span class="ml-auto text-amber-500 font-bold">1,243 ♥</span>
                        </div>
                        <p class="text-gray-600 mb-4">Track-focused beast with a naturally aspirated flat-six</p>
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="h-8 w-8 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User">
                            </div>
                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">Mark Johnson</p>
                                <p class="text-xs text-gray-500">2 hours ago</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Trending Car 2 -->
                <div class="car-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                    <div class="relative h-64 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                             alt="BMW M4"
                             class="car-image w-full h-full object-cover">
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                            <span class="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">NEW RELEASE</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-2">
                            <h3 class="text-xl font-bold text-gray-900">BMW M4 Competition</h3>
                            <span class="ml-auto text-amber-500 font-bold">987 ♥</span>
                        </div>
                        <p class="text-gray-600 mb-4">Controversial looks, undeniable performance</p>
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="h-8 w-8 rounded-full" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User">
                            </div>
                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">Sarah Miller</p>
                                <p class="text-xs text-gray-500">5 hours ago</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Trending Car 3 -->
                <div class="car-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                    <div class="relative h-64 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                             alt="Classic Mustang"
                             class="car-image w-full h-full object-cover">
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                            <span class="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">CLASSIC</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-2">
                            <h3 class="text-xl font-bold text-gray-900">1967 Ford Mustang</h3>
                            <span class="ml-auto text-amber-500 font-bold">1,532 ♥</span>
                        </div>
                        <p class="text-gray-600 mb-4">Restored to perfection with modern upgrades</p>
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="h-8 w-8 rounded-full" src="https://randomuser.me/api/portraits/men/75.jpg" alt="User">
                            </div>
                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">Tom Wilson</p>
                                <p class="text-xs text-gray-500">1 day ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-12">
                <button class="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                    View All Trending Posts
                    <i class="fas fa-arrow-right ml-2"></i>
                </button>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Car Enthusiasts Love Cartage</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    The ultimate platform built specifically for car lovers
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Feature 1 -->
                <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white mb-4">
                        <i class="fas fa-camera-retro text-xl"></i>
                    </div>
                    <h3 class="text-lg font-medium text-gray-900 mb-2">Showcase Your Ride</h3>
                    <p class="text-gray-600">
                        Share high-quality photos of your car with filters and editing tools designed specifically for automotive photography.
                    </p>
                </div>

                <!-- Feature 2 -->
                <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                        <i class="fas fa-users text-xl"></i>
                    </div>
                    <h3 class="text-lg font-medium text-gray-900 mb-2">Join Communities</h3>
                    <p class="text-gray-600">
                        Connect with owners of the same make/model or join groups based on your interests like tuning, classics, or racing.
                    </p>
                </div>

                <!-- Feature 3 -->
                <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white mb-4">
                        <i class="fas fa-calendar-alt text-xl"></i>
                    </div>
                    <h3 class="text-lg font-medium text-gray-900 mb-2">Find Events</h3>
                    <p class="text-gray-600">
                        Discover car meets, shows, and track days near you. Never miss out on the automotive events that matter to you.
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <!-- Feature 4 -->
                <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mb-4">
                        <i class="fas fa-wrench text-xl"></i>
                    </div>
                    <h3 class="text-lg font-medium text-gray-900 mb-2">Build Your Garage</h3>
                    <p class="text-gray-600">
                        Create a digital garage to showcase all your vehicles, modifications, and maintenance history.
                    </p>
                </div>

                <!-- Feature 5 -->
                <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mb-4">
                        <i class="fas fa-shopping-cart text-xl"></i>
                    </div>
                    <h3 class="text-lg font-medium text-gray-900 mb-2">Marketplace</h3>
                    <p class="text-gray-600">
                        Buy, sell, or trade cars and parts with other enthusiasts in our verified marketplace.
                    </p>
                </div>

                <!-- Feature 6 -->
                <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                        <i class="fas fa-trophy text-xl"></i>
                    </div>
                    <h3 class="text-lg font-medium text-gray-900 mb-2">Competitions</h3>
                    <p class="text-gray-600">
                        Enter photo contests and win prizes. Get featured on our homepage and gain recognition in the community.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Hear from car enthusiasts who use Cartage daily
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Testimonial 1 -->
                <div class="bg-gray-50 p-8 rounded-xl">
                    <div class="flex items-center mb-6">
                        <img class="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/men/42.jpg" alt="User">
                        <div class="ml-4">
                            <h4 class="text-lg font-medium text-gray-900">Jason Carter</h4>
                            <p class="text-gray-600">Porsche Enthusiast</p>
                        </div>
                    </div>
                    <p class="text-gray-700 italic">
                        "As a long-time car photographer, I've been waiting for a platform like Cartage. The community is amazing and the photo tools are perfect for showcasing cars. I've connected with so many fellow Porsche lovers!"
                    </p>
                    <div class="mt-4 flex">
                        <i class="fas fa-star text-amber-400"></i>
                        <i class="fas fa-star text-amber-400"></i>
                        <i class="fas fa-star text-amber-400"></i>
                        <i class="fas fa-star text-amber-400"></i>
                        <i class="fas fa-star text-amber-400"></i>
                    </div>
                </div>

                <!-- Testimonial 2 -->
                <div class="bg-gray-50 p-8 rounded-xl">
                    <div class="flex items-center mb-6">
                        <img class="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/women/63.jpg" alt="User">
                        <div class="ml-4">
                            <h4 class="text-lg font-medium text-gray-900">Lisa Rodriguez</h4>
                            <p class="text-gray-600">JDM Collector</p>
                        </div>
                    </div>
                    <p class="text-gray-700 italic">
                        "I've found my dream car through Cartage's marketplace and met an incredible group of JDM fans in my area. The event feature helped me discover local meets I never knew about. This app has transformed my car hobby!"
                    </p>
                    <div class="mt-4 flex">
                        <i class="fas fa-star text-amber-400"></i>
                        <i class="fas fa-star text-amber-400"></i>
                        <i class="fas fa-star text-amber-400"></i>
                        <i class="fas fa-star text-amber-400"></i>
                        <i class="fas fa-star text-amber-400"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-amber-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl shadow-xl overflow-hidden">
                <div class="md:flex">
                    <div class="md:flex-shrink-0 md:w-1/2">
                        <img class="h-full w-full object-cover"
                             src="https://images.unsplash.com/photo-1580273916550-e4dc2a0a6d02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                             alt="Car Meet">
                    </div>
                    <div class="p-12 md:w-1/2 flex flex-col justify-center">
                        <h2 class="text-3xl font-bold text-white mb-4">Ready to Join the Community?</h2>
                        <p class="text-lg text-amber-100 mb-8">
                            Sign up today and start connecting with car enthusiasts from around the world. Share your passion, discover amazing rides, and be part of the ultimate automotive social network.
                        </p>
                        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button class="bg-white text-amber-600 hover:bg-gray-100 px-6 py-3 rounded-md text-lg font-semibold transition duration-300 shadow-lg">
                                Create Account
                            </button>
                            <button class="bg-transparent hover:bg-amber-700 text-white border border-white px-6 py-3 rounded-md text-lg font-semibold transition duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-lg font-semibold mb-4">Cartage</h3>
                    <p class="text-gray-400">
                        The social media platform built for car enthusiasts by car enthusiasts.
                    </p>
                    <div class="flex space-x-4 mt-4">
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-4">Explore</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">Popular Cars</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Top Photographers</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Featured Builds</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Upcoming Events</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-4">Company</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">About Us</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Careers</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Press</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-4">Legal</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Terms of Service</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Cookie Policy</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Community Guidelines</a></li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-400 text-sm">
                    © 2023 Cartage. All rights reserved.
                </p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" class="text-gray-400 hover:text-white text-sm">Privacy</a>
                    <a href="#" class="text-gray-400 hover:text-white text-sm">Terms</a>
                    <a href="#" class="text-gray-400 hover:text-white text-sm">Sitemap</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Mobile Menu (hidden by default) -->
    <div class="md:hidden fixed bottom-4 right-4 z-50">
        <button id="mobile-menu-button" class="bg-amber-500 text-white p-4 rounded-full shadow-lg hover:bg-amber-600 transition duration-300">
            <i class="fas fa-bars text-xl"></i>
        </button>

        <div id="mobile-menu" class="hidden absolute bottom-16 right-0 w-64 bg-white rounded-lg shadow-xl p-4">
            <a href="#" class="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Home</a>
            <a href="#" class="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Explore</a>
            <a href="#" class="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Garage</a>
            <a href="#" class="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Events</a>
            <a href="#" class="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Community</a>
            <div class="border-t border-gray-200 mt-2 pt-2">
                <a href="#" class="block px-4 py-2 text-amber-600 font-medium rounded-md">Sign In</a>
            </div>
        </div>
    </div>

    <script>
        // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const menuButton = document.getElementById('mobile-menu-button');
            const menu = document.getElementById('mobile-menu');

            if (!menuButton.contains(event.target) && !menu.contains(event.target)) {
                menu.classList.add('hidden');
            }
        });

        // Typewriter effect for hero section
        const words = ["Passion", "Ride", "Dream", "Collection", "Garage"];
        let currentWordIndex = 0;

        function updateTypewriter() {
            const typewriterElement = document.querySelector('.typewriter');
            typewriterElement.style.animation = 'none';
            void typewriterElement.offsetWidth; // Trigger reflow
            typewriterElement.style.animation = null;

            currentWordIndex = (currentWordIndex + 1) % words.length;
            typewriterElement.textContent = words[currentWordIndex];
        }

        setInterval(updateTypewriter, 3500);
    </script>
</html>
