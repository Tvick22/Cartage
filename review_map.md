---
layout: base
search_exclude: true
menu: nav/mainHeader.html
menu_color: primary
menu_text_color: black
title: Review Map
---

<div id="map-content-container" class="w-full h-screen flex">
    <div class="w-full h-full" id="map"></div>
</div>
<link href="https://api.mapbox.com/mapbox-gl-js/v3.11.0/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v3.11.0/mapbox-gl.js"></script>

<script>
mapboxgl.accessToken = "pk.eyJ1IjoidHZpY2syMiIsImEiOiJjbWE0NnZnMjgwM3hqMmxxMGozcG9lZGV3In0.Uzle_LswY-hBLs45_SdBoQ";

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/tvick22/cma1950p2014401so2fzsb0ya",
  center: [-117.1214, 33.0144], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 16, // starting zoom
});

window.addEventListener("load", function () {
  map.resize();
});

const mapElement = document.getElementById("map");
const mapContainer = document.getElementById("map-content-container");

//Review Popup
let popupDiv = document.createElement("div");
popupDiv.className = `
    fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    bg-white p-6 sm:w-2/3 w-1/2 rounded-lg shadow-lg z-20
    hidden
  `;
mapContainer.appendChild(popupDiv);

let backgroundClickZone = document.createElement("div");
backgroundClickZone.className = `
    fixed inset-0
    z-10
    hidden
  `;
backgroundClickZone.addEventListener("click", () => {
  hideReviewPopup();
});
mapContainer.appendChild(backgroundClickZone);

map.on("click", "road", (e) => {
  const road = e.features[0];

  const roadName = road.properties.name;

  if (popupDiv.classList.contains("hidden")) {
    showReviewPopup(roadName);
  } else {
    hideReviewPopup();
  }
});

function hideReviewPopup() {
  mapElement.classList.remove("blur-sm");
  if (currentMarker) {
    currentMarker.remove();
  }
  popupDiv.innerText = ``;
  popupDiv.classList.add("hidden");
  backgroundClickZone.classList.add("hidden");
}

let feature;
let highlightedRoads = [];

map.addInteraction("move-handler", {
  type: "mousemove",
  target: {
    layerId: "road",
  },
  handler: (e) => {
    if (e.feature) {
      if (feature) {
        highlightedRoads.forEach((road) => {
          map.setFeatureState(road, { ["selected"]: false });
        });
        map.setFeatureState(feature, { ["selected"]: false });
      }

      feature = e.feature;
      const roadName = feature.properties.name;

      const allRenderedRoads = map.queryRenderedFeatures({ layers: ["road"] });

      const selectedRoads = allRenderedRoads.filter((road) => {
        if (road.properties.name == roadName) {
          return true;
        } else {
          return false;
        }
      });

      selectedRoads.forEach((road) => {
        highlightedRoads.push(road);
        map.setFeatureState(road, { ["selected"]: true });
      });

      map.setFeatureState(feature, { ["selected"]: true });
    }
  },
});

map.addInteraction("map-handler", {
  type: "mousemove",
  handler: (e) => {
    highlightedRoads.forEach((road) => {
      map.setFeatureState(road, { ["selected"]: false });
    });
    if (feature) {
      const roadName = feature.properties.name;
      highlightedRoads.forEach((road, i) => {
        map.setFeatureState(road, { ["selected"]: false });
        highlightedRoads = [];
      });
      map.setFeatureState(feature, { ["selected"]: false });
      feature = null;
    }

    return false;
  },
});

