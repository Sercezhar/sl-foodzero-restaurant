export function burgerMenu() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.main-nav');
  const body = document.querySelector('body');

  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      // open menu
      menu.classList.add('active');
      // animate burger
      burger.classList.add('active');
      // lock scroll
      body.classList.add('locked');
    } else {
      menu.classList.remove('active');
      burger.classList.remove('active');
      body.classList.remove('locked');
    }
  });
  // navbar breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active');
      burger.classList.remove('active');
      body.classList.remove('locked');
    }
  });
}
