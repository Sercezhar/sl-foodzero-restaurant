export function timepicker() {
  const timepickerWrapper = document.querySelector('.timepicker__wrapper');
  const timepickerInput = document.querySelector('input[name="time"]'); // main input
  const timepicker = document.querySelector('.timepicker');
  const hours = document.querySelector('.timepicker__input--hours');
  const minutes = document.querySelector('.timepicker__input--minutes');
  const btnAdd = document.querySelectorAll('.timepicker__add');
  const btnSubtract = document.querySelectorAll('.timepicker__subtract');
  const meridiem = document.querySelector('.timepicker__meridiem');
  const icon = document.querySelector('.timepicker__icon');

  document.addEventListener('click', onClickOutside);
  btnAdd.forEach(button => button.addEventListener('click', addTime));
  btnSubtract.forEach(button => button.addEventListener('click', subtractTime));
  meridiem.addEventListener('click', setMeridiem);

  let hoursValue = Number(hours.value);
  let minutesValue = Number(minutes.value);

  // add hours/minutes
  function addTime(e) {
    const ariaLabel = e.currentTarget.ariaLabel;

    if (ariaLabel === 'hours-setter') {
      if (hoursValue == 12) {
        return;
      }

      if (hoursValue < 9) {
        hours.value = '0' + (hoursValue += 1);
      } else {
        hours.value = hoursValue += 1;
      }
    } else {
      if (minutesValue == 55) {
        return;
      }

      if (minutesValue < 5) {
        minutes.value = '0' + (minutesValue += 5);
      } else {
        minutes.value = minutesValue += 5;
      }
    }

    setMainTime();
  }

  // subtract hours/minutes
  function subtractTime(e) {
    const ariaLabel = e.currentTarget.ariaLabel;

    if (ariaLabel === 'hours-setter') {
      if (hoursValue == 0) {
        return;
      }

      if (hoursValue < 11) {
        hours.value = '0' + (hoursValue -= 1);
      } else {
        hours.value = hoursValue -= 1;
      }
    } else {
      if (minutesValue == 0) {
        return;
      }

      if (minutesValue < 15) {
        minutes.value = '0' + (minutesValue -= 5);
      } else {
        minutes.value = minutesValue -= 5;
      }
    }

    setMainTime();
  }

  // set meridiem
  function setMeridiem() {
    const meridiemValue = meridiem.textContent;

    if (meridiemValue === 'PM') {
      meridiem.textContent = 'AM';
    } else {
      meridiem.textContent = 'PM';
    }

    setMainTime();
  }

  // set time to main input
  function setMainTime() {
    const hours = hoursValue.toString().padStart(2, '0');
    const minutes = minutesValue.toString().padStart(2, '0');

    const mainTime = `${hours}:${minutes} ${meridiem.textContent}`;
    timepickerInput.value = mainTime;
  }

  // detect click outside
  function onClickOutside(event) {
    if (!timepickerWrapper.contains(event.target)) {
      timepicker.classList.remove('timepicker--open');
      icon.classList.remove('timepicker__icon--rotate');
    } else if (timepickerInput.contains(event.target)) {
      timepicker.classList.toggle('timepicker--open');
      icon.classList.toggle('timepicker__icon--rotate');
    } else {
      timepicker.classList.add('timepicker--open');
      icon.classList.add('timepicker__icon--rotate');
    }
  }
}
