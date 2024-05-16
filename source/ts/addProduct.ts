const productAdds = document.querySelectorAll('.product-card__arrow-icon');
const modalProductAdd = document.querySelector('.modal__container--add-product');
const modalProductClose = document.querySelector('.modal__button-close');
const modalContinue = document.querySelector('.modal__button');

const modalClose = () => {
  modalProductAdd.classList.remove('modal__container--showed');
  modalProductClose.removeEventListener('click', modalClose);
};

const modalContinueButton = modalClose;

function openModal() {
  modalProductAdd.classList.add('modal__container--showed');
  modalProductClose.addEventListener('click', modalClose);
  modalContinue.addEventListener('click', modalContinueButton);
}

productAdds.forEach(function(productAdd) {
  productAdd.addEventListener('click', openModal);
});

export {openModal};
