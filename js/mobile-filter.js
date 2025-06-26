const openBtn = document.querySelector('.mobile-filter__btn-open');
const closeBtn = document.querySelector('.mobile-filter__btn-close');
const filter = document.querySelector('.mobile-filter');
const overlay = document.querySelector('.mobile-filter-overlay');

openBtn.addEventListener('click', () => {
    filter.classList.add('is-open');
    overlay.classList.add('active');
});

function closeFilter() {
    filter.classList.remove('is-open');
    overlay.classList.remove('active');
}

closeBtn.addEventListener('click', closeFilter);
overlay.addEventListener('click', closeFilter);