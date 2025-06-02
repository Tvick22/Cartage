---
layout: base
title: Explore Cars
search_exclude: true
menu: nav/mainHeader.html
permalink: /build-your-garage
---



<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #ff7f00, #ffffff);
            min-height: 100vh;
            color: #333;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
        }

        /* 3D Car Section */
        .car-customizer {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 0 10px 30px rgba(255, 127, 0, 0.3);
        }

        .customizer-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }

        .customizer-title {
            font-size: 2.5rem;
            color: #ff7f00;
            font-weight: bold;
        }

        .total-cost {
            background: #ff7f00;
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            font-size: 1.5rem;
            font-weight: bold;
        }

        .customizer-content {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 30px;
        }

        .car-viewer {
            background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
            border-radius: 15px;
            padding: 20px;
            height: 500px;
            position: relative;
            overflow: hidden;
        }

        #car-canvas {
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }

        .parts-panel {
            background: rgba(255, 247, 240, 0.8);
            border-radius: 15px;
            padding: 20px;
            height: 500px;
            overflow-y: auto;
        }

        .parts-category {
            margin-bottom: 25px;
        }

        .category-title {
            color: #ff7f00;
            font-size: 1.3rem;
            font-weight: bold;
            margin-bottom: 15px;
            border-bottom: 2px solid #ff7f00;
            padding-bottom: 5px;
        }

        .part-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 15px;
            margin-bottom: 10px;
            background: white;
            border-radius: 8px;
            border: 2px solid transparent;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .part-item:hover {
            border-color: #ff7f00;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 127, 0, 0.3);
        }

        .part-item.selected {
            border-color: #ff7f00;
            background: rgba(255, 127, 0, 0.1);
        }

        .part-info {
            display: flex;
            flex-direction: column;
        }

        .part-name {
            font-weight: bold;
            color: #333;
        }

        .part-price {
            color: #ff7f00;
            font-weight: bold;
        }

        /* Car Gallery Section */
        .car-gallery {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(255, 127, 0, 0.3);
        }

        .gallery-title {
            font-size: 2.5rem;
            color: #ff7f00;
            font-weight: bold;
            margin-bottom: 30px;
            text-align: center;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }

        .car-card {
            position: relative;
            border-radius: 15px;
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .car-card:hover {
            transform: scale(1.05);
        }

        .car-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .car-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .car-card:hover .car-overlay {
            opacity: 1;
        }

        .bookmark-btn {
            background: #ff7f00;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
            display: flex;
            align-items: center;
            gap: 5px;
            transition: background 0.3s ease;
        }

        .bookmark-btn:hover {
            background: #e6700a;
        }

        .bookmark-btn.bookmarked {
            background: #4CAF50;
        }

        /* Bookmarks Dropdown */
        .bookmarks-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
        }

        .bookmarks-toggle {
            background: #ff7f00;
            color: white;
            border: none;
            padding: 15px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.5rem;
            box-shadow: 0 5px 15px rgba(255, 127, 0, 0.4);
            transition: transform 0.3s ease;
        }

        .bookmarks-toggle:hover {
            transform: scale(1.1);
        }

        .bookmarks-count {
            position: absolute;
            top: -5px;
            right: -5px;
            background: #e6700a;
            color: white;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            font-weight: bold;
        }

        .bookmarks-dropdown {
            position: absolute;
            top: 60px;
            right: 0;
            width: 300px;
            max-height: 400px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            overflow-y: auto;
            display: none;
            z-index: 1001;
        }

        .bookmarks-dropdown.show {
            display: block;
        }

        .bookmarks-header {
            padding: 20px;
            border-bottom: 2px solid #ff7f00;
            background: rgba(255, 127, 0, 0.1);
            border-radius: 15px 15px 0 0;
        }

        .bookmarks-header h3 {
            color: #ff7f00;
            font-size: 1.3rem;
        }

        .bookmarked-item {
            display: flex;
            align-items: center;
            padding: 15px;
            border-bottom: 1px solid #eee;
            transition: background 0.3s ease;
        }

        .bookmarked-item:hover {
            background: rgba(255, 127, 0, 0.1);
        }

        .bookmarked-item img {
            width: 60px;
            height: 40px;
            object-fit: cover;
            border-radius: 5px;
            margin-right: 15px;
        }

        .bookmarked-item span {
            flex: 1;
            font-weight: bold;
            color: #333;
        }

        .remove-bookmark {
            background: #ff4444;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.8rem;
        }

        .remove-bookmark:hover {
            background: #cc0000;
        }

        .empty-bookmarks {
            padding: 40px 20px;
            text-align: center;
            color: #999;
        }

        @media (max-width: 768px) {
            .customizer-content {
                grid-template-columns: 1fr;
            }
            
            .gallery-grid {
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            }
            
            .customizer-title, .gallery-title {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- 3D Car Customizer Section -->
        <div class="car-customizer">
            <div class="customizer-header">
                <h2 class="customizer-title">Design Your Dream Car</h2>
                <div class="total-cost">Total: $<span id="total-cost">0</span></div>
            </div>
            <div class="customizer-content">
                <div class="car-viewer">
                    <canvas id="car-canvas"></canvas>
                </div>
                <div class="parts-panel">
                    <div class="parts-category">
                        <h3 class="category-title">Body Kits</h3>
                        <div class="part-item" data-part="body" data-price="5000">
                            <div class="part-info">
                                <span class="part-name">Sport Body Kit</span>
                                <span class="part-price">+$5,000</span>
                            </div>
                        </div>
                        <div class="part-item" data-part="body" data-price="8000">
                            <div class="part-info">
                                <span class="part-name">Luxury Body Kit</span>
                                <span class="part-price">+$8,000</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="parts-category">
                        <h3 class="category-title">Wheels</h3>
                        <div class="part-item" data-part="wheels" data-price="2000">
                            <div class="part-info">
                                <span class="part-name">Racing Wheels</span>
                                <span class="part-price">+$2,000</span>
                            </div>
                        </div>
                        <div class="part-item" data-part="wheels" data-price="3500">
                            <div class="part-info">
                                <span class="part-name">Chrome Wheels</span>
                                <span class="part-price">+$3,500</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="parts-category">
                        <h3 class="category-title">Spoilers</h3>
                        <div class="part-item" data-part="spoiler" data-price="1500">
                            <div class="part-info">
                                <span class="part-name">Carbon Fiber Spoiler</span>
                                <span class="part-price">+$1,500</span>
                            </div>
                        </div>
                        <div class="part-item" data-part="spoiler" data-price="2500">
                            <div class="part-info">
                                <span class="part-name">Wing Spoiler</span>
                                <span class="part-price">+$2,500</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="parts-category">
                        <h3 class="category-title">Paint</h3>
                        <div class="part-item" data-part="paint" data-price="3000">
                            <div class="part-info">
                                <span class="part-name">Metallic Paint</span>
                                <span class="part-price">+$3,000</span>
                            </div>
                        </div>
                        <div class="part-item" data-part="paint" data-price="5000">
                            <div class="part-info">
                                <span class="part-name">Pearl Paint</span>
                                <span class="part-price">+$5,000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Car Gallery Section -->
        <div class="car-gallery">
            <h2 class="gallery-title">Luxury Car Collection</h2>
            <div class="gallery-grid">
                <div class="car-card" data-car-name="Lamborghini Aventador">
                    <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=200&fit=crop" alt="Lamborghini Aventador">
                    <div class="car-overlay">
                        <button class="bookmark-btn" onclick="toggleBookmark(this, 'Lamborghini Aventador', 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=200&fit=crop')">
                            <span>📖</span> Bookmark
                        </button>
                    </div>
                </div>
                
                <div class="car-card" data-car-name="Ferrari 488">
                    <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=200&fit=crop" alt="Ferrari 488">
                    <div class="car-overlay">
                        <button class="bookmark-btn" onclick="toggleBookmark(this, 'Ferrari 488', 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=200&fit=crop')">
                            <span>📖</span> Bookmark
                        </button>
                    </div>
                </div>
                
                <div class="car-card" data-car-name="Porsche 911">
                    <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=200&fit=crop" alt="Porsche 911">
                    <div class="car-overlay">
                        <button class="bookmark-btn" onclick="toggleBookmark(this, 'Porsche 911', 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=200&fit=crop')">
                            <span>📖</span> Bookmark
                        </button>
                    </div>
                </div>
                
 <div class="car-card" data-car-name="McLaren 720S">
    <img src="https://private-user-images.githubusercontent.com/174985765/447684190-2337c015-3ff6-4c8f-80a0-15e8389b1065.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgyOTIxNjAsIm5iZiI6MTc0ODI5MTg2MCwicGF0aCI6Ii8xNzQ5ODU3NjUvNDQ3Njg0MTkwLTIzMzdjMDE1LTNmZjYtNGM4Zi04MGEwLTE1ZTgzODliMTA2NS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUyNlQyMDM3NDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jYWVmYjI5N2FhZWM3ZmE0OTBiMTQ2YzdhOTg1ZDVlYzYyMDQ2NTdjNWJjMjA3MTU4MzM0NzU4ZDJlYmQyNGVkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.OwTAJqyDnnUZ_3UlHtZVz1-W461SfwXRjQzwenS44p8" alt="McLaren 720S">
    <div class="car-overlay">
        <button class="bookmark-btn" onclick="toggleBookmark(this, 'McLaren 720S', 'https://private-user-images.githubusercontent.com/174985765/447684190-2337c015-3ff6-4c8f-80a0-15e8389b1065.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgyOTIxNjAsIm5iZiI6MTc0ODI5MTg2MCwicGF0aCI6Ii8xNzQ5ODU3NjUvNDQ3Njg0MTkwLTIzMzdjMDE1LTNmZjYtNGM4Zi04MGEwLTE1ZTgzODliMTA2NS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUyNlQyMDM3NDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jYWVmYjI5N2FhZWM3ZmE0OTBiMTQ2YzdhOTg1ZDVlYzYyMDQ2NTdjNWJjMjA3MTU4MzM0NzU4ZDJlYmQyNGVkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.OwTAJqyDnnUZ_3UlHtZVz1-W461SfwXRjQzwenS44p8')"
            <span>📖</span> Bookmark
        </button>
    </div>
</div>
                
                <div class="car-card" data-car-name="Bugatti Chiron">
                    <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=200&fit=crop" alt="Bugatti Chiron">
                    <div class="car-overlay">
                        <button class="bookmark-btn" onclick="toggleBookmark(this, 'Bugatti Chiron', 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=200&fit=crop')">
                            <span>📖</span> Bookmark
                        </button>
                    </div>
                </div>
                
                <div class="car-card" data-car-name="Aston Martin DB11">
                    <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=200&fit=crop" alt="Aston Martin DB11">
                    <div class="car-overlay">
                        <button class="bookmark-btn" onclick="toggleBookmark(this, 'Aston Martin DB11', 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=200&fit=crop')">
                            <span>📖</span> Bookmark
                        </button>
                    </div>
                </div>
                
                <div class="car-card" data-car-name="BMW i8">
                    <img src="https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=400&h=200&fit=crop" alt="BMW i8">
                    <div class="car-overlay">
                        <button class="bookmark-btn" onclick="toggleBookmark(this, 'BMW i8', 'https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=400&h=200&fit=crop')">
                            <span>📖</span> Bookmark
                        </button>
                    </div>
                </div>
                
<div class="car-card" data-car-name="Rolls Royce Phantom">
    <img src="https://private-user-images.githubusercontent.com/174985765/447684882-de6d4248-a383-4bb3-a241-aa9963e00a38.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgyOTI0MTgsIm5iZiI6MTc0ODI5MjExOCwicGF0aCI6Ii8xNzQ5ODU3NjUvNDQ3Njg0ODgyLWRlNmQ0MjQ4LWEzODMtNGJiMy1hMjQxLWFhOTk2M2UwMGEzOC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUyNlQyMDQxNThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01NTQ0ZmM2NmQ1ZTBlNDA4M2I3YTQ0NGJlNGYwMGE5YWEzM2FjODRlNDI2NjI1OWJhMjkwOWM2ZGM0ZGRlNjlkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.K9YwRIEFjvDjYzr3IefBaI5q-7_ixW-p1uFwgAB_SaM" alt="Rolls Royce Phantom">
    <div class="car-overlay">
        <button class="bookmark-btn" onclick="toggleBookmark(this, 'Rolls Royce Phantom', 'https://private-user-images.githubusercontent.com/174985765/447684882-de6d4248-a383-4bb3-a241-aa9963e00a38.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgyOTI0MTgsIm5iZiI6MTc0ODI5MjExOCwicGF0aCI6Ii8xNzQ5ODU3NjUvNDQ3Njg0ODgyLWRlNmQ0MjQ4LWEzODMtNGJiMy1hMjQxLWFhOTk2M2UwMGEzOC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUyNlQyMDQxNThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01NTQ0ZmM2NmQ1ZTBlNDA4M2I3YTQ0NGJlNGYwMGE5YWEzM2FjODRlNDI2NjI1OWJhMjkwOWM2ZGM0ZGRlNjlkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.K9YwRIEFjvDjYzr3IefBaI5q-7_ixW-p1uFwgAB_SaM')">
            <span>📖</span> Bookmark
        </button>
    </div>
</div>
                
                <div class="car-card" data-car-name="Mercedes AMG GT">
                    <img src="https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=400&h=200&fit=crop" alt="Mercedes AMG GT">
                    <div class="car-overlay">
                        <button class="bookmark-btn" onclick="toggleBookmark(this, 'Mercedes AMG GT', 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=400&h=200&fit=crop')">
                            <span>📖</span> Bookmark
                        </button>
                    </div>
                </div>
                
                <div class="car-card" data-car-name="Koenigsegg Regera">
                    <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=200&fit=crop" alt="Koenigsegg Regera">
                    <div class="car-overlay">
                        <button class="bookmark-btn" onclick="toggleBookmark(this, 'Koenigsegg Regera', 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=200&fit=crop')">
                            <span>📖</span> Bookmark
                        </button>
                    </div>
                </div>
                
                <div class="car-card" data-car-name="Pagani Huayra">
                    <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=200&fit=crop" alt="Pagani Huayra">
                    <div class="car-overlay">
                        <button class="bookmark-btn" onclick="toggleBookmark(this, 'Pagani Huayra', 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=200&fit=crop')">
                            <span>📖</span> Bookmark
                        </button>
                    </div>
                </div>
                
                <div class="car-card" data-car-name="Tesla Model S Plaid">
                    <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=200&fit=crop" alt="Tesla Model S Plaid">
                    <div class="car-overlay">
                        <button class="bookmark-btn" onclick="toggleBookmark(this, 'Tesla Model S Plaid', 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=200&fit=crop')">
                            <span>📖</span> Bookmark
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bookmarks Dropdown -->
    <div class="bookmarks-container">
        <button class="bookmarks-toggle" onclick="toggleBookmarksDropdown()">
            📖
            <span class="bookmarks-count" id="bookmarks-count">0</span>
        </button>
        <div class="bookmarks-dropdown" id="bookmarks-dropdown">
            <div class="bookmarks-header">
                <h3>My Collection</h3>
            </div>
            <div id="bookmarks-list">
                <div class="empty-bookmarks">
                    No bookmarks yet. Start collecting your favorite cars!
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        // 3D Car Setup
        let scene, camera, renderer, car, selectedParts = {};
        let baseCost = 0;
        let currentCost = baseCost;

        function init3DCar() {
            const canvas = document.getElementById('car-canvas');
            const container = canvas.parentElement;
            
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0xf0f0f0);
            
            camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            
            // Lighting
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
            scene.add(ambientLight);
            
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
            directionalLight.position.set(10, 10, 5);
            directionalLight.castShadow = true;
            directionalLight.shadow.mapSize.width = 2048;
            directionalLight.shadow.mapSize.height = 2048;
            scene.add(directionalLight);
            
            // Create car group
            car = new THREE.Group();
            
            // Car body (main chassis)
            const bodyGeometry = new THREE.BoxGeometry(4, 1.5, 8);
            const bodyMaterial = new THREE.MeshPhongMaterial({ 
                color: 0xff7f00,
                shininess: 100,
                specular: 0x111111
            });
            const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
            body.position.y = 1;
            body.castShadow = true;
            body.receiveShadow = true;
            car.add(body);
            
            // Car roof/cabin
            const roofGeometry = new THREE.BoxGeometry(3.2, 1.2, 4);
            const roofMaterial = new THREE.MeshPhongMaterial({ 
                color: 0xff7f00,
                shininess: 100,
                specular: 0x111111
            });
            const roof = new THREE.Mesh(roofGeometry, roofMaterial);
            roof.position.y = 2.35;
            roof.position.z = -0.5;
            roof.castShadow = true;
            roof.receiveShadow = true;
            car.add(roof);
            
            // Hood
            const hoodGeometry = new THREE.BoxGeometry(3.8, 0.3, 2);
            const hoodMaterial = new THREE.MeshPhongMaterial({ 
                color: 0xff7f00,
                shininess: 100,
                specular: 0x111111
            });
            const hood = new THREE.Mesh(hoodGeometry, hoodMaterial);
            hood.position.y = 1.9;
            hood.position.z = 2.5;
            hood.castShadow = true;
            hood.receiveShadow = true;
            car.add(hood);
            
            // Front bumper
            const bumperGeometry = new THREE.BoxGeometry(4.2, 0.5, 0.8);
            const bumperMaterial = new THREE.MeshPhongMaterial({ 
                color: 0x333333,
                shininess: 50
            });
            const frontBumper = new THREE.Mesh(bumperGeometry, bumperMaterial);
            frontBumper.position.y = 0.5;
            frontBumper.position.z = 4.1;
            car.add(frontBumper);
            
            // Rear bumper
            const rearBumper = new THREE.Mesh(bumperGeometry, bumperMaterial);
            rearBumper.position.y = 0.5;
            rearBumper.position.z = -4.1;
            car.add(rearBumper);
            
            // Wheels
            const wheelGeometry = new THREE.CylinderGeometry(0.8, 0.8, 0.4, 16);
            const wheelMaterial = new THREE.MeshPhongMaterial({ 
                color: 0x222222,
                shininess: 30
            });
            
            // Front left wheel
            const wheel1 = new THREE.Mesh(wheelGeometry, wheelMaterial);
            wheel1.position.set(-2.4, 0.8, 2.8);
            wheel1.rotation.z = Math.PI / 2;
            wheel1.castShadow = true;
            car.add(wheel1);
            
            // Front right wheel
            const wheel2 = new THREE.Mesh(wheelGeometry, wheelMaterial);
            wheel2.position.set(2.4, 0.8, 2.8);
            wheel2.rotation.z = Math.PI / 2;
            wheel2.castShadow = true;
            car.add(wheel2);
            
            // Rear left wheel
            const wheel3 = new THREE.Mesh(wheelGeometry, wheelMaterial);
            wheel3.position.set(-2.4, 0.8, -2.8);
            wheel3.rotation.z = Math.PI / 2;
            wheel3.castShadow = true;
            car.add(wheel3);
            
            // Rear right wheel
            const wheel4 = new THREE.Mesh(wheelGeometry, wheelMaterial);
            wheel4.position.set(2.4, 0.8, -2.8);
            wheel4.rotation.z = Math.PI / 2;
            wheel4.castShadow = true;
            car.add(wheel4);
            
            // Add ground plane
            const groundGeometry = new THREE.PlaneGeometry(20, 20);
            const groundMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccc });
            const ground = new THREE.Mesh(groundGeometry, groundMaterial);
            ground.rotation.x = -Math.PI / 2;
            ground.position.y = -0.5;
            ground.receiveShadow = true;
            scene.add(ground);
            
            scene.add(car);
            
            camera.position.set(10, 6, 10);
            camera.lookAt(0, 1, 0);
            
            // Handle window resize
            window.addEventListener('resize', () => {
                const width = container.clientWidth;
                const height = container.clientHeight;
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
            });
            
            animate();
        }
        
        function animate() {
            requestAnimationFrame(animate);
            car.rotation.y += 0.005;
            renderer.render(scene, camera);
        }
        
        // Parts selection
        document.addEventListener('DOMContentLoaded', function() {
            init3DCar();
            
            const partItems = document.querySelectorAll('.part-item');
            partItems.forEach(item => {
                item.addEventListener('click', function() {
                    const partType = this.getAttribute('data-part');
                    const partPrice = parseInt(this.getAttribute('data-price'));
                    
                    // Remove selection from other parts in the same category
                    const categoryItems = document.querySelectorAll(`[data-part="${partType}"]`);
                    categoryItems.forEach(catItem => catItem.classList.remove('selected'));
                    
                    // Add selection to clicked item
                    this.classList.add('selected');
                    
                    // Update selected parts and cost
                    if (selectedParts[partType]) {
                        currentCost -= selectedParts[partType];
                    }
                    selectedParts[partType] = partPrice;
                    currentCost += partPrice;
                    
                    // Update cost display
                    document.getElementById('total-cost').textContent = currentCost.toLocaleString();
                    
                    // Update car appearance based on selected part
                    updateCarAppearance(partType, this.querySelector('.part-name').textContent);
                });
            });
        });
        
        function updateCarAppearance(partType, partName) {
            // Update the 3D car model based on selected parts
            if (!car || !car.children) return;
            
            switch(partType) {
                case 'paint':
                    // Update car body colors (body, roof, hood)
                    const bodyParts = [car.children[0], car.children[1], car.children[2]]; // body, roof, hood
                    bodyParts.forEach(part => {
                        if (part && part.material) {
                            if (partName.includes('Metallic')) {
                                part.material.color.setHex(0x4169E1); // Royal Blue
                            } else if (partName.includes('Pearl')) {
                                part.material.color.setHex(0xFFD700); // Gold
                            }
                        }
                    });
                    break;
                case 'wheels':
                    // Update wheel colors (last 4 children should be wheels)
                    for (let i = car.children.length - 4; i < car.children.length; i++) {
                        if (car.children[i] && car.children[i].material) {
                            if (partName.includes('Chrome')) {
                                car.children[i].material.color.setHex(0xC0C0C0); // Silver/Chrome
                            } else if (partName.includes('Racing')) {
                                car.children[i].material.color.setHex(0x000000); // Black
                            }
                        }
                    }
                    break;
                case 'spoiler':
                    // Remove existing spoiler if any
                    const existingSpoiler = car.children.find(child => child.userData && child.userData.type === 'spoiler');
                    if (existingSpoiler) {
                        car.remove(existingSpoiler);
                    }
                    
                    // Add new spoiler
                    let spoilerGeometry, spoilerMaterial;
                    if (partName.includes('Carbon Fiber')) {
                        spoilerGeometry = new THREE.BoxGeometry(3.5, 0.2, 0.5);
                        spoilerMaterial = new THREE.MeshPhongMaterial({ color: 0x1a1a1a });
                    } else if (partName.includes('Wing')) {
                        spoilerGeometry = new THREE.BoxGeometry(4, 0.3, 1);
                        spoilerMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
                    }
                    
                    if (spoilerGeometry && spoilerMaterial) {
                        const spoiler = new THREE.Mesh(spoilerGeometry, spoilerMaterial);
                        spoiler.position.set(0, 2.5, -4.5);
                        spoiler.userData = { type: 'spoiler' };
                        spoiler.castShadow = true;
                        car.add(spoiler);
                    }
                    break;
                case 'body':
                    // This could modify the car's overall shape or add body kit elements
                    // For now, we'll just change the bumper colors to indicate body kit changes
                    const bumpers = [car.children[3], car.children[4]]; // front and rear bumpers
                    bumpers.forEach(bumper => {
                        if (bumper && bumper.material) {
                            if (partName.includes('Sport')) {
                                bumper.material.color.setHex(0x222222); // Dark grey
                            } else if (partName.includes('Luxury')) {
                                bumper.material.color.setHex(0x444444); // Lighter grey
                            }
                        }
                    });
                    break;
            }
        }
        
        // Bookmarks functionality
        let bookmarks = [];
        
        function toggleBookmark(button, carName, imageUrl) {
            const existingIndex = bookmarks.findIndex(bookmark => bookmark.name === carName);
            
            if (existingIndex > -1) {
                bookmarks.splice(existingIndex, 1);
                button.classList.remove('bookmarked');
                button.innerHTML = '<span>📖</span> Bookmark';
            } else {
                bookmarks.push({ name: carName, image: imageUrl });
                button.classList.add('bookmarked');
                button.innerHTML = '<span>📖</span> Bookmarked';
            }
            
            updateBookmarksDisplay();
        }
        
        function updateBookmarksDisplay() {
            const count = document.getElementById('bookmarks-count');
            const list = document.getElementById('bookmarks-list');
            
            count.textContent = bookmarks.length;
            
            if (bookmarks.length === 0) {
                list.innerHTML = '<div class="empty-bookmarks">No bookmarks yet. Start collecting your favorite cars!</div>';
            } else {
                list.innerHTML = bookmarks.map((bookmark, index) => `
                    <div class="bookmarked-item">
                        <img src="${bookmark.image}" alt="${bookmark.name}">
                        <span>${bookmark.name}</span>
                        <button class="remove-bookmark" onclick="removeBookmark(${index})">Remove</button>
                    </div>
                `).join('');
            }
        }
        
        function removeBookmark(index) {
            const removedBookmark = bookmarks[index];
            bookmarks.splice(index, 1);
            
            // Update the bookmark button in the gallery
            const carCards = document.querySelectorAll('.car-card');
            carCards.forEach(card => {
                if (card.getAttribute('data-car-name') === removedBookmark.name) {
                    const button = card.querySelector('.bookmark-btn');
                    if (button) {
                        button.classList.remove('bookmarked');
                        button.innerHTML = '<span>📖</span> Bookmark';
                    }
                }
            });
            
            updateBookmarksDisplay();
        }
        
        function toggleBookmarksDropdown() {
            const dropdown = document.getElementById('bookmarks-dropdown');
            dropdown.classList.toggle('show');
        }
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            const dropdown = document.getElementById('bookmarks-dropdown');
            const toggle = document.querySelector('.bookmarks-toggle');
            
            if (!dropdown.contains(event.target) && !toggle.contains(event.target)) {
                dropdown.classList.remove('show');
            }
        });
    </script>



