// AOS

let aosOffset;
if (window.innerWidth < 1024) { aosOffset = 100 } else { aosOffset = 300 };

window.addEventListener('resize', function (event) {
  event.preventDefault();
  if (window.innerWidth < 1024) { aosOffset = 100 } else { aosOffset = 300 };
})

AOS.init({
  duration: 500,
  easing: 'ease-out',
  offset: aosOffset,
  once: true
});

// Якорные ссылки

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) (
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    if (ifMenuOpened) {
      openMenu();
    }

    const blockID = anchor.getAttribute('href');

    var topOfElement = document.querySelector(blockID).offsetTop - 80;
    window.scroll({ top: topOfElement, behavior: "smooth" });
  })
);

// Показать карту

function showmap() {
  let process = document.querySelector('.process');
  let processTop = process.offsetTop;

  if (window.pageYOffset > processTop) {
    map.insertAdjacentHTML('afterbegin', '<iframe tabindex="-1" src="https://yandex.ru/map-widget/v1/?um=constructor%3A19de43c8666d69edc9d0aac65d6716b49b455802513d90c1a3251165ed2170d9&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>');
    document.removeEventListener('scroll', showmap);
  }
}

document.addEventListener('scroll', showmap);

// Запретить скролл

// 1. Фиксация <body>
function bodyFixPosition() {

  setTimeout(function () {
    /* Ставим необходимую задержку, чтобы не было «конфликта» в случае, если функция фиксации вызывается сразу после расфиксации (расфиксация отменяет действия расфиксации из-за одновременного действия) */

    if (!document.body.hasAttribute('data-body-scroll-fix')) {

      // Получаем позицию прокрутки
      let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      // Ставим нужные стили
      document.body.setAttribute('data-body-scroll-fix', scrollPosition); // Cтавим атрибут со значением прокрутки
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = '-' + scrollPosition + 'px';
      document.body.style.left = '0';
      document.body.style.width = '100%';

    }

  }, 15); /* Можно задержку ещё меньше, но у меня работало хорошо именно с этим значением на всех устройствах и браузерах */

}

// 2. Расфиксация <body>
function bodyUnfixPosition() {

  if (document.body.hasAttribute('data-body-scroll-fix')) {

    // Получаем позицию прокрутки из атрибута
    let scrollPosition = document.body.getAttribute('data-body-scroll-fix');

    // Удаляем атрибут
    document.body.removeAttribute('data-body-scroll-fix');

    // Удаляем ненужные стили
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.width = '';

    // Прокручиваем страницу на полученное из атрибута значение
    window.scroll(0, scrollPosition);

  }

}

// Добавить фон навигации
let startNav = document.querySelector('.start__nav');
let mainNav = document.querySelector('.main-nav');
let mainNavDiv = document.querySelector('.main-nav__div');

window.addEventListener('scroll', function() {
  if (window.pageYOffset >= 656) {
    startNav.classList.add('start__nav--bg');
    mainNav.style.height = '5rem';
  } else {    
    startNav.classList.remove('start__nav--bg');
    mainNav.style.height = null;
  }
})