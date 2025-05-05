---
layout: base
title: Make a Review
search_exclude: true
menu: nav/mainHeader.html
menu_color: secondary
menu_text_color: white
---

<div class="bg-[{{site.colors.background}}] flex justify-center items-center min-h-screen px-4 py-16">
    <div class="bg-white border-2 border-gray-300 p-8 rounded-2xl shadow-xl max-w-xl w-full">
        <h1 class="text-[{{site.colors.primary}}] font-extrabold text-3xl mb-6 text-center">
            Leave a Review
        </h1>

        <div class="space-y-6">
            <!-- Road Name Input -->
            <div>
                <label for="roadName" class="block text-lg text-gray-700 font-medium mb-2">Road Name</label>
                <input type="text" id="roadName" name="roadName" class="w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[{{site.colors.primary}}] focus:outline-none" placeholder="Enter road name" required>
            </div>

            <!-- Comment Input -->
            <div>
                <label for="comment" class="block text-lg text-gray-700 font-medium mb-2">Comment</label>
                <textarea id="comment" name="comment" rows="4" class="w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[{{site.colors.primary}}] focus:outline-none" placeholder="Write your review here..." required></textarea>
            </div>

            <!-- Submit Button -->
            <div class="text-center">
                <button type="submit" class="mt-4 px-6 py-3 rounded-full bg-[{{site.colors.primary}}] text-white font-semibold shadow-lg hover:bg-[{{site.colors.primary-hover}}] transition-transform duration-300 hover:scale-105">
                    Submit Review
                </button>
            </div>
        </div>
    </div>
</div>
