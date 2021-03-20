document.querySelectorAll('.categories-list__link').forEach((item) =>
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href');

        document.querySelectorAll('.portfolio__category-gallery').forEach(
            (child) => child.classList.remove('portfolio__gallery--enabled')
        );

        document.getElementById(id).classList.add('portfolio__gallery--enabled');
    })
)