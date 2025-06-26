document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.faq-section__button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const container = button.closest('.faq-section__container');
            const answer = container.querySelector('.faq-section__answer');
            const icon = button.querySelector('img');

            const isActive = answer.classList.contains('active');

            document.querySelectorAll('.faq-section__answer').forEach(el => {
                if (el !== answer) {
                    el.style.maxHeight = null;
                    el.classList.remove('active');
                }
            });
            document.querySelectorAll('.faq-section__button img').forEach(img => {
                img.src = './images/faq/button.png';
            });

            if (!isActive) {
                answer.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.src = './images/faq/button-open.png';
            } else {
                answer.style.maxHeight = null;
                answer.classList.remove('active');
                icon.src = './images/faq/button.png';
            }
        });
    });
});
