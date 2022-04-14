const $input = document.querySelector('.sub-menu input[type=text]');
const $searchIcon = document.querySelector('.sub-menu .material-icons');
const $badgeEl = document.querySelector('.badges');


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

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if(window.scrollY > 500 ) {
    //배지숨기기
    gsap.to($badgeEl, .6, {
      opacity: 0
    });

  } else {
    //배지를 보여주기
    gsap.to($badgeEl, .6, {
      opacity: 1
    });
  }
}, 300));
