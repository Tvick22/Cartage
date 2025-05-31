import { pythonURI } from "./config.js";

document.addEventListener("DOMContentLoaded", function () {
  const uploadButton = document.getElementById("upload-btn");
  const fileInput = document.getElementById("file-input");
  const postTitle = document.getElementById("title-input");
  const postDescription = document.getElementById("description-input");

  if (!uploadButton) {
    console.error("Error: Can not find upload button in DOM (id='upload-btn')");
    return;
  }
  if (!fileInput) {
    console.error("Error: Can not find file input in DOM (id='file-input')");
    return;
  }
  if (!postTitle) {
    console.error("Error: Can not find file input in DOM (id='title-input')");
    return;
  }
  if (!postDescription) {
    console.error(
      "Error: Can not find file input in DOM (id='description-input')",
    );
    return;
  }

  uploadButton.addEventListener("click", () => upload());
});

function upload() {
  const fileInput = document.getElementById("file-input");
  const postTitle = document.getElementById("title-input").value;
  const postDescription = document.getElementById("description-input").value;
  const file = fileInput.files[0];

  //create post
  fetch(`${pythonURI}/api/post`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "include", // include, same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "X-Origin": "client", // New custom header to identify source
    },
    body: JSON.stringify({
      title: postTitle,
      description: postDescription,
    }),
  })
    .then((response) => response.json())
    .then((post) => {
      //after making post, upload image.
      const formData = new FormData();

      console.log(post);
      console.log(post.id);
      formData.append("file", file);
      formData.append("post_id", post.id);
      formData.append("uid", post.user.id);

      fetch(`${pythonURI}/api/upload`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include", // include, same-origin, omit
        headers: {
          "X-Origin": "client", // New custom header to identify source
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => console.log("Success:", result))
        .catch((error) => console.error("Error:", error));
    })
    .catch((error) => console.error("Error:", error));
}
