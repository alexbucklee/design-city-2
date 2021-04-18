document.querySelectorAll('.categories-list__link').forEach((item) =>
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href');

        let portfolioCategoryGalleries = document.querySelectorAll('.portfolio__category-gallery');

        portfolioCategoryGalleries.forEach(
            (item) => item.classList.remove('portfolio__category-gallery--enabled'),
            
        );

        portfolioCategoryGalleries.forEach(
            (item) => item.classList.remove('swiper-container')
        );

        portfolioCategoryGalleries.forEach(
            (item) => item.classList.remove('slideInRight')
        );

        document.querySelectorAll('.categories-list__item').forEach(
            (item) => item.classList.remove('categories-list__item--current')
        );

        item.parentElement.classList.add('categories-list__item--current');

        let targetCategory = document.getElementById(id);

        targetCategory.classList.add('portfolio__category-gallery--enabled');

        targetCategory.classList.add('swiper-container');

        targetCategory.classList.add('slideInRight');

        targetCategory.querySelector('.portfolio__items-slider').scrollLeft = 0;

        swiper.destroy();

        swiper = new Swiper('.swiper-container', {
            freeMode: true,
            slidesPerView: 'auto',
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
              },
        });
    })
)