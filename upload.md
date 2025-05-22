---
layout: base
title: Make a New Post
search_exclude: true
menu: nav/mainHeader.html
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Make a New Post | Cartage</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    /* Float animation */
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-float {
      animation: float 4s ease-in-out infinite;
    }

    /* Canvas covers full background */
    #bgCanvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
  </style>
</head>
<body class="bg-gray-100 font-sans overflow-hidden">
  <!-- Pastel traffic animation background -->
  <canvas id="bgCanvas"></canvas>

  <div class="relative z-10 min-h-screen flex flex-col items-center justify-start pt-12">
    <!-- Page Title -->
    <h1 class="text-4xl font-bold text-gray-800 mb-10 animate-float">Make a New Post</h1>

    <!-- Upload / Preview Container -->
    <div id="upload-container"
         class="w-3/4 md:w-1/2 lg:w-1/3 border-4 border-dashed border-gray-300 rounded-lg
                flex flex-col items-center justify-center bg-white cursor-pointer
                hover:border-amber-500 transition-colors animate-pulse relative">
      <label for="photo-upload" class="flex flex-col items-center justify-center w-full h-64 cursor-pointer">
        <i class="fas fa-cloud-upload-alt text-6xl text-gray-400 mb-4 animate-bounce"></i>
        <span class="text-gray-600 font-medium">Click or drag here to upload a photo</span>
      </label>
      <input id="photo-upload" type="file" accept="image/*"
             class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
    </div>

    <!-- Image Title Input -->
    <input type="text"
           id="image-title"
           placeholder="Enter image title..."
           class="mt-8 w-3/4 md:w-1/2 lg:w-1/3 p-3 border border-gray-300 rounded-md
                  focus:outline-none focus:ring-2 focus:ring-amber-500 animate-float" />

    <!-- Upload Button (hidden until preview) -->
    <div class="w-3/4 md:w-1/2 lg:w-1/3 mt-4 text-center">
      <button id="upload-btn" class="hidden bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-md font-medium">
        Upload
      </button>
    </div>
  </div>

  <script>
    // Background traffic animation with pastel colors
    const bgCanvas = document.getElementById('bgCanvas');
    const bgCtx = bgCanvas.getContext('2d');
    let cars = [];
    let lanes = [];
    const pastelColors = ['#FFD1DC', '#BFFCC6', '#AEC6CF']; // pastel pink, green, blue
    const laneColor = '#D1D5DB'; // light gray

    function resizeBg() {
      bgCanvas.width = window.innerWidth;
      bgCanvas.height = window.innerHeight;
      lanes = [bgCanvas.height * 0.3, bgCanvas.height * 0.5, bgCanvas.height * 0.7];
    }
    window.addEventListener('resize', resizeBg);
    resizeBg();

    function createCars(num) {
      cars = [];
      for (let i = 0; i < num; i++) {
        const lane = lanes[Math.floor(Math.random() * lanes.length)];
        cars.push({
          x: Math.random() * bgCanvas.width,
          y: lane - 10,
          width: 30,
          height: 20,
          speed: 0.5 + Math.random() * 1.5,
          color: pastelColors[Math.floor(Math.random() * pastelColors.length)]
        });
      }
    }
    createCars(15);

    function animateBg() {
      bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
      // Draw lanes
      bgCtx.strokeStyle = laneColor;
      bgCtx.lineWidth = 2;
      lanes.forEach(y => {
        bgCtx.beginPath();
        bgCtx.moveTo(0, y);
        bgCtx.lineTo(bgCanvas.width, y);
        bgCtx.stroke();
      });
      // Draw cars
      cars.forEach(car => {
        bgCtx.fillStyle = car.color;
        bgCtx.fillRect(car.x, car.y, car.width, car.height);
        car.x += car.speed;
        if (car.x > bgCanvas.width) car.x = -car.width;
      });
      requestAnimationFrame(animateBg);
    }
    animateBg();

    // Image upload & preview logic
    const input = document.getElementById('photo-upload');
    const container = document.getElementById('upload-container');
    const uploadBtn = document.getElementById('upload-btn');

    input.addEventListener('change', function() {
      if (this.files && this.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
          container.classList.remove('border-dashed','animate-pulse');
          container.innerHTML = `
            <img src="${e.target.result}" alt="Preview"
                 class="w-full max-h-96 object-contain rounded-lg animate-float" />
          `;
          uploadBtn.classList.remove('hidden');
        };
        reader.readAsDataURL(this.files[0]);
      }
    });

    uploadBtn.addEventListener('click', function() {
      // TODO: Send the image file and title to backend (AWS S3 + SQS + Lambda)
      console.log('Uploading to backend...');
      alert('Upload placeholder: image would be sent now.');
    });
  </script>
</body>
</html>
