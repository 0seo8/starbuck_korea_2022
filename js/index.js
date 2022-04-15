const $input = document.querySelector('.sub-menu input[type=text]');
const $searchIcon = document.querySelector('.sub-menu .material-icons');
const $badgeEl = document.querySelector('.badges');
const $fadeEls = document.querySelectorAll('.visual .fade-in');
const $promotionEls = document.querySelectorAll('.promotion .fade-in')

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


$fadeEls.forEach(function ($fadeEl, index) {
  gsap.to($fadeEl, 1, {
    delay: (index+1) * .7,    //=> 0.7초 / 1.4초 / 2.1초 / 2.8초 순으로 지연이 됨.
    opacity: 1
  });
});

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});

$promotionEls.forEach(function($promotionEl, index) {
  gsap.to($promotionEl, 1, {
    delay: .7,
    opacity: 1
  })
})


const spyEls = document.querySelectorAll('section.scroll-spy') // section이라는 태그 중 scroll-spy가 붙은 요소들을 전부 찾겠다.
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})
