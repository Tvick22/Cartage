---
layout: base
title: Road Review API Docs
menu: nav/mainHeader.html
---

<div class="max-w-4xl mx-auto p-6 text-gray-800">

  <h1 class="text-4xl font-bold mb-6 border-b pb-2">REVIEW API</h1>

  <h2 class="text-3xl font-bold mb-6 border-b pb-2">Endpoints</h2>

  <div class="mb-10">
    <h3 class="text-2xl font-semibold mb-2">1. Create a Review (POST)</h3>
    <ul class="space-y-2 list-disc pl-6">
      <li><strong>URL</strong>: <code class="bg-gray-100 px-1 rounded">/api/review</code></li>
      <li><strong>Method</strong>: <code class="bg-gray-100 px-1 rounded">POST</code></li>
      <li><strong>Authorization</strong>: Bearer token (JWT)</li>
      <li>
        <strong>Body Parameters</strong> (JSON):
        <ul class="list-disc pl-6">
          <li><code>road_id</code> (int): The ID of the road being reviewed.</li>
          <li><code>description</code> (string): The description of the review.</li>
          <li><code>rating</code> (int): Rating of the road (1-5).</li>
        </ul>
      </li>
      <li>
        <strong>Response</strong> (Success):
        <ul class="list-disc pl-6">
          <li><strong>Code</strong>: <code>200 OK</code></li>
          <li><strong>Body</strong>: The created review details in JSON format.</li>
        </ul>
      </li>
      <li>
        <strong>Response</strong> (Failure):
        <ul class="list-disc pl-6">
          <li><strong>Code</strong>: <code>400 Bad Request</code> — <code>{'message': 'bad data'}</code></li>
          <li><strong>Code</strong>: <code>404 Not Found</code> — <code>{'message': 'road not found'}</code></li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="mb-10">
    <h3 class="text-2xl font-semibold mb-2">2. Get All Reviews (GET)</h3>
    <ul class="space-y-2 list-disc pl-6">
      <li><strong>URL</strong>: <code>/api/review</code></li>
      <li><strong>Method</strong>: <code>GET</code></li>
      <li><strong>Authorization</strong>: None</li>
      <li><strong>Response</strong> (Success): <code>200 OK</code> — List of all reviews in JSON</li>
      <li><strong>Response</strong> (Failure): <code>404 Not Found</code> — <code>{'message': 'Reviews not found'}</code></li>
    </ul>
  </div>

  <div class="mb-10">
    <h3 class="text-2xl font-semibold mb-2">3. Update a Review (PUT)</h3>
    <ul class="space-y-2 list-disc pl-6">
      <li><strong>URL</strong>: <code>/api/review</code></li>
      <li><strong>Method</strong>: <code>PUT</code></li>
      <li><strong>Authorization</strong>: Bearer token (JWT)</li>
      <li>
        <strong>Body Parameters</strong> (JSON):
        <ul class="list-disc pl-6">
          <li><code>id</code> (int): Review ID</li>
          <li><code>description</code> (string): Updated text</li>
          <li><code>rating</code> (int): Updated score (1-5)</li>
        </ul>
      </li>
      <li>
        <strong>Response</strong> (Success):
        <ul class="list-disc pl-6">
          <li><strong>Code</strong>: <code>200 OK</code> — Updated review in JSON</li>
        </ul>
      </li>
      <li>
        <strong>Response</strong> (Failure):
        <ul class="list-disc pl-6">
          <li><strong>Code</strong>: <code>404</code> — <code>{'message': 'review not found'}</code></li>
          <li><strong>Code</strong>: <code>401</code> — <code>{'message': 'can not update review'}</code></li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="mb-10">
    <h3 class="text-2xl font-semibold mb-2">4. Delete a Review (DELETE)</h3>
    <ul class="space-y-2 list-disc pl-6">
      <li><strong>URL</strong>: <code>/api/review</code></li>
      <li><strong>Method</strong>: <code>DELETE</code></li>
      <li><strong>Authorization</strong>: Bearer token (JWT)</li>
      <li><strong>Body Parameters</strong>:
        <ul class="list-disc pl-6">
          <li><code>id</code> (int): ID of the review</li>
        </ul>
      </li>
      <li>
        <strong>Response</strong> (Success): <code>200 OK</code> — <code>{ "message": "Road removed", "deleted": true }</code>
      </li>
      <li>
        <strong>Response</strong> (Failure):
        <ul class="list-disc pl-6">
          <li><code>401</code> — <code>{ "message": "Road not deleted wrong user", "deleted": false }</code></li>
          <li><code>404</code> — <code>{ "message": "review not found" }</code></li>
        </ul>
      </li>
    </ul>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="text-3xl font-bold mb-4">Example Request &amp; Response</h2>

  <h3 class="text-xl font-semibold mb-2">Create a Review (POST)</h3>

  <p class="mb-1 font-medium">Request:</p>
  <pre class="bg-gray-100 text-sm rounded p-4 overflow-x-auto"><code class="language-bash">POST /api/review
  Content-Type: application/json
  Authorization: Bearer &lt;your_token&gt;

  {
    "road_id": 1,
    "description": "The road is in good condition.",
    "rating": 5
  }</code></pre>

  <p class="mt-4 mb-1 font-medium">Response:</p>
  <pre class="bg-gray-100 text-sm rounded p-4 overflow-x-auto"><code class="language-json">{
    "id": 123,
    "user_id": 1,
    "road_id": 1,
    "description": "The road is in good condition.",
    "rating": 5,
    "created_at": "2025-04-25T00:00:00Z"
  }</code></pre>
