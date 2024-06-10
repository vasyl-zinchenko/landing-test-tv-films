document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const body = document.body;
  const allMenuLink = document.querySelectorAll('.menu__link');
  const headerContainer = document.querySelector('.header__container');
  let ignoreObserver = false;

  allMenuLink.forEach((el) => {
    el.addEventListener('click', () => {
      ignoreObserver = true;
      toggle.checked = false;
      body.style.overflow = 'auto';
      headerContainer.style.background = 'none';
      setTimeout(() => {
        ignoreObserver = false;
      }, 500);
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

  const sections = document.querySelectorAll('.wrapper');

  const options = {
    root: null,
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    if (!ignoreObserver) {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          window.history.pushState(null, null, `#${entry.target.id}`);
        }
      });
    } else {
      return;
    }
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
