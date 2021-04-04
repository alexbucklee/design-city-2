document.querySelectorAll('.categories-list__link').forEach((item) =>
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href');

        document.querySelectorAll('.portfolio__category-gallery').forEach(
            (item) => item.classList.remove('portfolio__category-gallery--enabled')
        );

        document.querySelectorAll('.portfolio__category-gallery').forEach(
            (item) => item.classList.remove('swiper-container')
        );

        document.querySelectorAll('.categories-list__item').forEach(
            (item) => item.classList.remove('categories-list__item--current')
        );

        item.parentElement.classList.add('categories-list__item--current');

        document.getElementById(id).classList.add('portfolio__category-gallery--enabled');

        document.getElementById(id).classList.add('swiper-container');

        document.getElementById(id).querySelector('.portfolio__items-slider').scrollLeft = 0;
    })
)