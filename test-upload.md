---
layout: base
title: Upload page
search_exclude: true
menu: nav/mainHeader.html
---

<label for="title">Post Title:</label>
<input type="text" id="title-input" name="title">

<label for="description">Description:</label>
<textarea id="description-input" name="description" rows="4" cols="50"></textarea>

<input type="file" id="file-input">
<button id="upload-btn">Upload</button>

<script type="module" src="{{site.baseurl}}/assets/js/api/uploadImage.js">
