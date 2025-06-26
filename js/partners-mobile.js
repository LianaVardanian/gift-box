window.addEventListener('DOMContentLoaded', () => {
    const tracks = document.querySelectorAll('.mobile-slider__track');
    tracks.forEach(track => {
        track.innerHTML += track.innerHTML;
    });
});
