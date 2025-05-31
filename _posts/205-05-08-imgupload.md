---
layout: base
title: Uploading Images Procedure
menu: nav/mainHeader.html
---

![Uploading Images Procedure]({{site.baseurl}}/images/imgupload.png)

<ul class="list-disc list-inside space-y-2 text-gray-800 m-4 mb-12">
  <li>
    <span class="font-medium">User sends HTTP request to the API containing the image file (Multipart)</span>
  </li>
  <li>
    <span class="font-medium">API starts a Transaction with the Database to ensure all below actions are completed</span>
    <ul class="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
      <li>
        <span>API will take the image and make a temporary local copy</span>
      </li>
      <li>
        <span>API will create a table</span>
      </li>
    </ul>
  </li>
</ul>
