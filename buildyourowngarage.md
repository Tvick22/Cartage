---
layout: base
title: Explore Cars
search_exclude: true
menu: nav/mainHeader.html
permalink: /build-your-garage
---

<button id="buildGarageBtn" class="ml-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded">
  Build Your Own Garage
</button>
<section id="buildGarageSection" class="hidden max-w-xl mx-auto p-6 border border-orange-400 rounded mt-6 bg-orange-50">
  <h2 class="text-2xl font-semibold mb-4 text-orange-700">Build Your Own Garage</h2>
  <!-- Your content here -->
  <p>Here you can customize and build your garage boards!</p>
</section>

document.getElementById("buildGarageBtn").addEventListener("click", () => {
  const section = document.getElementById("buildGarageSection");
  section.classList.toggle("hidden");
});
