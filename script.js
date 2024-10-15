// Script for toggling mobile menu visibility
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Close menu if click occurs outside the menu
window.addEventListener('click', (event) => {
  if (!menuIcon.contains(event.target) && !navMenu.contains(event.target)) {
    navMenu.classList.remove('active');
  }
});
// Script for scroll-based animations
   // Script for scroll-based animations
    window.addEventListener('scroll', () => {
        const heroSection = document.querySelector('.hero-section');
        const aboutSection = document.querySelector('.about-section');
        const workSection = document.querySelector('.work-section');
        const contactSection = document.querySelector('.contact-section');
        const homeLink = document.querySelector(".nav-links a[href='#home']");
        const aboutLink = document.querySelector(".nav-links a[href='#about']");
        const workLink = document.querySelector(".nav-links a[href='#work']");
        const contactLink = document.querySelector(".nav-links a[href='#contact']");

        const heroSectionPosition = heroSection.getBoundingClientRect().top;
        const aboutSectionPosition = aboutSection.getBoundingClientRect().top;
        const workSectionPosition = workSection.getBoundingClientRect().top;
        const contactSectionPosition = contactSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (heroSectionPosition < screenPosition && heroSectionPosition > -screenPosition) {
            homeLink.classList.add('active');
        } else {
            homeLink.classList.remove('active');
        }

        if (aboutSectionPosition < screenPosition) {
            aboutSection.classList.add('visible');
            aboutLink.classList.add('active');
            homeLink.classList.remove('active');
            workLink.classList.remove('active');
            contactLink.classList.remove('active');
        } else {
            aboutLink.classList.remove('active');
        }

        if (workSectionPosition < screenPosition) {
            workSection.classList.add('visible');
            workLink.classList.add('active');
            aboutLink.classList.remove('active');
            contactLink.classList.remove('active');
        } else {
            workLink.classList.remove('active');
        }

        if (contactSectionPosition < screenPosition) {
            contactSection.classList.add('visible');
            contactLink.classList.add('active');
            workLink.classList.remove('active');
            aboutLink.classList.remove('active');
        } else {
            contactLink.classList.remove('active');
        }
    });
// JavaScript for modal functionality
window.onload = function() {
    const downloadBtn = document.getElementById('download-resume-btn');
    const modal = document.getElementById('resumeModal');
    const closeBtn = document.querySelector('.close-btn');

    downloadBtn.onclick = function() {
        modal.style.display = 'block';
    }

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}
