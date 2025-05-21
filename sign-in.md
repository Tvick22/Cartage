---
layout: base
title: Sign In
search_exclude: true
menu: nav/mainHeader.html
---


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In | ShotSpot</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f8fafc;
        }
        
        .brand-orange {
            background-color: rgb(245, 158, 11);
        }
        
        .brand-orange-text {
            color: rgb(245, 158, 11);
        }
        
        .brand-orange-border {
            border-color: rgb(245, 158, 11);
        }
        
        .brand-orange-hover:hover {
            background-color: rgba(245, 158, 11, 0.9);
        }
        
        .input-focus:focus {
            border-color: rgb(245, 158, 11);
            box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.2);
        }
        
        .wave-bg {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
            line-height: 0;
            transform: rotate(180deg);
        }
        
        .wave-bg svg {
            position: relative;
            display: block;
            width: calc(100% + 1.3px);
            height: 150px;
        }
        
        .wave-bg .shape-fill {
            fill: rgba(245, 158, 11, 0.1);
        }
        
        .password-toggle {
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
        }
    </style>
</head>
<body class="min-h-screen bg-gray-50">
    <div class="flex items-center justify-center min-h-screen relative p-4">
    <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-white to-gray-100 opacity-90"></div>
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-10"></div>
    </div>
    
    <div class="relative w-full max-w-md z-10">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="brand-orange p-6 text-center">
                <h1 class="text-3xl font-bold text-white">Shots</h1>
                <p class="text-white opacity-90 mt-1">Capture and share your best moments</p>
            </div>
            
            <div class="px-8 py-10">
                <h2 class="text-2xl font-bold text-gray-800 text-center mb-8">Sign In to Your Account</h2>
                
                <form id="signinForm" class="space-y-6">
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="fas fa-envelope text-gray-400"></i>
                            </div>
                            <input type="email" id="email" name="email" required
                                   class="pl-10 input-focus block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-offset-1 focus:ring-opacity-50 py-3 px-4 border transition duration-150 ease-in-out"
                                   placeholder="you@example.com">
                        </div>
                        <p id="email-error" class="mt-1 text-sm text-red-600 hidden">Please enter a valid email address</p>
                    </div>
                    
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="fas fa-lock text-gray-400"></i>
                            </div>
                            <input type="password" id="password" name="password" required
                                   class="pl-10 input-focus block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-offset-1 focus:ring-opacity-50 py-3 px-4 border transition duration-150 ease-in-out"
                                   placeholder="••••••••">
                            <div class="password-toggle absolute" onclick="togglePassword()">
                                <i id="eye-icon" class="fas fa-eye-slash text-gray-400"></i>
                            </div>
                        </div>
                        <p id="password-error" class="mt-1 text-sm text-red-600 hidden">Password must be at least 8 characters</p>
                    </div>
                    
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 brand-orange rounded focus:ring-brand-orange border-gray-300">
                            <label for="remember-me" class="ml-2 block text-sm text-gray-700">Remember me</label>
                        </div>
                        
                        <div class="text-sm">
                            <a href="#" class="font-medium brand-orange-text hover:text-orange-600">Forgot password?</a>
                        </div>
                    </div>
                    
                    <div>
                        <button type="submit" class="brand-orange brand-orange-hover w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out">
                            Sign In
                        </button>
                    </div>
                </form>
                
                <div class="mt-6">
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="px-2 bg-white text-gray-500">Or continue with</span>
                        </div>
                    </div>
                    
                    <div class="mt-6 grid grid-cols-2 gap-3">
                        <div>
                            <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out">
                                <i class="fab fa-google brand-orange-text"></i>
                                <span class="ml-2">Google</span>
                            </a>
                        </div>
                        
                        <div>
                            <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out">
                                <i class="fab fa-apple"></i>
                                <span class="ml-2">Apple</span>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="mt-8 text-center text-sm text-gray-500">
                    Don't have an account? <a href="#" class="font-medium brand-orange-text hover:text-orange-600">Sign up</a>
                </div>
            </div>
        </div>
        
        <div class="mt-6 text-center text-xs text-gray-500">
            &copy; 2023 Shots. All rights reserved.
        </div>
    </div>
    
    <div class="wave-bg">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
    </div>
    
    <script>
        // Toggle password visibility
        function togglePassword() {
            const passwordInput = document.getElementById('password');
            const eyeIcon = document.getElementById('eye-icon');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eyeIcon.classList.remove('fa-eye-slash');
                eyeIcon.classList.add('fa-eye');
            } else {
                passwordInput.type = 'password';
                eyeIcon.classList.remove('fa-eye');
                eyeIcon.classList.add('fa-eye-slash');
            }
        }
        
        // Form validation
        document.getElementById('signinForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const emailError = document.getElementById('email-error');
            const passwordError = document.getElementById('password-error');
            
            // Reset errors
            emailError.classList.add('hidden');
            passwordError.classList.add('hidden');
            
            let isValid = true;
            
            // Validate email
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                emailError.classList.remove('hidden');
                isValid = false;
            }
            
            // Validate password
            if (password.length < 8) {
                passwordError.classList.remove('hidden');
                isValid = false;
            }
            
            if (isValid) {
                // Simulate successful login
                document.querySelector('button[type="submit"]').innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Signing in...';
                
                setTimeout(() => {
                    alert('Login successful! Redirecting...');
                    // In a real app, you would redirect here
                    // window.location.href = '/dashboard';
                }, 1500);
            }
        });
    </script>
    </div>
</body>
</html>