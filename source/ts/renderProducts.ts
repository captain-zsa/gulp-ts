import { openModal } from "./addProduct";

export default (products, template, target, isTargetList = false, templateClass = '') => {
    const fragment = document.createDocumentFragment();

    let productEl = template.querySelector('.product-card');

    if(isTargetList) {
        const node = document.createElement('li');
        node.innerHTML = productEl.innerHTML;

        Array.prototype.forEach.call(productEl.attributes, function( attr ) {
            node.setAttribute( attr.name, attr.value );
        });
        node.classList.add(templateClass);

        productEl = node;
    }

    products.forEach(product => {
        const itemEl = productEl.cloneNode(true);
        const imageEl = itemEl.querySelector('.product-card__img');
        const titleEl = itemEl.querySelector('.product-card__name');
        const priceEl = itemEl.querySelector('.product-card__price');
        const oldPriceEl = itemEl.querySelector('.product-card__old-price');
        const button = itemEl.querySelector('.product-card__arrow-icon');
        const { id, name, image, price, oldPrice, status, isBig = false} = product;

        button.addEventListener('click', () => {
            openModal();
        });

        itemEl.dataset.productId = id;
        imageEl.src = image;
        titleEl.textContent = name;
        priceEl.textContent = `${price} ₽`;
        oldPriceEl.textContent = `${oldPrice} ₽`;
        oldPriceEl.style.textDecoration = 'line-through';

        if(isBig) {
            itemEl.classList.add(`product-card--large`);
            itemEl.classList.add(`best-selling__product--1-3`);
        }
        else {
            itemEl.classList.add('best-selling__product--default');
        }

        if(status.length) {
            itemEl.classList.add(`product-card--${status}`);
        }

        fragment.appendChild(itemEl);
    })

    target.innerHTML = '';
    target.append(fragment);
}
