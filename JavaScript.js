document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;

    function goToSlide(index) {
        if (index >= 0 && index < slides.length) {
            carouselContainer.style.transform = `translateX(-${index * 100}%)`;
            currentIndex = index;
        }
        toggleButtonVisibility();
    }

    function showPrevSlide() {
        goToSlide(currentIndex - 1);
    }

    function showNextSlide() {
        goToSlide(currentIndex + 1);
    }

    function toggleButtonVisibility() {
        prevButton.style.opacity = currentIndex === 0 ? 0 : 1;
        nextButton.style.opacity = currentIndex === slides.length - 1 ? 0 : 1;
    }

    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);

    // Set initial button visibility
    toggleButtonVisibility();
});