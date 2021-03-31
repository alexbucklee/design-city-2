let ifMenuOpened = false;
let navList = document.querySelector('.main-nav__list');
let pageOverlay = document.querySelector('.page__overlay');
let iconMenu = document.querySelector('.main-nav__icon--open');
let iconClose = document.querySelector('.main-nav__icon--close');

function openMenu() {
    ifMenuOpened = !ifMenuOpened;
    if (ifMenuOpened) {
        bodyFixPosition()
        pageOverlay.style.display = 'block';
        iconMenu.style.display = 'none';
        iconClose.style.display = 'block';
    } else {
        bodyUnfixPosition()
        pageOverlay.style.display = 'none';
        iconMenu.style.display = 'block';
        iconClose.style.display = 'none';
    }

    navList.classList.toggle('main-nav__list--closed');
}

document.querySelector('.main-nav__button').addEventListener('click', function(e) {
    e.preventDefault;
    openMenu();
})

pageOverlay.addEventListener('click', function() {
    openMenu();
})
