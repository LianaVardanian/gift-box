const current = document.getElementById('current');
const thumbs = document.querySelectorAll('#thumbnails img');
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const thumbnails = document.getElementById("thumbnails");

let index = 0;
const visibleCount = 3;
const total = thumbs.length;

thumbs.forEach(img => {
    img.addEventListener('click', () => {
        current.src = img.src;
        thumbs.forEach(i => i.classList.remove('active'));
        img.classList.add('active');
    });
});

function scrollThumbnails(direction) {
    const maxIndex = total - visibleCount;
    index += direction;
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;
    thumbnails.style.transform = `translateX(-${index * 168}px)`;
}

function openModal() {
    modal.style.display = "block";
    modalImg.src = current.src;
}

function closeModal() {
    modal.style.display = "none";
}
