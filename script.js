const imageSlider = document.querySelector('.image-slider');
const images = document.querySelectorAll('.image-slider img');
const imageWidth = images[0].clientWidth;

let currentIndex = 0;

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function updateSlider() {
    imageSlider.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

setInterval(nextImage, 3000); // Change image every 3 seconds

