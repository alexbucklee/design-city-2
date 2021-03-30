let aosOffset;
if (window.innerWidth < 768) {aosOffset = 100} else {aosOffset = 300};

window.addEventListener('resize', function(event) {
    event.preventDefault();
    if (window.innerWidth < 768) {aosOffset = 100} else {aosOffset = 300};
})

AOS.init({
    duration: 500,
    easing: 'ease-out',
    offset: aosOffset,
    once: true
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) (
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
);

function showmap() {
    let process = document.querySelector('.process');
    let processTop = process.offsetTop;

    if (window.pageYOffset > processTop) {
        map.insertAdjacentHTML('afterbegin', '<iframe tabindex="-1" src="https://yandex.ru/map-widget/v1/?um=constructor%3A19de43c8666d69edc9d0aac65d6716b49b455802513d90c1a3251165ed2170d9&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>');
        document.removeEventListener('scroll', showmap);
    }
}

document.addEventListener('scroll', showmap);