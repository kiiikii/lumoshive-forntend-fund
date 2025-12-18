const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const nav = document.querySelector("nav");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

// Scroll effect sederhana untuk navbar
window.addEventListener('scroll', function() {
    // Hitung tinggi hero section
    const heroHeight = document.querySelector('.hero-wrapper').offsetHeight;
    const scrollPosition = window.scrollY;
    
    // Jika scroll sudah melewati hero section, ubah navbar
    if (scrollPosition > heroHeight - 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});