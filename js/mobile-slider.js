if (window.innerWidth < 768) {
    new Swiper(".mySwiper", {
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
}