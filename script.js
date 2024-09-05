// Toggle the menu display on small screens
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

// Scroll-based animation to fade in sections
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.fade-in-section');
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});
