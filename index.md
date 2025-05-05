---
layout: base
search_exclude: true
menu: nav/mainHeader.html
---

<div class="bg-[{{site.colors.background}}]">
  <!-- Canvas for Traffic Animation -->
  <canvas id="trafficCanvas"></canvas>

  <!-- Hero Content -->
  <div class="flex items-center justify-center min-h-screen px-4">
    <div class="z-10 bg-white rounded-2xl shadow-2xl p-8 max-w-xl text-center">
      <!-- Rotating Mango Icon -->
      <div class="flex justify-center mb-4">
        <div class="rotate-slow">
          <svg width="60" height="60" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="{{site.colors.primary}}" stroke-width="2">
                <ellipse cx="32" cy="32" rx="20" ry="26" fill="{{site.colors.primary}}"/>
              <path d="M32 10 C35 5, 45 5, 48 12" stroke="{{site.colors.accent.green}}" stroke-width="3" fill="none"/>
            </g>
          </svg>
        </div>
      </div>
      <!-- Title & Description -->
      <h1 class="text-4xl font-bold text-[{{site.colors.primary}}] mb-2">Data Mango</h1>
      <p class="text-xl text-[{{site.colors.secondary}}] mb-6">CSP Tri 3 Project</p>
      <!-- Interactive Buttons -->
      <div class="flex flex-wrap gap-4 justify-center">
        <a href="3d-traffic.html" class="px-4 py-2 rounded-full bg-[{{site.colors.primary}}] text-white shadow hover:bg-[{{site.colors.primary-hover}}] transition">
          3D Traffic Data
        </a>
        <a href="predictions.html" class="px-4 py-2 rounded-full bg-[{{site.colors.accent.green}}] text-white shadow hover:bg-[{{site.colors.accent.green-hover}}] transition">
          Traffic Predictions
        </a>
        <a href="map.html" class="px-4 py-2 rounded-full bg-[{{site.colors.secondary}}] text-white shadow hover:bg-[{{site.colors.secondary-hover}}] transition">
          Interactive Map
        </a>
        <a href="https://github.com/users/Tvick22/projects/4" target="_blank" class="px-4 py-2 rounded-full bg-[{{site.colors.accent.red}}] text-white shadow hover:bg-[{{site.colors.accent.red-hover}}] transition">
          View Timeline
        </a>
        <a href="https://github.com/Tvick22/DataMango" target="_blank" class="px-4 py-2 rounded-full bg-[{{site.colors.primary}}] text-white shadow hover:bg-[{{site.colors.primary-hover}}] transition">
          GitHub
        </a>
      </div>
    </div>
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
<style>
  /* Mango icon spin animation */
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .rotate-slow {
    animation: spin 10s linear infinite;
  }
  /* Canvas covers full screen behind content */
  #trafficCanvas {
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
