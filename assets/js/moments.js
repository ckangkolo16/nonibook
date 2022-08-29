//image slideshow

const slideshowImages = document.querySelectorAll(".slider1 .slideshow-img");
const slideshowImages2 = document.querySelectorAll(".slider2 .slideshow-img");
const slideshowImages3 = document.querySelectorAll(".slider3 .slideshow-img");

const nextImageDelay = 3000;
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.display = "block";
slideshowImages2[currentImageCounter].style.display = "block";
slideshowImages3[currentImageCounter].style.display = "block";

setInterval(nextImage, nextImageDelay);

function nextImage() {
  slideshowImages[currentImageCounter].style.display = "none";
  slideshowImages2[currentImageCounter].style.display = "none";
  slideshowImages3[currentImageCounter].style.display = "none";

  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
  currentImageCounter = (currentImageCounter + 1) % slideshowImages2.length;
  currentImageCounter = (currentImageCounter + 1) % slideshowImages3.length;

  slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages2[currentImageCounter].style.display = "block";
  slideshowImages3[currentImageCounter].style.display = "block";
}
