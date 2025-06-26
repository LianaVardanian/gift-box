document.addEventListener('DOMContentLoaded', () => {
    const quantityWrapper = document.querySelector('.bag-section__button');
    const minusBtn = quantityWrapper.querySelector('.bag-section__btn-minus');
    const plusBtn = quantityWrapper.querySelector('.bag-section__btn-plus');
    const valueSpan = quantityWrapper.querySelector('.bag-section__value');

    let quantity = parseInt(valueSpan.textContent);

    minusBtn.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            valueSpan.textContent = quantity;
        }
    });

    plusBtn.addEventListener('click', () => {
        quantity++;
        valueSpan.textContent = quantity;
    });
});
