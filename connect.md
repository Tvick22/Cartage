---
layout: base
title: Connect
search_exclude: true
menu: nav/mainHeader.html
---

<div class="max-w-6xl mx-auto px-4 py-10 fade-in">
  <h2 class="text-3xl font-bold text-gray-800 mb-6">Communities</h2>

  <!-- Search bar -->
  <input type="text" id="searchInput" placeholder="Search by Community ID or name"
         class="w-full p-3 border border-gray-300 rounded-md mb-6 shadow-sm focus:ring-amber-500 focus:border-amber-500">

  <!-- Table -->
  <div class="overflow-x-auto rounded-lg shadow card-hover bg-white">
    <table class="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
      <thead class="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <tr>
          <th class="p-4 text-left font-medium">Community ID</th>
          <th class="p-4 text-left font-medium">Community Name</th>
          <th class="p-4 text-left font-medium">Category</th>
          <th class="p-4 text-left font-medium"></th>
        </tr>
      </thead>
      <tbody id="groupTableBody" class="divide-y divide-gray-100 bg-white">
        <!-- Populated via JS -->
      </tbody>
    </table>
  </div>

  <!-- Create Group Button -->
  <div class="flex justify-center mt-8">
    <button id="openCreateModal" class="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-medium shadow-md transition">
      Create Community
    </button>
  </div>
</div>

<!-- Create Group Modal -->
<div id="createGroupModal" class="fixed inset-0 hidden bg-black bg-opacity-60 flex items-center justify-center z-50">
  <div class="bg-white text-gray-800 rounded-lg shadow-lg w-full max-w-3xl overflow-y-auto max-h-[90vh] p-6 fade-in">
    <div class="flex justify-between items-center border-b pb-4 mb-6">
      <h3 class="text-2xl font-semibold">Create New Community</h3>
      <button onclick="toggleModal('createGroupModal')" class="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
    </div>
    <div class="space-y-6">
      <div>
        <label for="groupNameInput" class="block font-medium mb-1">Community Name</label>
        <input type="text" id="groupNameInput" placeholder="Enter community name"
              class="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500">
      </div>
      <div>
        <label for="groupCategorySelect" class="block font-medium mb-1">Community Category</label>
        <select id="groupCategorySelect"
                class="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500">
          <option value="">Select a category</option>
          <option value="sports">Sports</option>
          <option value="scenic">Scenic</option>
          <option value="other">Other Photography</option>
        </select>
      </div>
    </div>
    <div class="flex justify-end gap-4 mt-6 border-t pt-4">
      <button onclick="toggleModal('createGroupModal')" class="px-5 py-2 bg-gray-200 hover:bg-gray-300 rounded-md font-medium text-gray-700">Cancel</button>
      <button id="createGroupBtn" class="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-md font-medium shadow">Create Community</button>
    </div>
  </div>
</div>

<!-- Edit Group Modal -->
<div id="editGroupModal" class="fixed inset-0 hidden bg-black bg-opacity-60 flex items-center justify-center z-50">
  <div class="bg-white text-gray-800 rounded-lg shadow-lg w-full max-w-3xl overflow-y-auto max-h-[90vh] p-6 fade-in">
    <div class="flex justify-between items-center border-b pb-4 mb-6">
      <h3 class="text-2xl font-semibold">Edit Communities</h3>
      <button onclick="toggleModal('editGroupModal')" class="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
    </div>
    <div class="space-y-6">
      <input type="hidden" id="editGroupId" />
      <div>
        <label for="editGroupNameInput" class="block font-medium mb-1">Community Name</label>
        <input type="text" id="editGroupNameInput" placeholder="Enter group name"
               class="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500">
        <label for="editGroupCategoryInput" class="block font-medium mb-1">category</label>
        <input type="text" id="editGroupCategoryInput" placeholder="Enter group category"
               class="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500">
      </div>
      <div class="bg-gray-100 border border-gray-300 rounded-md p-4 max-h-[400px] overflow-y-auto">
        <input type="text" id="userSearchEdit" placeholder="Search users..."
               class="w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500">
        <div id="editUserList" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- Users checkboxes -->
        </div>
      </div>
    </div>
    <div class="flex justify-end gap-4 mt-6 border-t pt-4">
      <button onclick="toggleModal('editGroupModal')" class="px-5 py-2 bg-gray-200 hover:bg-gray-300 rounded-md font-medium text-gray-700">Cancel</button>
      <button id="saveEditGroupBtn" class="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-md font-medium shadow">Save Changes</button>
    </div>
  </div>
</div>

