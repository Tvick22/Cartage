---
layout: base
title: Sign Up
permalink: /signup
search_exclude: true
menu: nav/mainHeader.html
---

<div class="flex min-h-screen items-center justify-center px-4 py-12">
  <div class="w-full max-w-md p-8 bg-white rounded-3xl shadow-xl z-10">
    <h2 class="text-center text-4xl font-extrabold text-amber-500 mb-8">
      Sign up for an account
    </h2>

      <!-- Name -->
      <div>
        <label for="name" class="block text-base font-semibold text-gray-700 mb-2">Name</label>
        <input type="text" name="name" id="name" autocomplete="name" required
          class="w-full p-3 rounded-xl border mb-6 border-amber-400 placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-base bg-white text-gray-900">
      </div>

      <!-- Username -->
      <div>
        <label for="username" class="block text-base font-semibold text-gray-700 mb-2">Username</label>
        <input type="text" name="username" id="username" autocomplete="username" required
          class="w-full p-3 rounded-xl border mb-6 border-amber-400 placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-base bg-white text-gray-900">
      </div>

      <!-- Password -->
      <div>
        <label for="password" class="block text-base font-semibold text-gray-700 mb-2">Password</label>
        <input type="password" name="password" id="password" autocomplete="current-password" required
          class="w-full p-3 rounded-xl border mb-6 border-amber-400 placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-base bg-white text-gray-900">
      </div>

          <!-- Confirm Password -->
      <div>
        <label for="confirm-password" class="block text-base font-semibold text-gray-700 mb-2">Confirm Password</label>
        <input type="password" name="confirm-password" id="confirm-password" autocomplete="confirm password" required
          class="w-full p-3 rounded-xl border mb-6 border-amber-400 placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-base bg-white text-gray-900">
      </div>

      <!-- Submit Button -->
      <div>
        <button type="submit"
        id = "submit-btn"
          class="w-full px-5 py-3 rounded-full bg-amber-500 text-white font-semibold shadow-md hover:bg-amber-600 transition transform duration-300 hover:scale-105">
          Sign Up
        </button>
      </div>

      <!-- Message -->
      <p id="message" class="text-red-600 text-center"></p>
  </div>
</div>

<script type="module">
    import { login, pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

    const handleSignup = async function() {
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      // Check if passwords match
      if (password !== confirmPassword) {
          document.getElementById("message").textContent = "Passwords do not match!";
          return false; // Prevent form submission
      }

      const signupOptions = {
          URL: `${pythonURI}/api/user`,
          method: "POST",
          cache: "no-cache",
          body: {
              name: document.getElementById("name").value,
              uid: document.getElementById("username").value,
              password: password,
          }
      };

      fetch(signupOptions.URL, {
          method: signupOptions.method,
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(signupOptions.body)
      })
      .then(response => {
          if (!response.ok) {
              throw new Error(`Signup failed: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          document.getElementById("message").textContent = "Signup successful!";
          window.location.href = '{{site.baseurl}}/login';
      })
      .catch(error => {
          console.error("Signup Error:", error);
          document.getElementById("message").textContent = `Signup Error: ${error.message}`;
      });

      return false; // Prevent default form submission behavior
  };

  document.getElementById("submit-btn").addEventListener("click", handleSignup)
</script>
