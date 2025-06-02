import { pythonURI } from "./config.js";

export async function upload(images, postTitle, postDescription) {
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
      console.log(images);
      //after making post, upload images.
      images.forEach((file) => {
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
      });
    })
    .catch((error) => console.error("Error:", error));
}
