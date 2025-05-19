---
layout: base
title: Upload page
search_exclude: true
menu: nav/mainHeader.html
---
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Cartage - Photo Upload</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.13/cropper.min.js"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.13/cropper.min.css" rel="stylesheet"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

    body {
      font-family: 'Poppins', sans-serif;
      background-color: #f8fafc;
    }

    .dropzone {
      border: 2px dashed #e5e7eb;
      transition: all 0.4s ease;
    }

    .dropzone.active {
      border-color: #F59E0B;
      background-color: rgba(245, 158, 11, 0.05);
    }

    .preview-image {
      transition: all 0.3s ease;
    }

    .preview-image:hover {
      transform: scale(1.03);
    }
  </style>
</head>
<body class="min-h-screen bg-gradient-to-br from-white to-gray-50">
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <div class="text-center mb-10">
      <h2 class="text-4xl font-bold text-gray-800 mb-3">Upload & Edit Photo</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">Drag, drop or browse to edit your photo with cropping and filters, then upload.</p>
    </div>

    <div id="dropzone" class="dropzone rounded-lg p-12 text-center cursor-pointer bg-white shadow">
      <div class="mx-auto w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
        <i class="fas fa-cloud-upload-alt text-yellow-500 text-4xl animate-bounce"></i>
      </div>
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Drag & Drop your file here</h3>
      <p class="text-gray-500 mb-6">or click to browse</p>
      <input type="file" id="fileInput" class="hidden" accept="image/*">
      <button id="browseBtn" class="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-full transition">
        Select File
      </button>
    </div>

    <div id="editorSection" class="hidden mt-12">
      <div class="grid md:grid-cols-3 gap-6">
        <div class="md:col-span-2">
          <div class="border rounded overflow-hidden aspect-video bg-gray-100">
            <img id="imagePreview" src="" class="w-full h-auto" />
          </div>
        </div>
        <div>
          <h4 class="font-semibold text-gray-700 mb-4">Adjustments</h4>
          <div class="space-y-4">
            <label class="block text-sm">Brightness
              <input type="range" id="brightness" min="0" max="200" value="100" class="w-full">
            </label>
            <label class="block text-sm">Contrast
              <input type="range" id="contrast" min="0" max="200" value="100" class="w-full">
            </label>
            <label class="block text-sm">Saturation
              <input type="range" id="saturate" min="0" max="200" value="100" class="w-full">
            </label>
          </div>
          <button id="cropUploadBtn" class="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full">
            <i class="fas fa-upload mr-2"></i>Upload
          </button>
        </div>
      </div>

      <form id="uploadForm" method="POST" enctype="multipart/form-data" action="/upload" class="hidden">
        <input type="file" name="file" id="hiddenFileInput">
      </form>
    </div>
  </div>

  <script>
    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('fileInput');
    const browseBtn = document.getElementById('browseBtn');
    const imagePreview = document.getElementById('imagePreview');
    const editorSection = document.getElementById('editorSection');
    const brightnessInput = document.getElementById('brightness');
    const contrastInput = document.getElementById('contrast');
    const saturateInput = document.getElementById('saturate');
    const cropUploadBtn = document.getElementById('cropUploadBtn');
    const uploadForm = document.getElementById('uploadForm');
    const hiddenFileInput = document.getElementById('hiddenFileInput');

    let cropper;

    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, preventDefaults, false);
    });

    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, () => dropzone.classList.add('active'), false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, () => dropzone.classList.remove('active'), false);
    });

    dropzone.addEventListener('drop', handleDrop, false);
    browseBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', () => handleFiles(fileInput.files));

    function handleDrop(e) {
      const dt = e.dataTransfer;
      const files = dt.files;
      handleFiles(files);
    }

    function handleFiles(files) {
      const file = files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        imagePreview.src = e.target.result;
        editorSection.classList.remove('hidden');
        initCropper();
      };
      reader.readAsDataURL(file);
    }

    function initCropper() {
      if (cropper) cropper.destroy();
      cropper = new Cropper(imagePreview, {
        aspectRatio: 1,
        viewMode: 1,
        background: false,
        autoCropArea: 1
      });
    }

    function applyFiltersToCanvas(canvas) {
      const brightness = brightnessInput.value / 100;
      const contrast = contrastInput.value / 100;
      const saturate = saturateInput.value / 100;

      const ctx = canvas.getContext('2d');
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        let r = data[i];
        let g = data[i + 1];
        let b = data[i + 2];

        // Apply brightness and contrast
        r = ((r - 128) * contrast + 128) * brightness;
        g = ((g - 128) * contrast + 128) * brightness;
        b = ((b - 128) * contrast + 128) * brightness;

        // Apply saturation
        const avg = (r + g + b) / 3;
        r = avg + (r - avg) * saturate;
        g = avg + (g - avg) * saturate;
        b = avg + (b - avg) * saturate;

        data[i] = Math.min(255, Math.max(0, r));
        data[i + 1] = Math.min(255, Math.max(0, g));
        data[i + 2] = Math.min(255, Math.max(0, b));
      }

      ctx.putImageData(imageData, 0, 0);
    }

    cropUploadBtn.addEventListener('click', () => {
      const canvas = cropper.getCroppedCanvas();
      applyFiltersToCanvas(canvas);
      canvas.toBlob(blob => {
        const file = new File([blob], 'edited-image.png', { type: 'image/png' });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        hiddenFileInput.files = dataTransfer.files;
        uploadForm.submit();
      }, 'image/png');
    });
  </script>
</body>
</html>
