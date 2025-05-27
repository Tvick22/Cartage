---
layout: base
title: Fun Animations
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fun Animation Gallery</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: linear-gradient(to bottom, #87ceeb 60%, #8ecf63 40%);
            min-height: 100vh;
            font-family: 'Comic Sans MS', cursive;
            overflow-x: hidden;
        }

        .section {
            height: 100vh;
            position: relative;
            overflow: hidden;
        }

        /* Admin Panel Styles */
        .hidden-admin {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.95);
            z-index: 9999;
            text-align: center;
            padding-top: 5rem;
        }

        .admin-panel h1 {
            font-size: 3rem;
            margin-bottom: 2rem;
        }

        .pizza, .cat {
            position: absolute;
            width: 100px;
            height: 100px;
            pointer-events: none;
            animation: float 6s linear infinite;
        }

        .pizza {
            background-image: url('https://cdn-icons-png.flaticon.com/512/3132/3132693.png');
            background-size: cover;
        }

        .cat {
            background-image: url('https://cdn-icons-png.flaticon.com/512/616/616408.png');
            background-size: cover;
        }

        @keyframes float {
            from {
                transform: translateY(110vh) rotate(0deg);
                opacity: 1;
            }
            to {
                transform: translateY(-20vh) rotate(360deg);
                opacity: 0;
            }
        }

        .close-btn {
            margin-top: 2rem;
            padding: 10px 20px;
            background: #ff4d4d;
            border: none;
            font-size: 1.2rem;
            color: white;
            cursor: pointer;
            border-radius: 10px;
        }

        .close-btn:hover {
            background: #ff1a1a;
        }

        /* Cat and Dog Chase Styles */
        .chase-scene {
            position: relative;
            height: 200px;
            margin-top: 50px;
        }

        .dog, .cat {
            position: fixed; /* Change from absolute to fixed */
            font-size: 48px;
            transform: scaleX(-1);
            transition: all 0.3s ease;
            z-index: 100;
        }

        .dog { 
            animation: none; /* Remove default animation */
        }

        .cat { 
            animation: none; /* Remove default animation */
        }

        .chase-active {
            transform: scaleX(-1) translateY(-50%);
        }

        /* Car Animation Styles */
        .road {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 100px;
            background: #333;
        }

        .car {
            position: absolute;
            bottom: 110px;
            left: -300px;
            width: 200px;
            height: 100px;
            background: red;
            border-radius: 20px;
            animation: drive 6s linear infinite;
        }

        .car::before {
            content: '';
            position: absolute;
            bottom: -20px;
            left: 20px;
            width: 40px;
            height: 40px;
            background: #000;
            border-radius: 50%;
            box-shadow: 120px 0 #000;
        }

        .window {
            position: absolute;
            top: 10px;
            left: 30px;
            width: 140px;
            height: 50px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 10px;
        }

        .smoke {
            position: absolute;
            bottom: 80px;
            left: 0;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: rgba(100, 100, 100, 0.6);
            opacity: 0;
            transform: scale(1);
            animation: puff 2s ease-out infinite;
        }

        @keyframes drive {
            0% {
                left: -300px;
            }
            100% {
                left: 110%;
            }
        }

        @keyframes puff {
            0% {
                transform: scale(0.5);
                opacity: 0.7;
                bottom: 90px;
                left: 40px;
            }
            100% {
                transform: scale(2);
                opacity: 0;
                bottom: 140px;
                left: 20px;
            }
        }

        /* Flower Animation Styles */
        .flower-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 300px;
        }

        .flower {
            position: relative;
            width: 200px;
            height: 200px;
        }

        .petal {
            position: absolute;
            width: 60px;
            height: 120px;
            background: linear-gradient(45deg, #ff5e62, #ff9966);
            border-radius: 60px 60px 0 0;
            transform-origin: bottom center;
            animation: petal-move 4s ease-in-out infinite;
            filter: drop-shadow(0 2px 2px rgba(0,0,0,0.2));
        }

        /* Position and delay each petal */
        .petal:nth-child(1) {
            top: 40px;
            left: 70px;
            transform: rotate(0deg);
            animation-delay: 0s;
        }
        .petal:nth-child(2) {
            top: 40px;
            left: 70px;
            transform: rotate(45deg);
            animation-delay: 0.5s;
        }
        .petal:nth-child(3) {
            top: 40px;
            left: 70px;
            transform: rotate(90deg);
            animation-delay: 1s;
        }
        .petal:nth-child(4) {
            top: 40px;
            left: 70px;
            transform: rotate(135deg);
            animation-delay: 1.5s;
        }
        .petal:nth-child(5) {
            top: 40px;
            left: 70px;
            transform: rotate(180deg);
            animation-delay: 2s;
        }
        .petal:nth-child(6) {
            top: 40px;
            left: 70px;
            transform: rotate(225deg);
            animation-delay: 2.5s;
        }
        .petal:nth-child(7) {
            top: 40px;
            left: 70px;
            transform: rotate(270deg);
            animation-delay: 3s;
        }
        .petal:nth-child(8) {
            top: 40px;
            left: 70px;
            transform: rotate(315deg);
            animation-delay: 3.5s;
        }

        /* Animate petals opening and closing */
        @keyframes petal-move {
            0%, 100% {
                transform: rotate(var(--angle)) scaleY(1);
                opacity: 1;
            }
            50% {
                transform: rotate(var(--angle)) scaleY(0.7);
                opacity: 0.8;
            }
        }

        /* Center circle of the flower */
        .center {
            position: absolute;
            top: 70px;
            left: 70px;
            width: 60px;
            height: 60px;
            background: radial-gradient(circle at center, #ffcc33, #ff9933);
            border-radius: 50%;
            box-shadow: 0 0 10px #ffcc33aa;
            animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% {
                box-shadow: 0 0 10px #ffcc33aa;
                transform: scale(1);
            }
            50% {
                box-shadow: 0 0 25px #ffcc33ff;
                transform: scale(1.05);
            }
        }
    </style>
</head>
<body>
    <!-- Admin Panel -->
    <div class="hidden-admin" id="adminPanel">
        <div class="admin-panel">
            <h1>🍕 Secret Admin Control: PizzaCat Zone 😸</h1>
            <button class="close-btn" onclick="closeAdmin()">Close Portal</button>
        </div>
    </div>

    <!-- Cat and Dog Chase Section -->
    <div class="section chase-scene">
        <h2>Cat Chasing Dog</h2>
        <div class="dog">🐶</div>
        <div class="cat">🐱</div>
    </div>

    <!-- Car Animation Section -->
    <div class="section">
        <div class="road"></div>
        <div class="car">
            <div class="window"></div>
        </div>
    </div>

    <!-- Flower Animation Section -->
    <div class="section flower-container">
        <div class="flower">
            <!-- Your existing flower petals -->
            <div class="center"></div>
        </div>
    </div>

    <script>
        // Combined JavaScript for all animations
        document.addEventListener('keydown', function(e) {
            if (e.metaKey && e.key === '1') { // Changed from '4' to '1'
                toggleAdmin();
            }
        });

        function toggleAdmin() {
            const panel = document.getElementById('adminPanel');
            panel.style.display = 'block';
            spawnFlyingCatsAndPizzas();
        }

        function closeAdmin() {
            document.getElementById('adminPanel').style.display = 'none';
        }

        function spawnFlyingCatsAndPizzas() {
            for (let i = 0; i < 20; i++) {
                const img = document.createElement('div');
                img.className = Math.random() > 0.5 ? 'pizza' : 'cat';
                img.style.left = Math.random() * 100 + 'vw';
                img.style.animationDuration = (Math.random() * 5 + 3) + 's';
                document.body.appendChild(img);

                setTimeout(() => img.remove(), 8000);
            }
        }

        // Car smoke effect
        function createSmoke() {
            const car = document.querySelector('.car');
            const smoke = document.createElement('div');
            smoke.classList.add('smoke');
            car.appendChild(smoke);

            setTimeout(() => smoke.remove(), 2000);
        }

        setInterval(createSmoke, 500);

        // Cat and Dog Chase Logic
        const cat = document.querySelector('.cat');
        const dog = document.querySelector('.dog');
        let mouseX = 0;
        let mouseY = 0;
        let catX = 100;
        let catY = 100;
        let dogX = 0;
        let dogY = 0;

        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Animation function
        function animate() {
            // Move cat towards mouse
            const catDx = mouseX - catX;
            const catDy = mouseY - catY;
            catX += catDx * 0.05;
            catY += catDy * 0.05;
            
            // Move dog towards cat
            const dogDx = catX - dogX;
            const dogDy = catY - dogY;
            dogX += dogDx * 0.03;
            dogY += dogDy * 0.03;

            // Update positions
            cat.style.left = `${catX}px`;
            cat.style.top = `${catY}px`;
            dog.style.left = `${dogX}px`;
            dog.style.top = `${dogY}px`;

            // Flip sprites based on movement direction
            cat.style.transform = `scaleX(${catDx > 0 ? -1 : 1})`;
            dog.style.transform = `scaleX(${dogDx > 0 ? -1 : 1})`;

            requestAnimationFrame(animate);
        }

        // Initialize positions
        cat.style.left = '100px';
        cat.style.top = '100px';
        dog.style.left = '0px';
        dog.style.top = '100px';

        // Start animation
        animate();
    </script>
</body>
</html>



