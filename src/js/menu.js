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
