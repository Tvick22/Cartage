---
layout: base
title: Upload page
search_exclude: true
menu: nav/mainHeader.html
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cartage - Photo Upload</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        cartage: '#F59E0B',
                        cartageLight: '#FDE68A',
                        cartageDark: '#D97706',
                    },
                    animation: {
                        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'float': 'float 6s ease-in-out infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f8fafc;
        }
        
        .dropzone {
            border: 2px dashed #e5e7eb;
            transition: all 0.3s ease;
        }
        
        .dropzone.active {
            border-color: #F59E0B;
            background-color: rgba(245, 158, 11, 0.05);
        }
        
        .file-item {
            transition: all 0.3s ease;
        }
        
        .file-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .progress-bar {
            transition: width 0.5s ease;
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
    <div class="container mx-auto px-4 py-8 max-w-6xl">
        
        <!-- Main Content -->
        <main>
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-800 mb-3">Upload Your Photos</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Share your moments with the world. Upload high-quality images to showcase your creativity.</p>
            </div>
            
            <!-- Upload Section -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
                <div class="p-8">
                    <div id="dropzone" class="dropzone rounded-lg p-12 text-center cursor-pointer">
                        <div class="mx-auto w-24 h-24 bg-cartageLight rounded-full flex items-center justify-center mb-6">
                            <i class="fas fa-cloud-upload-alt text-cartage text-4xl animate-float"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Drag & Drop your files here</h3>
                        <p class="text-gray-500 mb-6">or click to browse files</p>
                        <input type="file" id="fileInput" class="hidden" multiple accept="image/*">
                        <button id="browseBtn" class="bg-cartage hover:bg-cartageDark text-white font-medium py-2 px-6 rounded-full transition">
                            Select Files
                        </button>
                    </div>
                </div>
                
                <!-- File List -->
                <div id="fileList" class="border-t border-gray-200 p-6 hidden">
                    <h4 class="font-medium text-gray-700 mb-4">Selected Files</h4>
                    <div id="filesContainer" class="space-y-3">
                        <!-- Files will be added here dynamically -->
                    </div>
                    <div class="mt-6 flex justify-end">
                        <button id="uploadBtn" class="bg-cartage hover:bg-cartageDark text-white font-medium py-2 px-6 rounded-full transition flex items-center">
                            <span>Upload All</span>
                            <i class="fas fa-arrow-up ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Preview Section -->
            <div id="previewSection" class="hidden">
                <h3 class="text-2xl font-semibold text-gray-800 mb-6">Your Uploaded Photos</h3>
                <div id="previewContainer" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <!-- Preview items will be added here dynamically -->
                </div>
                
                <div class="mt-12 text-center">
                    <button id="newUploadBtn" class="bg-cartage hover:bg-cartageDark text-white font-medium py-3 px-8 rounded-full transition">
                        <i class="fas fa-plus mr-2"></i> Upload More Photos
                    </button>
                </div>
            </div>
        </main>
        
        <!-- Footer -->
        <footer class="mt-20 pt-8 border-t border-gray-200">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-4 md:mb-0">
                    <p class="text-gray-600">&copy; 2023 Cartage. All rights reserved.</p>
                </div>
                <div class="flex space-x-6">
                    <a href="#" class="text-gray-500 hover:text-cartage transition">
                        <i class="fab fa-instagram text-xl"></i>
                    </a>
                    <a href="#" class="text-gray-500 hover:text-cartage transition">
                        <i class="fab fa-twitter text-xl"></i>
                    </a>
                    <a href="#" class="text-gray-500 hover:text-cartage transition">
                        <i class="fab fa-facebook text-xl"></i>
                    </a>
                    <a href="#" class="text-gray-500 hover:text-cartage transition">
                        <i class="fab fa-pinterest text-xl"></i>
                    </a>
                </div>
            </div>
        </footer>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const dropzone = document.getElementById('dropzone');
            const fileInput = document.getElementById('fileInput');
            const browseBtn = document.getElementById('browseBtn');
            const fileList = document.getElementById('fileList');
            const filesContainer = document.getElementById('filesContainer');
            const uploadBtn = document.getElementById('uploadBtn');
            const previewSection = document.getElementById('previewSection');
            const previewContainer = document.getElementById('previewContainer');
            const newUploadBtn = document.getElementById('newUploadBtn');
            
            let files = [];
            
            // Handle drag and drop events
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                dropzone.addEventListener(eventName, preventDefaults, false);
            });
            
            function preventDefaults(e) {
                e.preventDefault();
                e.stopPropagation();
            }
            
            ['dragenter', 'dragover'].forEach(eventName => {
                dropzone.addEventListener(eventName, highlight, false);
            });
            
            ['dragleave', 'drop'].forEach(eventName => {
                dropzone.addEventListener(eventName, unhighlight, false);
            });
            
            function highlight() {
                dropzone.classList.add('active');
            }
            
            function unhighlight() {
                dropzone.classList.remove('active');
            }
            
            // Handle dropped files
            dropzone.addEventListener('drop', handleDrop, false);
            
            function handleDrop(e) {
                const dt = e.dataTransfer;
                const droppedFiles = dt.files;
                handleFiles(droppedFiles);
            }
            
            // Handle file input
            browseBtn.addEventListener('click', () => {
                fileInput.click();
            });
            
            fileInput.addEventListener('change', function() {
                handleFiles(this.files);
            });
            
            // Process selected files
            function handleFiles(selectedFiles) {
                files = [...selectedFiles];
                if (files.length > 0) {
                    updateFileList();
                    fileList.classList.remove('hidden');
                    previewSection.classList.add('hidden');
                }
            }
            
            // Update the file list UI
            function updateFileList() {
                filesContainer.innerHTML = '';
                
                files.forEach((file, index) => {
                    const fileItem = document.createElement('div');
                    fileItem.className = 'file-item bg-gray-50 rounded-lg p-4 flex items-center justify-between';
                    
                    const fileInfo = document.createElement('div');
                    fileInfo.className = 'flex items-center';
                    
                    const fileIcon = document.createElement('div');
                    fileIcon.className = 'w-10 h-10 rounded bg-cartageLight flex items-center justify-center mr-3';
                    fileIcon.innerHTML = '<i class="fas fa-image text-cartage"></i>';
                    
                    const fileName = document.createElement('div');
                    fileName.className = 'text-sm';
                    
                    const nameSpan = document.createElement('span');
                    nameSpan.className = 'font-medium text-gray-800 block';
                    nameSpan.textContent = file.name;
                    
                    const sizeSpan = document.createElement('span');
                    sizeSpan.className = 'text-gray-500 text-xs';
                    sizeSpan.textContent = formatFileSize(file.size);
                    
                    fileName.appendChild(nameSpan);
                    fileName.appendChild(sizeSpan);
                    
                    fileInfo.appendChild(fileIcon);
                    fileInfo.appendChild(fileName);
                    
                    const fileActions = document.createElement('div');
                    fileActions.className = 'flex items-center';
                    
                    const removeBtn = document.createElement('button');
                    removeBtn.className = 'text-gray-400 hover:text-red-500 transition';
                    removeBtn.innerHTML = '<i class="fas fa-times"></i>';
                    removeBtn.addEventListener('click', () => removeFile(index));
                    
                    fileActions.appendChild(removeBtn);
                    
                    fileItem.appendChild(fileInfo);
                    fileItem.appendChild(fileActions);
                    
                    filesContainer.appendChild(fileItem);
                });
            }
            
            // Remove file from list
            function removeFile(index) {
                files.splice(index, 1);
                if (files.length > 0) {
                    updateFileList();
                } else {
                    fileList.classList.add('hidden');
                }
            }
            
            // Format file size
            function formatFileSize(bytes) {
                if (bytes === 0) return '0 Bytes';
                const k = 1024;
                const sizes = ['Bytes', 'KB', 'MB', 'GB'];
                const i = Math.floor(Math.log(bytes) / Math.log(k));
                return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
            }
            
            // Handle upload
            uploadBtn.addEventListener('click', uploadFiles);
            
            function uploadFiles() {
                if (files.length === 0) return;
                
                // Simulate upload process
                uploadBtn.disabled = true;
                uploadBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Uploading...';
                
                // Clear previous previews
                previewContainer.innerHTML = '';
                
                // Process each file
                files.forEach((file, index) => {
                    const reader = new FileReader();
                    
                    reader.onload = function(e) {
                        // Create preview item
                        const previewItem = document.createElement('div');
                        previewItem.className = 'preview-item bg-white rounded-lg overflow-hidden shadow-md';
                        
                        const imgContainer = document.createElement('div');
                        imgContainer.className = 'relative overflow-hidden bg-gray-100';
                        imgContainer.style.paddingBottom = '100%'; // Square aspect ratio
                        
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.className = 'preview-image absolute h-full w-full object-cover';
                        img.alt = file.name;
                        
                        imgContainer.appendChild(img);
                        
                        const infoContainer = document.createElement('div');
                        infoContainer.className = 'p-3';
                        
                        const fileName = document.createElement('div');
                        fileName.className = 'font-medium text-gray-800 truncate';
                        fileName.textContent = file.name;
                        
                        const fileSize = document.createElement('div');
                        fileSize.className = 'text-xs text-gray-500';
                        fileSize.textContent = formatFileSize(file.size);
                        
                        infoContainer.appendChild(fileName);
                        infoContainer.appendChild(fileSize);
                        
                        previewItem.appendChild(imgContainer);
                        previewItem.appendChild(infoContainer);
                        
                        previewContainer.appendChild(previewItem);
                    };
                    
                    reader.readAsDataURL(file);
                    
                    // Simulate upload delay
                    setTimeout(() => {
                        if (index === files.length - 1) {
                            // Last file processed
                            uploadBtn.innerHTML = '<i class="fas fa-check mr-2"></i> Upload Complete';
                            
                            setTimeout(() => {
                                fileList.classList.add('hidden');
                                previewSection.classList.remove('hidden');
                                uploadBtn.disabled = false;
                                uploadBtn.innerHTML = '<span>Upload All</span><i class="fas fa-arrow-up ml-2"></i>';
                            }, 500);
                        }
                    }, index * 300);
                });
            }
            
            // Handle new upload
            newUploadBtn.addEventListener('click', () => {
                previewSection.classList.add('hidden');
                files = [];
                fileInput.value = '';
            });
        });
    </script>
</body>
</html>