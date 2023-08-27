export function datepicker() {
  const elem = document.querySelector('input[name="date"]');

  const today = new Date();

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  elem.value = addDays(today, 2).toLocaleDateString();

  const datepicker = new Datepicker(elem, {
    language: 'en-GB',
    daysOfWeekDisabled: [0],
    minDate: addDays(today, 2),
    maxDate: addDays(today, 60),
    prevArrow: `<svg width="25" height="12">
                  <use href="./images/icons.svg#icon-chevron-down"></use>
                </svg>`,
    nextArrow: `<svg width="25" height="12">
                  <use href="./images/icons.svg#icon-chevron-down"></use>
                </svg>`,
  });
}