function showReviewPopup(roadName) {
  mapElement.classList.add("blur-sm");

  popupDiv.innerHTML = `
      <h1 class="text-[{{site.colors.primary}}] font-extrabold text-3xl mb-6 text-center">
          Leave a Review
      </h1>

      <div class="space-y-6">
        <!-- Road Name Display -->
        <div>
          <h2 class="w-full p-4 text-black text-2xl font-bold text-center">
            ${roadName}
          </h2>
        </div>

          <!-- Star Rating -->
          <div class="text-center">
            <p class="text-lg font-medium text-gray-700 mb-2">Rate this road</p>
            <div id="star-inputs" class="flex justify-center space-x-2">
              <button class="star text-gray-300 hover:text-yellow-400 text-4xl focus:outline-none" data-value="1">★</button>
              <button class="star text-gray-300 hover:text-yellow-400 text-4xl focus:outline-none" data-value="2">★</button>
              <button class="star text-gray-300 hover:text-yellow-400 text-4xl focus:outline-none" data-value="3">★</button>
              <button class="star text-gray-300 hover:text-yellow-400 text-4xl focus:outline-none" data-value="4">★</button>
              <button class="star text-gray-300 hover:text-yellow-400 text-4xl focus:outline-none" data-value="5">★</button>
            </div>
            <input type="hidden" id="rating" name="rating" value="0">
          </div>

        <!-- Comment Input -->
        <div>
            <label for="comment" class="block text-lg text-gray-700 font-medium mb-2">Comment</label>
            <textarea id="comment" name="comment" rows="4" class="w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[{{site.colors.primary}}] focus:outline-none" placeholder="Write your review here..." required></textarea>
        </div>

        <!-- Submit Button -->
        <div class="text-center">
            <button id="submit-btn" type="submit" class="mt-4 px-6 py-3 rounded-full bg-[{{site.colors.primary}}] text-white font-semibold shadow-lg hover:bg-[{{site.colors.primary-hover}}] transition-transform duration-300 hover:scale-105">
                Submit Review
            </button>
        </div>
      </div>
    `;

  // Stars
  const stars = popupDiv.querySelectorAll(".star");
  const ratingInput = popupDiv.querySelector("#rating");

  stars.forEach((star, index) => {
    star.addEventListener("mouseenter", () => {
      // Highlight all stars up to the hovered one
      stars.forEach((s, i) => {
        if (i <= index) {
          s.classList.add("text-yellow-400");
          s.classList.remove("text-gray-300");
        } else {
          s.classList.remove("text-yellow-400");
          s.classList.add("text-gray-300");
        }
      });
    });

    star.addEventListener("mouseleave", () => {
      // On mouse leave, reset based on the selected rating
      const selectedRating = parseInt(ratingInput.value);
      stars.forEach((s, i) => {
        if (i < selectedRating) {
          s.classList.add("text-yellow-400");
          s.classList.remove("text-gray-300");
        } else {
          s.classList.remove("text-yellow-400");
          s.classList.add("text-gray-300");
        }
      });
    });

    star.addEventListener("click", () => {
      // Save selected rating
      ratingInput.value = star.getAttribute("data-value");
    });
  });

  // Submit
  const submitBtn = popupDiv.querySelector("#submit-btn");
  const commentInput = popupDiv.querySelector("#comment");
  const starInputBox = popupDiv.querySelector("#star-inputs");

  let starMissingTimeout = false;
  let commentMissingTimeout = false;

  submitBtn.addEventListener("click", () => {
    if (ratingInput.value == 0) {
      if (starMissingTimeout) {
        clearTimeout(starMissingTimeout);
      }
      starInputBox.classList.add("ring-1");
      starInputBox.classList.add("ring-red-500");

      starMissingTimeout = setTimeout(() => {
        starInputBox.classList.remove("ring-1");
        starInputBox.classList.remove("ring-red-500");
      }, 1000);
    }
    if (!commentInput.value) {
      if (commentMissingTimeout) {
        clearTimeout(commentMissingTimeout);
      }
      commentInput.classList.add("ring-1");
      commentInput.classList.add("ring-red-500");

      commentMissingTimeout = setTimeout(() => {
        commentInput.classList.remove("ring-1");
        commentInput.classList.remove("ring-red-500");
      }, 1000);
    }
    if (ratingInput.value == 0 || !commentInput.value) {
      return;
    }
    const rating = ratingInput.value;
    const comment = commentInput.value;

    let stars = "";
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars += `<span class="text-yellow-400 text-4xl">★</span>`; // Yellow for rated stars
      } else {
        stars += `<span class="text-gray-300 text-4xl">★</span>`; // Gray for unselected stars
      }
    }

    popupDiv.innerHTML = `
        <h1 class="text-gray-400 font-extrabold text-3xl mb-6 text-center">
            Confirm Your Review
        </h1>

        <div class="space-y-6">
            <!-- Road Name Display -->
            <div>
                <h2 class="w-full p-4 text-gray-900 text-2xl font-bold text-center">
                    ${roadName}
                </h2>
            </div>

            <!-- Star Rating Display -->
            <div class="text-center">
                <p class="text-lg font-medium text-gray-600 mb-2">Your Rating</p>
                <div class="flex justify-center space-x-2">
                  ${stars}
                </div>
            </div>

            <!-- Comment Display -->
            <div>
                <label for="comment" class="block text-lg text-gray-600 font-medium mb-2">Your Comment</label>
                <p class="w-full p-4 rounded-lg bg-gray-100 text-black">
                    <!-- Dynamically show the comment here -->
                    ${comment}
                </p>
            </div>

            <!-- Confirm Button -->
            <div class="text-center">
              <button id="confirm" type="submit" class="mt-4 px-6 py-3 rounded-full bg-[{{site.colors.primary}}] text-white font-semibold shadow-lg hover:bg-[{{site.colors.primary-hover}}] transition-transform duration-300 hover:scale-105">
                  Confirm Review
              </button>
            </div>
        </div>
      `;

      popupDiv.querySelector("#confirm").onclick=async () => {
        const review = await postReview(roadName, comment, rating)

        if (review) {
          hideReviewPopup()
        }
      }

  });

  popupDiv.classList.remove("hidden");
  backgroundClickZone.classList.remove("hidden");
}

// Mouse Cursor
map.on("mouseenter", "road", function () {
  map.getCanvas().style.cursor = "pointer";
});
map.on("mouseleave", "road", function () {
  map.getCanvas().style.cursor = "";
});

// Map Marker
let currentMarker = null;
map.on("click", "road", (e) => {
  // Remove the old marker if it exists
  if (currentMarker) {
    currentMarker.remove();
  }

  // Add a new marker at the clicked location
  currentMarker = new mapboxgl.Marker().setLngLat(e.lngLat).addTo(map);
});

let pythonURI;
if (location.hostname === "localhost") {
  pythonURI = "http://localhost:8887";
} else if (location.hostname === "127.0.0.1") {
  pythonURI = "http://127.0.0.1:8887";
} else {
  pythonURI = "https://motor.stu.nighthawkcodingsociety.com";
}

async function postReview(roadName, comment, rating) {
  const postOptions = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "include", // include, same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "X-Origin": "client", // New custom header to identify source
    },
    body: JSON.stringify({
      road_name: roadName,
      description: comment,
      rating: rating,
    }),
  };

  const endpoint = pythonURI + "/api/review";

  try {
    const response = await fetch(endpoint, postOptions);

    if (!response.ok) {
      throw new Error(`Failed to POST review: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error POSTing review:", error.message);
  }
}
</script>
