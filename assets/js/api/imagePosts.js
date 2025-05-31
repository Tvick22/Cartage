import { pythonURI, fetchOptions } from "./config.js";

function transformPostData(post) {
  return {
    id: post.id,
    images: post.images.map((img) => {
      console.log(img);
      if (img.upload_status == "completed") {
        return img.img_url;
      } else {
        return "https://archive.org/download/placeholder-image/placeholder-image.jpg";
      }
    }),
    title: post.title || "Untitled",
    username: "@" + (post.user?.uid || "unknown_user"),
    description: post.description || "",
    tags: [], // Placeholder: you can add logic to extract or infer tags
    likes: 0, // Placeholder: add logic if likes are stored somewhere
    isLiked: false, // Placeholder: update based on user state
    isBookmarked: false, // Placeholder: update based on user state
  };
}

export async function getPosts() {
  const response = fetch(`${pythonURI}/api/post`, fetchOptions)
    .then((response) => response.json())
    .then((posts) => {
      return posts.map((post) => transformPostData(post));
    });
  return response;
}
