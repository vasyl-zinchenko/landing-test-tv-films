document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const body = document.body;
  const allMenuLink = document.querySelectorAll('.menu__link');
  const headerContainer = document.querySelector('.header__container');

  allMenuLink.forEach((el) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = el.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.history.pushState(null, null, `#${targetId}`);
      targetElement.scrollIntoView({ behavior: 'smooth' });

      toggle.checked = false;
      body.style.overflow = 'auto';
      headerContainer.style.background = 'none';
    });
  });

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      body.style.overflow = 'hidden';
      headerContainer.style.backgroundColor = '#1b1b1b';
    } else {
      body.style.overflow = 'auto';
      headerContainer.style.background = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.wrapper');
  
  const options = {
    root: null,
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        window.history.replaceState(null, null, `#${entry.target.id}`); 
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
