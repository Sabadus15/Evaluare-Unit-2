let slideIndex = 0;
const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === slideIndex);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === slideIndex);
    });
}

function changeSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

function setSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
}

setInterval(() => changeSlide(1), 5000);
showSlide(slideIndex);