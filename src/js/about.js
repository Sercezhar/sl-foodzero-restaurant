import { datepicker } from './modules/datepicker';
import { dropdown } from './modules/dropdown';
import { navMenu } from './modules/navMenu';
import { timepicker } from './modules/timepicker';

navMenu();
datepicker();
dropdown(
  '.dropdown__input',
  '.dropdown-options',
  '.dropdown-options__item',
  '.dropdown__icon'
);
timepicker();

const modalBtn = document.querySelector('.about-delicious__button');
const modalBackdrop = document.querySelector('.about-modal__backdrop');

modalBtn.addEventListener('click', () => {
  modalBackdrop.innerHTML = `<iframe
      width="1280"
      height="720"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
      title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>`;
  modalBackdrop.style.display = 'flex';
});

modalBackdrop.addEventListener('click', () => {
  modalBackdrop.innerHTML = '';
  modalBackdrop.style.display = 'none';
});
