window.addEventListener('load', function () {
    const menu = document.querySelector('.partners-section__menu');
    const partnerItems = document.querySelectorAll('.partners-section__link');

    if (!menu || partnerItems.length === 0) return;

    const leftBtn = document.querySelector('.slider-button.prev');
    const rightBtn = document.querySelector('.slider-button.next');

    let currentIndex = 0;
    let visibleItems = 5; // по умолчанию для десктопа
    let imgWidth = 0;

    function calculateVisibleItems() {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 480) {
            visibleItems = 2;
        } else if (screenWidth <= 768) {
            visibleItems = 3;
        } else if (screenWidth <= 1024) {
            visibleItems = 4;
        } else {
            visibleItems = 5;
        }

        imgWidth = partnerItems[0].offsetWidth + 10;
        updateSlider();
    }

    function updateSlider() {
        menu.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
        menu.style.transition = 'transform 0.3s ease';
    }

    rightBtn?.addEventListener('click', () => {
        if (currentIndex < partnerItems.length - visibleItems) {
            currentIndex++;
            updateSlider();
        }
    });

    leftBtn?.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    window.addEventListener('resize', () => {
        calculateVisibleItems();
    });

    calculateVisibleItems();
});
