let isLoggedIn = false;  // To track if the admin is logged in

// Predefined credentials for simplicity
const correctUsername = "admin";
const correctPassword = "password123";

// Handle login functionality
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === correctUsername && password === correctPassword) {
    isLoggedIn = true;
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("uploadSection").style.display = "block";
    loadVideos();  // Load available videos
  } else {
    alert("Invalid credentials!");
  }
}

// Handle video upload functionality
function uploadVideo() {
  if (!isLoggedIn) {
    alert("You must be logged in to upload videos.");
    return;
  }

  const videoFile = document.getElementById("videoUpload").files[0];
  const folderName = document.getElementById("folderSelect").value;

  if (!videoFile) {
    alert("Please select a video to upload.");
    return;
  }

  const videoGallery = document.getElementById("videos");

  // Create a new video element to display the uploaded video (simulating an upload here)
  const videoElement = document.createElement("video");
  videoElement.src = URL.createObjectURL(videoFile);
  videoElement.controls = true;
  videoGallery.appendChild(videoElement);

  document.getElementById("status").innerHTML = "Video uploaded successfully!";
  document.getElementById("videoUpload").value = ""; // Clear the file input
}

// Simulate loading videos (this would be from the server in a real application)
function loadVideos() {
  const videoGallery = document.getElementById("videos");

  // Example video links
  const exampleVideos = [
    { title: "Example Video 1", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "Example Video 2", src: "https://www.w3schools.com/html/movie.mp4" },
  ];

  exampleVideos.forEach((video) => {
    const videoElement = document.createElement("video");
    videoElement.src = video.src;
    videoElement.controls = true;
    videoGallery.appendChild(videoElement);
  });
}