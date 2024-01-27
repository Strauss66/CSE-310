const gallery = document.getElementById('gallery');

// Replace this with your own array of image URLs
const images = [
    'images/tree_art.jpg',
    'images/classic_art.jpg',
    'images/lights_art.jpg',
    // ...
];

images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    gallery.appendChild(img);
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');

function openLightbox(imageSrc) {
  lightbox.style.display = 'block';
  lightboxImage.src = imageSrc;
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

// Example usage:
const imageElements = document.getElementsByTagName('img');
for (let i = 0; i < imageElements.length; i++) {
  imageElements[i].addEventListener('click', () => {
    openLightbox(imageElements[i].src);
  });
}

document.getElementsByClassName('close')[0].addEventListener('click', closeLightbox);