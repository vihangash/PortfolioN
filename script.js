// Script for toggling mobile menu visibility
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
window.addEventListener('scroll', () => {
        const aboutSection = document.querySelector('.about-section');
        const aboutLink = document.querySelector(".nav-links a[href='#about']");
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            aboutSection.classList.add('visible');
            aboutLink.classList.add('active');
        } else {
            aboutLink.classList.remove('active');
        }
    });
