// JavaScript for Scroll and Hover Interaction

// Adding scroll effect to change navigation style
const navbar = document.getElementById('navbar');

window.onscroll = () => {
  if (window.scrollY > 50) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

// Adding hover effect to change active menu item
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('active');
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('active');
  });
});

// Optional: Highlight menu item on scroll to section
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});
