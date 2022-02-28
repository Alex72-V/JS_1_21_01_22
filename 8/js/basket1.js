'use strict';

//const basketCountEl = document.querySelector('.cartIconWrap span')
const basketCounterEl = document.querySelector('.header__link-basket-count');
const basketTotalValEl = document.querySelector('.basket__total-value');
const basketEl = document.querySelector('.basket__wrp');
const basketTotalEl = document.querySelector('.basket__total');

document.querySelector('.header__link--basket').addEventListener('click', () => {
basketEl.classList.toggle('visually-hidden');
});

const basket = [];

document.querySelector('.products__list').addEventListener('click', event => {
    if (!event.target.closest('.products__button-img-cart')) {
        return;
    } 
    const featuredItem = event.target.closest('.product-description__cart');
    const id = +featuredItem.dataset.id;
    const name = featuredItem.dataset.name;
    const price = +featuredItem.dataset.price;
    addTocart(id, name, price);
});

function addTocart(id, name, price) {
    if (!(id in basket)) {
        basket[id] = {id, name, price,count: 0};
    }
    basket[id].count++;
    basketCounterEl.textContent = getTotalBaskCount().toString();
    basketTotalValEl.textContent = getTotalBasketPrice().toFixed(2);
    renderProductBasket(id);
};

function getTotalBaskCount() {
    return Object.values(basket).reduce((acc, product) => acc + product.count, 0);
}

function getTotalBasketPrice() {
    return Object.values(basket)
    .reduce((acc, product) => acc + product.price * product.count, 0);
}

function renderProductBasket(id) {
    const basketRowEl = basketEl
        .querySelector(`.basket__row[data-productId="${id}"]`);
    if (!basketRowEl) {
        renderNevProductInBasket(id);
        return;
    }

    basketRowEl.querySelector('.product__count').textContent = basket[id].count;

    basketRowEl.querySelector('.product__total-row')
    .textContent = basket[id].count * basket[id].price;

}

function renderNevProductInBasket(productId) {
    const productRow = `
        <div class="basket__row" data-productId="${productId}">
            <div>${basket[productId].name}</div>
            <div>
                <span class="product__count">${basket[productId].count}</span> шт.
            </div>
            <div>$${basket[productId].price}</div>
            <div>
                <span class="product__total-row">${basket[productId].price * basket[productId].count}</span>
            </div>
        </div>
    `;
    basketTotalEl.insertAdjacentHTML('beforebegin', productRow);
}