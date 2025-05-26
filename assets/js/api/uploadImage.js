import { pythonURI } from "./config.js";

document.addEventListener("DOMContentLoaded", function () {
  const uploadButton = document.getElementById("upload-btn");
  const fileInput = document.getElementById("file-input");
  if (!uploadButton) {
    console.error("Error: Can not find upload button in DOM (id='upload-btn')");
    return;
  }
  if (!fileInput) {
    console.error("Error: Can not find file input in DOM (id='file-input')");
    return;
  }

  uploadButton.addEventListener("click", () => upload());
});

function upload() {
  const fileInput = document.getElementById("file-input");
  const file = fileInput.files[0];

  const formData = new FormData();
  formData.append("file", file);

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
}