// large_data.js - A file with lots of data for GitHub activity
const largeDataSet = {
  users: [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", age: 28, city: "New York" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", age: 34, city: "Los Angeles" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", age: 25, city: "Chicago" },
    { id: 4, name: "Diana Wilson", email: "diana@example.com", age: 31, city: "Houston" },
    { id: 5, name: "Edward Davis", email: "edward@example.com", age: 29, city: "Phoenix" },
    { id: 6, name: "Fiona Miller", email: "fiona@example.com", age: 27, city: "Philadelphia" },
    { id: 7, name: "George Garcia", email: "george@example.com", age: 33, city: "San Antonio" },
    { id: 8, name: "Hannah Rodriguez", email: "hannah@example.com", age: 26, city: "San Diego" },
    { id: 9, name: "Ian Martinez", email: "ian@example.com", age: 30, city: "Dallas" },
    { id: 10, name: "Julia Anderson", email: "julia@example.com", age: 32, city: "San Jose" },
    { id: 11, name: "Kevin Taylor", email: "kevin@example.com", age: 35, city: "Austin" },
    { id: 12, name: "Laura Thomas", email: "laura@example.com", age: 24, city: "Jacksonville" },
    { id: 13, name: "Michael Jackson", email: "michael@example.com", age: 28, city: "Fort Worth" },
    { id: 14, name: "Nancy White", email: "nancy@example.com", age: 36, city: "Columbus" },
    { id: 15, name: "Oliver Harris", email: "oliver@example.com", age: 29, city: "Charlotte" },
    { id: 16, name: "Patricia Martin", email: "patricia@example.com", age: 31, city: "San Francisco" },
    { id: 17, name: "Quincy Thompson", email: "quincy@example.com", age: 27, city: "Indianapolis" },
    { id: 18, name: "Rachel Garcia", email: "rachel@example.com", age: 33, city: "Seattle" },
    { id: 19, name: "Samuel Lee", email: "samuel@example.com", age: 30, city: "Denver" },
    { id: 20, name: "Tina Clark", email: "tina@example.com", age: 25, city: "Washington" }
  ],
  
  products: [
    { id: 1, name: "Laptop Pro", price: 1299.99, category: "Electronics", stock: 45 },
    { id: 2, name: "Wireless Mouse", price: 29.99, category: "Electronics", stock: 120 },
    { id: 3, name: "Gaming Keyboard", price: 89.99, category: "Electronics", stock: 67 },
    { id: 4, name: "4K Monitor", price: 399.99, category: "Electronics", stock: 23 },
    { id: 5, name: "USB Cable", price: 12.99, category: "Electronics", stock: 200 },
    { id: 6, name: "Desk Chair", price: 199.99, category: "Furniture", stock: 34 },
    { id: 7, name: "Standing Desk", price: 299.99, category: "Furniture", stock: 18 },
    { id: 8, name: "Table Lamp", price: 49.99, category: "Furniture", stock: 56 },
    { id: 9, name: "Bookshelf", price: 129.99, category: "Furniture", stock: 28 },
    { id: 10, name: "Coffee Mug", price: 14.99, category: "Kitchen", stock: 89 },
    { id: 11, name: "Water Bottle", price: 19.99, category: "Kitchen", stock: 145 },
    { id: 12, name: "Notebook", price: 8.99, category: "Office", stock: 167 },
    { id: 13, name: "Pen Set", price: 15.99, category: "Office", stock: 234 },
    { id: 14, name: "Backpack", price: 59.99, category: "Travel", stock: 78 },
    { id: 15, name: "Travel Mug", price: 24.99, category: "Travel", stock: 92 }
  ],

  companies: [
    { id: 1, name: "TechCorp Inc", industry: "Technology", employees: 1500, revenue: 50000000 },
    { id: 2, name: "Global Solutions", industry: "Consulting", employees: 850, revenue: 25000000 },
    { id: 3, name: "Innovation Labs", industry: "Research", employees: 320, revenue: 8000000 },
    { id: 4, name: "Digital Dynamics", industry: "Software", employees: 750, revenue: 35000000 },
    { id: 5, name: "Future Systems", industry: "Technology", employees: 1200, revenue: 42000000 },
    { id: 6, name: "Creative Agency", industry: "Marketing", employees: 180, revenue: 6000000 },
    { id: 7, name: "Data Insights", industry: "Analytics", employees: 420, revenue: 15000000 },
    { id: 8, name: "Cloud Networks", industry: "Infrastructure", employees: 680, revenue: 28000000 },
    { id: 9, name: "Mobile First", industry: "App Development", employees: 290, revenue: 12000000 },
    { id: 10, name: "AI Ventures", industry: "Artificial Intelligence", employees: 540, revenue: 22000000 }
  ],

  countries: [
    { code: "US", name: "United States", population: 331000000, capital: "Washington D.C." },
    { code: "CA", name: "Canada", population: 38000000, capital: "Ottawa" },
    { code: "UK", name: "United Kingdom", population: 67000000, capital: "London" },
    { code: "FR", name: "France", population: 67000000, capital: "Paris" },
    { code: "DE", name: "Germany", population: 83000000, capital: "Berlin" },
    { code: "IT", name: "Italy", population: 60000000, capital: "Rome" },
    { code: "ES", name: "Spain", population: 47000000, capital: "Madrid" },
    { code: "JP", name: "Japan", population: 125000000, capital: "Tokyo" },
    { code: "AU", name: "Australia", population: 25000000, capital: "Canberra" },
    { code: "BR", name: "Brazil", population: 212000000, capital: "Brasília" }
  ],

  colors: [
    "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF",
    "#800000", "#008000", "#000080", "#808000", "#800080", "#008080",
    "#FFA500", "#FFC0CB", "#A52A2A", "#808080", "#000000", "#FFFFFF",
    "#FFD700", "#C0C0C0", "#FF6347", "#40E0D0", "#EE82EE", "#F0E68C"
  ],

  dummyData: {
    lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    booleans: [true, false, true, true, false, false, true, false, true, false],
    dates: ["2024-01-01", "2024-02-15", "2024-03-20", "2024-04-10", "2024-05-25"],
    keywords: ["javascript", "python", "react", "nodejs", "mongodb", "sql", "html", "css"]
  }
};

