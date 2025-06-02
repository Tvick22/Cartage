---
layout: base
title: Running Worker and API with Docker Compose
menu: nav/mainHeader.html
---

<div class="p-4">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">What is a worker</h2>

     <img
       src="https://www.2foodtrippers.com/wp-content/uploads/2022/11/Counter-at-In-N-Out-Burger-1024x768.jpg"
       alt="Fast food restaurant"
       class="w-full h-64 object-cover rounded-md mb-6 shadow-sm"
     />

     <p class="text-gray-700 mb-4">
       When a user wants to upload a photo, it is sent to a queue. A good visualization of this is a
       <strong class="font-semibold text-gray-900">fast food restaurant</strong>.
     </p>

     <ul class="list-disc list-inside space-y-3 text-gray-700">
       <li>
         Each <strong class="font-semibold text-gray-900">order</strong> is like a
         <strong class="font-semibold text-gray-900">queue job</strong>.
       </li>
       <li>
         Each order needs a <strong class="font-semibold text-gray-900">worker to fulfill it</strong>,
         so it will sit in the queue until a worker picks it up.
         <ul class="list-disc list-inside ml-6 mt-2 space-y-2">
           <li>
             Think of the queue as a <strong class="font-semibold text-gray-900">line</strong>, so each job
             will wait till it is at the front to be picked up.
           </li>
         </ul>
       </li>
       <li>
         When a worker picks up a job, it will asynchronously process it alongside other workers.
         <ul class="list-disc list-inside ml-6 mt-2 space-y-2">
           <li>This means if we have 5 workers, we can handle 5 orders at the same time</li>
           <li><strong class="font-semibold text-gray-900">asynchronous</strong> = at the same time</li>
         </ul>
       </li>
     </ul>
     <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">In our case...</h3>

     <img
       src="{{site.baseurl}}/images/createPost.png"
       alt="Fast food restaurant"
       class="w-full object-cover rounded-md mb-6 shadow-sm"
     />

      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li>We use workers to handle uploading images to the <strong class="font-semibold text-gray-900">AWS S3</strong>.</li>
        <li>Using a <strong class="font-semibold text-gray-900">Database</strong>, we can track the progress of the image as it is sitting in the queue and being processed.</li>
      </ul>
</div>
