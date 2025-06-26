document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".mobile-menu");
    const openBtn = document.querySelector(".menu-btn-open");
    const closeBtn = document.querySelector(".menu-btn-close");

    if (openBtn && menu && closeBtn) {
        openBtn.addEventListener("click", () => {
            menu.classList.add("is-open");
        });

        closeBtn.addEventListener("click", () => {
            menu.classList.remove("is-open");
        });
    }
});