// Script for toggling mobile menu visibility
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// Script for scroll-based animations
    window.addEventListener('scroll', () => {
        const heroSection = document.querySelector('.hero-section');
        const aboutSection = document.querySelector('.about-section');
        const workSection = document.querySelector('.work-section');
        const homeLink = document.querySelector(".nav-links a[href='#home']");
        const aboutLink = document.querySelector(".nav-links a[href='#about']");        
        const workLink = document.querySelector(".nav-links a[href='#work']");

        const homeSectionPosition = homeSection.getBoundingClientRect().top;
        const aboutSectionPosition = aboutSection.getBoundingClientRect().top;
        const workSectionPosition = workSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (homeSectionPosition < screenPosition) {
            homeSection.Classlist.add('visible')
            homelink.classList.add('active');
            aboutLink.classList.remove('active');
            workLink.classList.remove('active');
        } else {
            homeLink.classList.remove('active');
        }

        if (aboutSectionPosition < screenPosition) {
            aboutSection.classList.add('visible');
            homeLink.classList.remove('active');
            aboutLink.classList.add('active');
            workLink.classList.remove('active');
        } else {
            aboutLink.classList.remove('active');
        }

        if (workSectionPosition < screenPosition) {
            workSection.classList.add('visible');
            homeLink.classList.remove('active');
            workLink.classList.add('active');
            aboutLink.classList.remove('active');
        } else {
            workLink.classList.remove('active');
        }
    });
