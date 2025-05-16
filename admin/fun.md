
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hidden Admin Pizza Cat Page</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      background: #111;
      color: white;
      font-family: 'Comic Sans MS', cursive;
    }

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
  </style>
</head>
<body>
  <div class="hidden-admin" id="adminPanel">
    <div class="admin-panel">
      <h1>🍕 Secret Admin Control: PizzaCat Zone 😸</h1>
      <button class="close-btn" onclick="closeAdmin()">Close Portal</button>
    </div>
  </div>

  <script>
    // Listen for secret key combo Ctrl+Alt+P
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && e.altKey && e.key === 'p') {
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
        img.style.top = '110vh';
        img.style.animationDuration = (Math.random() * 5 + 3) + 's';
        document.body.appendChild(img);

        setTimeout(() => {
          img.remove();
        }, 8000);
      }
    }
  </script>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cat Chasing Dog</title>
  <style>
    body {
      margin: 0;
      overflow: hidden;
      background: #cce7ff;
      font-family: sans-serif;
    }

    .ground {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100px;
      background-color: #8ecf63;
    }

    .dog, .cat {
      position: absolute;
      bottom: 100px;
      font-size: 48px;
      transform: scaleX(-1); /* Flip to face right */
    }

    .dog {
      animation: runDog 6s linear infinite;
    }

    .cat {
      animation: runCat 6s linear infinite;
      animation-delay: 0.5s;
    }

    @keyframes runDog {
      0%   { left: -100px; }
      100% { left: 110%; }
    }

    @keyframes runCat {
      0%   { left: -150px; }
      100% { left: 110%; }
    }

    h1 {
      text-align: center;
      margin: 20px;
      color: #444;
    }
  </style>
</head>
<body>
  <h1>🐱 Cat chasing 🐶 Dog!</h1>
  <div class="dog">🐶</div>
  <div class="cat">🐱</div>
  <div class="ground"></div>
</body>
</html>



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cool Car Animation</title>
  <style>
    body {
      margin: 0;
      overflow: hidden;
      background: linear-gradient(to top, #87ceeb 60%, #ffffff 40%);
    }

    .road {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100px;
      background: #333;
      box-shadow: 0 -5px 0 #444;
    }

    .car {
      position: absolute;
      bottom: 110px;
      left: -300px;
      width: 200px;
      height: 100px;
      background: red;
      border-radius: 20px 20px 10px 10px;
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
  </style>
</head>
<body>
  <div class="road"></div>
  <div class="car" id="car">
    <div class="window"></div>
  </div>

  <script>
    // Smoke generator
    const car = document.getElementById('car');

    function createSmoke() {
      const smoke = document.createElement('div');
      smoke.classList.add('smoke');
      car.appendChild(smoke);

      setTimeout(() => {
        car.removeChild(smoke);
      }, 2000);
    }

    setInterval(createSmoke, 500);
  </script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Cool Flower Animation</title>
<style>
  body {
    background: #282c34;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    margin: 0;
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

<div class="flower">
  <div class="petal" style="--angle: 0deg;"></div>
  <div class="petal" style="--angle: 45deg;"></div>
  <div class="petal" style="--angle: 90deg;"></div>
  <div class="petal" style="--angle: 135deg;"></div>
  <div class="petal" style="--angle: 180deg;"></div>
  <div class="petal" style="--angle: 225deg;"></div>
  <div class="petal" style="--angle: 270deg;"></div>
  <div class="petal" style="--angle: 315deg;"></div>
  <div class="center"></div>
</div>

</body>
</html>



