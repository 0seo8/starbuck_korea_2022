const $input = document.querySelector('.sub-menu input[type=text]');
const $searchIcon = document.querySelector('.sub-menu .material-icons');

$searchIcon.addEventListener('click', () => {
  $input.focus()
})

$input.addEventListener('focus', () => {
  $input.setAttribute('placeholder', '통합검색');
  $searchIcon.style.visibility = 'hidden'
})

$input.addEventListener('blur', () => {
  $input.setAttribute('placeholder', '');
  $searchIcon.style.visibility = 'visible'
})

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()