---
layout: base
title: Sign Up
permalink: /signup
search_exclude: true
menu: nav/mainHeader.html
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up | Modern UI</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #f5f7fa 0%, #ffe8cc 100%);
        }
        .form-input:focus {
            box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.3);
        }
        .btn-glow:hover {
            box-shadow: 0 0 15px rgba(245, 158, 11, 0.6);
        }
        .floating {
            animation: floating 3s ease-in-out infinite;
        }
        @keyframes floating {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
    </style>
</head>
<body class="min-h-screen flex items-center justify-center p-4">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div class="absolute top-20 left-10 w-32 h-32 rounded-full bg-amber-200 opacity-20 animate-pulse"></div>
        <div class="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-amber-300 opacity-20 animate-pulse delay-300"></div>
        <div class="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-amber-100 opacity-20 animate-pulse delay-500"></div>
    </div>

    <div class="relative z-10 w-full max-w-md">
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div class="bg-gradient-to-r from-amber-400 to-amber-600 p-6 text-center">
                <div class="floating inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                </div>
                <h1 class="text-3xl font-bold text-white mt-4">Create Account</h1>
                <p class="text-amber-100 mt-2">Join our community today</p>
            </div>

            <form class="p-8 space-y-6" id="pythonForm" onsubmit="pythonLogin(); return false;">
                <div class="space-y-4">
                    <div>
                        <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg class="h-5 w-5 text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <input type="text" id="username" name="username" required 
                                class="form-input pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-200" 
                                placeholder="Enter your username">
                        </div>
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg class="h-5 w-5 text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <input type="password" id="password" name="password" required 
                                class="form-input pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-200" 
                                placeholder="Create a password">
                        </div>
                    </div>

                    <div class="flex items-center">
                        <input id="terms" name="terms" type="checkbox" class="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded">
                        <label for="terms" class="ml-2 block text-sm text-gray-700">
                            I agree to the <a href="#" class="text-amber-600 hover:text-amber-500 font-medium">Terms and Conditions</a>
                        </label>
                    </div>
                </div>

                <div>
                    <button type="submit" 
                        class="btn-glow w-full px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold shadow-md hover:from-amber-600 hover:to-amber-700 transition duration-300 transform hover:scale-[1.02]">
                        Sign Up Now
                    </button>
                </div>

                <div id="message" class="text-center text-sm text-red-500 min-h-6"></div>

                <div class="text-center text-sm text-gray-600">
                    Already have an account? 
                    <a href="#" class="font-medium text-amber-600 hover:text-amber-500">Sign in</a>
                </div>
            </form>
        </div>

        <div class="mt-6 text-center text-xs text-gray-500">
            <p>© 2023 Your Company. All rights reserved.</p>
        </div>
    </div>

    <script>
        // Function to handle Python login
        window.pythonLogin = function() {
            const submitBtn = document.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.innerHTML = `
                <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating account...
            `;
            submitBtn.disabled = true;

            // Simulate API call (replace with actual API call)
            setTimeout(() => {
                const username = document.getElementById("username").value;
                const password = document.getElementById("password").value;
                const termsChecked = document.getElementById("terms").checked;

                if (!termsChecked) {
                    document.getElementById("message").textContent = "You must agree to the terms and conditions";
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    return;
                }

                if (username && password) {
                    document.getElementById("message").textContent = "";
                    // Here you would normally make your API call
                    console.log("Signing up with:", { username, password });
                    
                    // Simulate success
                    setTimeout(() => {
                        document.getElementById("message").textContent = "Account created successfully! Redirecting...";
                        document.getElementById("message").className = "text-center text-sm text-green-500 min-h-6";
                        
                        // Simulate redirect
                        setTimeout(() => {
                            window.location.href = "/dashboard.html";
                        }, 1500);
                    }, 1000);
                } else {
                    document.getElementById("message").textContent = "Please fill in all fields";
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            }, 1500);
            
            return false; // Prevent form submission for this demo
        }
    </script>
</body>
</html>