export function dropdown(
  dropdownSelector,
  optionsSelector,
  itemSelector,
  iconSelector
) {
  const dropdownButton = document.querySelector(dropdownSelector);
  const options = document.querySelector(optionsSelector);
  const optionsItem = document.querySelectorAll(itemSelector);
  const icon = document.querySelector(iconSelector);

  document.addEventListener('click', handleOptionsVisibility);
  optionsItem.forEach(item => {
    item.addEventListener('click', () => handleOptionClick(item));
  });

  const iconActiveClass = `${iconSelector.slice(1)}--rotate`;
  const itemActiveClass = `${itemSelector.slice(1)}--active`;

  function hideOptions() {
    options.classList.add('visually-hidden');
    icon.classList.remove(iconActiveClass);
  }

  function handleOptionClick(item) {
    dropdownButton.value = item.dataset.option;
    hideOptions();
    optionsItem.forEach(option => {
      option.classList.remove(itemActiveClass);
    });
    item.classList.add(itemActiveClass);
  }

  function handleOptionsVisibility(event) {
    if (event.target.matches(dropdownSelector)) {
      options.classList.toggle('visually-hidden');
      icon.classList.toggle(iconActiveClass);
    }

    if (!event.target.matches(dropdownSelector)) {
      hideOptions();
    }
  }
}
