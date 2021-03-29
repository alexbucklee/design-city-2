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