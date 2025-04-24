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
        const contactSection = document.querySelector('.contact-section');
        const homeLink = document.querySelector(".nav-links a[href='#home']");
        const aboutLink = document.querySelector(".nav-links a[href='#about']");
        const workLink = document.querySelector(".nav-links a[href='#work']");
        const contactLink = document.querySelector(".nav-links a[href='#contact']");

        const heroSectionPosition = heroSection.getBoundingClientRect().top;
        const aboutSectionPosition = aboutSection.getBoundingClientRect().top;
        const workSectionPosition = workSection.getBoundingClientRect().top;
        const certificateSectionPosition = certificate.getBoundingClientRect().top;
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

const projectCards = document.querySelectorAll('.work-card');
  const projectModal = document.getElementById('projectModal');
  const closeBtn = document.querySelector('#projectModal .close-btn');
  const viewCaseStudyBtn = document.getElementById('viewCaseStudyBtn');
  const projectPasswordInput = document.getElementById('projectPassword');
projectPasswordInput.addEventListener('input', () => {
    errorMessage.style.display = 'none';
  });
  const errorMessage = document.getElementById('error-message');
  const projectTitle = document.getElementById('projectTitle');

  projectCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      projectModal.style.display = 'block';
      viewCaseStudyBtn.setAttribute('data-target', `project${index + 1}.html`);
      const cardTitle = card.querySelector('.subtitle.subtitle-secondary').innerText;
      projectTitle.innerText = cardTitle;
    });
  });

  closeBtn.onclick = function () {
    projectModal.style.display = 'none';
    projectPasswordInput.value = '';
    errorMessage.style.display = 'none';
  }

  window.onclick = function (event) {
    if (event.target == projectModal) {
      projectModal.style.display = 'none';
      projectPasswordInput.value = '';
      errorMessage.style.display = 'none';
    }
  }

  viewCaseStudyBtn.addEventListener('click', () => {
    const correctPassword = 'V2024';
    if (projectPasswordInput.value === correctPassword) {
      const successMessage = document.createElement('p');
      successMessage.className = 'success-message';
      successMessage.innerText = 'Password correct! Redirecting to the case study...';
      
      projectModal.querySelector('.modal-body').appendChild(successMessage);
      const targetPage = viewCaseStudyBtn.getAttribute('data-target');
      setTimeout(() => {
      window.location.href = targetPage;
    }, 1000);
    } else {
      errorMessage.style.display = 'block';
    }
  });


document.addEventListener("DOMContentLoaded", function () {
        const video = document.getElementById("about-video");
        const fallbackImage = document.getElementById("fallback-image");

        // Check if video can play
        video.onerror = function () {
            // Hide video and show fallback image if the video fails to load
            video.style.display = "none";
            fallbackImage.style.display = "block";
        };
    });

function scrollCarousel(direction) {
  const track = document.getElementById('carousel-track');
  const scrollAmount = 300;
  track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

// Auto scroll every 30 seconds
setInterval(() => {
  scrollCarousel(1);
}, 30000); // 30000ms = 30s

