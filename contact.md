---
layout: base
title: Contact Us
search_exclude: true
menu: nav/mainHeader.html
---

<div class="bg-[{{site.colors.background}}] flex justify-center items-center min-h-screen px-4 py-16">
    <!-- Canvas for Traffic Animation -->
    <canvas class="fixed top-0 left-0" id="trafficCanvas"></canvas>
  <div class="bg-white border rounded-3xl shadow-2xl p-10 max-w-xl w-full text-center z-10">

    <!-- Header -->
    <h1 class="text-5xl font-extrabold text-[{{site.colors.primary}}] mb-4 tracking-tight drop-shadow-sm">
      Contact Us
    </h1>

    <!-- Decorative Line -->
    <div class="h-1 w-20 bg-[{{site.colors.accent.green}}] rounded-full mx-auto mb-6 animate-pulse"></div>

    <!-- Body Text -->
    <p class="text-lg text-gray-800 mb-6 leading-relaxed">
      Got questions or feedback? We're here to help! Reach out to us anytime at
      <a href="mailto:info@example.com" class="text-[{{site.colors.accent.green}}] font-semibold hover:underline transition-colors duration-200">
        info@example.com
      </a>
    </p>

    <!-- CTA Button -->
    <a href="mailto:info@example.com"
       class="inline-block mt-4 px-6 py-3 rounded-full bg-[{{site.colors.primary}}] text-white font-semibold shadow-lg hover:bg-[{{site.colors.primary-hover}}] transition-transform duration-300 hover:scale-105">
      📧 Email Us
    </a>

  </div>
</div>

<script>
    const canvas = document.getElementById('trafficCanvas');
    const ctx = canvas.getContext('2d');
    let cars = [];
    let lanes = [];

    // Adjust canvas to fill the window
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Define three lanes at different vertical positions
      lanes = [canvas.height * 0.3, canvas.height * 0.5, canvas.height * 0.7];
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Create car objects with random speed and color (red or green accent)
    function createCars(num) {
      cars = [];
      for (let i = 0; i < num; i++) {
        const lane = lanes[Math.floor(Math.random() * lanes.length)];
        cars.push({
          x: Math.random() * canvas.width,
          y: lane - 10, // Adjust Y position to center within lane
          width: 30,
          height: 20,
          speed: 1 + Math.random() * 2,
          color: Math.random() > 0.5 ? '{{site.colors.accent.red}}' : '{{site.colors.accent.green}}'
        });
      }
    }
    createCars(10);

    // Animation loop: clear canvas, draw lane lines, and animate cars
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw lane lines
      ctx.strokeStyle = '{{site.colors.secondary}}';
      ctx.lineWidth = 2;
      lanes.forEach(lane => {
        ctx.beginPath();
        ctx.moveTo(0, lane);
        ctx.lineTo(canvas.width, lane);
        ctx.stroke();
      });

      // Draw and update cars
      cars.forEach(car => {
        ctx.fillStyle = car.color;
        ctx.fillRect(car.x, car.y, car.width, car.height);
        car.x += car.speed;
        if (car.x > canvas.width) {
          car.x = -car.width;
        }
      });

      requestAnimationFrame(animate);
    }
    animate();
</script>
