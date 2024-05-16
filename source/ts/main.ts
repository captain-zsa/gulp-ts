import './addProduct';
import './openMenu';
import './modalEmail';
import renderProducts from './renderProducts';
import './sliders';
import products from './products';


const catalogList = document.querySelector('.best-selling__product-wrapper');
const catalogItemTemplate = document.querySelector<HTMLTemplateElement>('#product')?.content;

if(catalogItemTemplate) {
  renderProducts(products, catalogItemTemplate, catalogList, false, 'catalog__item');
}
