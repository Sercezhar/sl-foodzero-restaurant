export function navMenu() {
  const menuOpen = document.querySelector('.header__nav-open');
  const menuClose = document.querySelector('.menu__close');
  const menu = document.querySelector('.menu');
  const body = document.querySelector('body');

  menuOpen.addEventListener('click', () => {
    menu.classList.add('menu--open');
    body.classList.add('locked');
  });

  menuClose.addEventListener('click', () => {
    menu.classList.remove('menu--open');
    body.classList.remove('locked');
  });
}
