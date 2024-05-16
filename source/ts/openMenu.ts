const headerOpenMenu = document.querySelector('.header__burger');
const headerMenu = document.querySelector ('.header__nav');
const headerClosedMenu = document.querySelector('.header__closed');

const HeaderCloseButton = () => {
  headerMenu.classList.remove ('header__nav--showed');
  headerClosedMenu.removeEventListener('click', HeaderCloseButton);
};

if(headerOpenMenu) {
  headerOpenMenu.addEventListener('click', () => {
    headerMenu.classList.add('header__nav--showed');
    headerClosedMenu.addEventListener('click', HeaderCloseButton);
  });
}