<script type="module">
import { pythonURI } from "{{site.baseurl}}/assets/js/api/config.js"
// Modal toggle utility
function toggleModal(id) {
  const modal = document.getElementById(id);
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  } else {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

document.toggleModal = toggleModal

// API setup
const flaskAPI = pythonURI+"/api/groups";  // this now points to Flask
const fetchOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
const postOptions = { ...fetchOptions, method: "POST" };
const putOptions = { ...fetchOptions, method: "PUT" };

// DOM elements
const tableBody = document.getElementById("groupTableBody");

function getTable() {
  fetch(flaskAPI, fetchOptions)
    .then((response) => response.json())
    .then((groups) => {
      tableBody.innerHTML = ""; // clear table before populating
      groups.forEach((group) => {
        const groupId = group.id;
        const name = group.name;
        const category = group.category;

        const row = document.createElement("tr");
        row.className = "group-row";
        row.dataset.groupid = groupId;
        row.dataset.members = (group.members || [])
          .map((m) => (m.name + m.email).toLowerCase())
          .join(" ");

        row.innerHTML = `
          <td class="p-4 bg-gray-300">${groupId}</td>
          <td class="p-4 bg-gray-200">${name}</td>
          <td class="p-4 bg-gray-100">${category}</td>
          <td class="p-4 space-x-2 flex justify-end">
            <button class="bg-blue-500 text-white px-2 py-1 rounded toggle-members" data-target="members-${groupId}">
              View Members
            </button>
            <button class="bg-yellow-400 text-black px-2 py-1 rounded edit-group" data-groupid="${groupId}" data-name="${name}" data-category="${category}">
              Edit
            </button>
          </td>
        `;

        const memberRow = document.createElement("tr");
        memberRow.id = `members-${groupId}`;
        memberRow.className = "hidden";
        memberRow.innerHTML = `
          <td colspan="4">
            <table class="w-full border mt-2">
              <thead class="bg-gray-100">
                <tr>
                  <th class="p-2 border">UID</th>
                  <th class="p-2 border">Name</th>
                  <th class="p-2 border">Email</th>
                </tr>
              </thead>
              <tbody>
                ${(group.members || [])
                  .map(
                    (m) => `
                      <tr>
                        <td class="p-2 border">${m.uid}</td>
                        <td class="p-2 border">${m.name}</td>
                        <td class="p-2 border"><a href="mailto:${m.email}">${m.email}</a></td>
                      </tr>
                    `
                  )
                  .join("")}
              </tbody>
            </table>
          </td>
        `;

        tableBody.appendChild(row);
        tableBody.appendChild(memberRow);
      });
    })
    .catch((error) => console.error("Failed to load groups:", error));
}

// Search
document.getElementById("searchInput").addEventListener("keyup", function () {
  const search = this.value.toLowerCase();
  document.querySelectorAll("tr.group-row").forEach((row) => {
    const groupId = row.dataset.groupid;
    const members = row.dataset.members;
    const match = groupId.includes(search) || members.includes(search);
    row.style.display = match ? "" : "none";
    const details = document.getElementById(`members-${groupId}`);
    if (details) details.style.display = match ? "" : "none";
  });
});
document.getElementById("createGroupBtn").addEventListener("click", () => {
  const groupName = document.getElementById("groupNameInput").value.trim();
  const groupCategory = document.getElementById("groupCategorySelect").value;

  if (!groupName || !groupCategory) {
    alert("Please enter both community name and category.");
    return;
  }

  const groupPayload = {
    name: groupName,
    category: groupCategory,
    personUids: []  // Initially no members
  };

  fetch(flaskAPI, {
    ...postOptions,
    body: JSON.stringify(groupPayload),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to create community");
      alert("Community created successfully!");
      toggleModal("createGroupModal");
      location.reload();
    })
    .catch((error) => {
      console.error("Error creating community:", error);
      alert("Error occurred. See console.");
    });
});

// Edit button
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-group")) {
    const groupId = e.target.dataset.groupid;
    const groupName = e.target.dataset.name;
    const groupCategory = e.target.dataset.Category;

    document.getElementById("editGroupId").value = groupId;
    document.getElementById("editGroupNameInput").value = groupName;
    document.getElementById("editGroupCategoryInput").value = groupCategory;

    toggleModal("editGroupModal");
  }
});

// Save Edit
document.getElementById("saveEditGroupBtn").addEventListener("click", () => {
  const groupId = document.getElementById("editGroupId").value;
  const name = document.getElementById("editGroupNameInput").value.trim();
  const Category = document.getElementById("editGroupCategoryInput").value.trim();

  if (!name || !Category) {
    alert("Name and Category are required.");
    return;
  }

  fetch(`${flaskAPI}/${groupId}`, {
    ...putOptions,
    body: JSON.stringify({ name, Category }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to update group");
      alert("Group updated successfully!");
      toggleModal("editGroupModal");
      location.reload();
    })
    .catch((error) => {
      console.error("Error updating group:", error);
      alert("Error occurred. See console.");
    });
});

// View members toggle
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("toggle-members")) {
    const targetId = e.target.dataset.target;
    const memberRow = document.getElementById(targetId);
    if (memberRow) {
      memberRow.classList.toggle("hidden");
    }
  }
});

// Load groups on page load
document.addEventListener("DOMContentLoaded", () => {
  getTable();
  document.getElementById("openCreateModal").addEventListener("click", () => {
    toggleModal("createGroupModal");
  });
});
</script>