// Utility functions
function generateRandomId() {
  return Math.random().toString(36).substr(2, 9);
}

function getCurrentTimestamp() {
  return new Date().toISOString();
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function generateRandomUser() {
  const firstNames = ["John", "Jane", "Mike", "Sarah", "David", "Emma", "Chris", "Lisa"];
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller"];
  
  return {
    id: generateRandomId(),
    firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
    lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
    age: Math.floor(Math.random() * 50) + 18,
    createdAt: getCurrentTimestamp()
  };
}

// Sample configurations
const configurations = {
  api: {
    baseUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3,
    endpoints: {
      users: "/users",
      products: "/products",
      orders: "/orders",
      analytics: "/analytics"
    }
  },
  database: {
    host: "localhost",
    port: 5432,
    name: "sample_db",
    ssl: false,
    poolSize: 10
  },
  cache: {
    ttl: 3600,
    maxSize: 1000,
    strategy: "lru"
  }
};

// Export everything
module.exports = {
  largeDataSet,
  generateRandomId,
  getCurrentTimestamp,
  shuffleArray,
  generateRandomUser,
  configurations
};

// Additional sample data for padding
const additionalSampleData = {
  animals: [
    "Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Monkey", "Kangaroo",
    "Penguin", "Dolphin", "Whale", "Shark", "Eagle", "Parrot", "Owl",
    "Bear", "Wolf", "Fox", "Rabbit", "Squirrel", "Deer"
  ],
  
  cities: [
    "New York", "London", "Paris", "Tokyo", "Sydney", "Toronto", "Berlin",
    "Rome", "Madrid", "Amsterdam", "Stockholm", "Copenhagen", "Vienna",
    "Prague", "Budapest", "Warsaw", "Helsinki", "Oslo", "Dublin", "Lisbon"
  ],
  
  foods: [
    "Pizza", "Burger", "Pasta", "Sushi", "Tacos", "Salad", "Soup", "Sandwich",
    "Rice", "Bread", "Cheese", "Chicken", "Beef", "Fish", "Vegetables",
    "Fruits", "Dessert", "Ice Cream", "Cake", "Cookies"
  ],
  
  hobbies: [
    "Reading", "Writing", "Painting", "Drawing", "Photography", "Music",
    "Dancing", "Singing", "Cooking", "Gardening", "Hiking", "Cycling",
    "Swimming", "Running", "Yoga", "Gaming", "Movies", "Travel", "Sports"
  ]
};

// More utility functions for completeness
function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

console.log("Large data file loaded successfully!");
console.log(`Total users: ${largeDataSet.users.length}`);
console.log(`Total products: ${largeDataSet.products.length}`);
console.log(`Total companies: ${largeDataSet.companies.length}`);