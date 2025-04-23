document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.gallery-container');
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentIndex = 0;

    function showImage(index) {
        galleryItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        showImage(currentIndex);
    }

    // Show the first image initially
    showImage(currentIndex);

    // Set the interval for automatic rotation (adjust the time in milliseconds)
    setInterval(nextImage, 3000); // Rotates every 3 seconds
});