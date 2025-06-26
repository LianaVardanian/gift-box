window.addEventListener('load', function () {
    const menu = document.querySelector('.partners-section__menu');
    const partnerItems = document.querySelectorAll('.partners-section__link');

    if (!menu || partnerItems.length === 0) return;

    const imgWidth = partnerItems[0].offsetWidth + 10;
    const leftBtn = document.querySelector('.slider-button.prev');
    const rightBtn = document.querySelector('.slider-button.next');

    let currentIndex = 0;

    function updateSlider() {
        menu.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
        menu.style.transition = 'transform 0.3s ease';
    }

    rightBtn?.addEventListener('click', () => {
        if (currentIndex < partnerItems.length - 5) {
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
});
