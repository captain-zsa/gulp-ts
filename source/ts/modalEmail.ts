const modalEmailOpenElement = document.querySelector<HTMLButtonElement>('.footer__button-subscribe');
const modalEmailCloseElement = document.querySelector<HTMLButtonElement>('.modal__container--email .modal__button-close');
const modalEmailElement = document.querySelector<HTMLDivElement>('.modal__container--email');

const emailCloseButtonClickHandler = (event: MouseEvent): void => {
  modalEmailElement?.classList.remove('modal__container--showed');
  modalEmailCloseElement?.removeEventListener('click', emailCloseButtonClickHandler);
};

if (modalEmailOpenElement) {
  modalEmailOpenElement.addEventListener('click', (event: MouseEvent): void => {
    event.preventDefault();
    modalEmailElement?.classList.add('modal__container--showed');
    modalEmailCloseElement?.addEventListener('click', emailCloseButtonClickHandler);
  });


}
