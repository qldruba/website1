let currentIndex = 0;
const galleryItems = document.querySelectorAll('.gallery-item');
const totalItems = galleryItems.length;

function showNextImage() {
    // إخفاء الصورة الحالية
    galleryItems[currentIndex].classList.remove('active');

    // الانتقال إلى الصورة التالية
    currentIndex = (currentIndex + 1) % totalItems;

    // إظهار الصورة الجديدة
    galleryItems[currentIndex].classList.add('active');
}

// بدء التقلب التلقائي كل 3 ثواني
setInterval(showNextImage, 3000);

// إظهار الصورة الأولى عند التحميل
window.onload = () => {
    galleryItems[currentIndex].classList.add('active');
};

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.fixed-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Image Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000);
}
showSlides();

// abou us page 
document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".about-us-section");
    const textContent = document.querySelector(".about-us-right");

    function revealOnScroll() {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            textContent.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealOnScroll);
});

//abot3
document.addEventListener("DOMContentLoaded", function () {
    function revealSection() {
        let section = document.querySelector(".about3");
        if (!section) {
            console.error("العنصر .about3 غير موجود!");
            return;
        }
        let sectionPosition = section.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            section.classList.add("visible");
            console.log("تم إظهار القسم!");
        }
    }

    window.addEventListener("scroll", revealSection);
    revealSection(); // لضمان أن العنصر يظهر إذا كان بالفعل في الشاشة عند التحميل
});