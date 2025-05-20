---
layout: base
title: Dashboard
search_exclude: true
menu: nav/mainHeader.html
menu_color: primary
menu_text_color: black
---

<div class="flex min-h-screen bg-[{{site.colors.background}}]">
  <!-- Sidebar -->
  <aside class="w-64 bg-white border-r border-gray-200 p-6 shadow-lg">
    <h2 class="text-3xl font-semibold text-[{{site.colors.primary}}] mb-10">Admin Dashboard</h2>
    <nav class="flex flex-col space-y-4">
      <button
        class="text-left px-5 py-3 bg-[{{site.colors.secondary}}] hover:bg-[{{site.colors.secondary-hover}}] text-white font-semibold rounded-md shadow-md transition-all"
        onclick="showSection('road-management')"
      >
        Road Management
      </button>
      <button
        class="text-left px-5 py-3 bg-[{{site.colors.secondary}}] hover:bg-[{{site.colors.secondary-hover}}] text-white font-semibold rounded-md shadow-md transition-all"
        onclick="showSection('resident-reviews')"
      >
        Citizen Reviews
      </button>
    </nav>
  </aside>

  <!-- Main Content -->
  <main class="flex-1 p-10 overflow-y-auto bg-[{{site.colors.background}}]">
    <!-- Road Management Section -->
    <section id="road-management" class="hidden">
      <h2 class="text-4xl font-semibold text-[{{site.colors.secondary}}] mb-6">Road Management</h2>
      <div class="w-full flex flex-wrap justify-center">
        <div class="w-full mt-8 overflow-x-auto">
          <table class="min-w-full  divide-y divide-gray-200 border border-gray-300 rounded-xl shadow-lg bg-white">
            <thead class="bg-[{{site.colors.secondary}}] text-white">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Road ID</th>
                <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Road Name</th>
                <th scope="col" class="px-6 py-3 text-right text-sm font-semibold uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody id="road-table-body" class="divide-y divide-gray-100">
              <!-- Rows will be inserted here -->
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <section id="resident-reviews" class="hidden">
      <h2 class="text-4xl font-semibold text-[{{site.colors.secondary}}] mb-6">Citizen Road Reviews</h2>
      <p class="text-lg text-gray-600 mb-8">Recent feedback from community members regarding traffic and road quality.</p>
      <div id="reviews-section" class="space-y-6 max-h-[700px] overflow-y-auto pr-6">
        <!-- Reviews will be inserted here dynamically -->
      </div>
    </section>
  </main>
</div>

<script>
  function addRoadEntry(id, name) {
    const tableBody = document.getElementById('road-table-body');

    const row = document.createElement('tr');
    row.className = 'hover:bg-gray-50';

    row.innerHTML = `
      <td class="px-6 py-4 text-sm text-gray-900">${id}</td>
      <td class="px-6 py-4 text-sm text-gray-900">${name}</td>
      <td class="px-6 py-4 text-sm text-right space-x-2">
        <button class="px-3 py-1 bg-[{{site.colors.primary}}] hover:bg-[{{site.colors.primary-hover}}] text-white rounded-md text-sm shadow">
          Edit
        </button>
        <button class="px-3 py-1 bg-[{{site.colors.accent.red}}] hover:bg-[{{site.colors.accent.red-hover}}] text-white rounded-md text-sm shadow">
          Delete
        </button>
      </td>
    `;

    tableBody.appendChild(row);
  }

  let pythonURI;
  if (location.hostname === "localhost") {
    pythonURI = "http://localhost:8887";
  } else if (location.hostname === "127.0.0.1") {
    pythonURI = "http://127.0.0.1:8887";
  } else {
    pythonURI = "https://motor.stu.nighthawkcodingsociety.com";
  }

  async function getAllRoads() {
    const fetchOptions = {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "X-Origin": "client", // New custom header to identify source
      },
    };

    const endpoint = pythonURI + "/api/roads"

     try {
         const response = await fetch(endpoint, fetchOptions);
         if (!response.ok) {
             throw new Error('Failed to fetch road data');
         }
         return await response.json();
     } catch (error) {
         console.error('Error fetching road data:', error);
         return null;
     }
  }

  getAllRoads().then((roads) => {
    roads.forEach((road) => {
      addRoadEntry(road.id, road["road_name"])
    })
  })

  async function getAllReviews() {
    const fetchOptions = {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "X-Origin": "client", // New custom header to identify source
      },
    };

    const endpoint = pythonURI + "/api/review"

     try {
         const response = await fetch(endpoint, fetchOptions);
         if (!response.ok) {
             throw new Error('Failed to fetch review data');
         }
         return await response.json();
     } catch (error) {
         console.error('Error fetching user review data:', error);
         return null;
     }
  }



  getAllReviews().then((reviews) => {
    renderReviews(reviews)
  })

 function renderReviews(reviews) {
     const reviewsList = document.getElementById('reviews-section');
     reviewsList.innerHTML = ''; // Clear existing reviews

     reviews.forEach(review => {
         const reviewElement = document.createElement('div');
         reviewElement.classList.add('bg-white', 'p-6', 'rounded-xl', 'border', 'border-gray-200', 'mb-4');

         // Road Name
         const roadname = document.createElement('p');
         roadname.classList.add('text-[{{site.colors.secondary}}]', 'font-extrabold', 'text-xl');
         roadname.textContent = review.road.road_name;
         reviewElement.appendChild(roadname);

         const rating = document.createElement('p');
          rating.classList.add('text-lg', 'mb-3');
          let stars = '';
          for (let i = 1; i <= 5; i++) {
              stars += i <= review.rating ? '★' : '☆';
          }
          rating.textContent = stars;
          reviewElement.appendChild(rating);

         // Review Comment
         const comment = document.createElement('p');
         comment.classList.add('text-gray-800', 'italic', 'text-lg', 'mb-3');
         comment.textContent = review.description;
         reviewElement.appendChild(comment);

         // Author
         const author = document.createElement('p');
         author.classList.add('text-sm', 'text-gray-500', 'text-right');
         author.textContent = `— ${review.user.name}`;
         reviewElement.appendChild(author);

         reviewsList.appendChild(reviewElement);
     });
 }

  // Show the appropriate section
  function showSection(sectionId) {
    document.getElementById("road-management").classList.add("hidden");
    document.getElementById("resident-reviews").classList.add("hidden");
    document.getElementById(sectionId).classList.remove("hidden");
  }

  // Show road management by default
  showSection("road-management");
</script>



