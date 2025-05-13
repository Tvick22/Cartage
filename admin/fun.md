
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