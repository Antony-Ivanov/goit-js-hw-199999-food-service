import menuList from '../menu.json';
import cardTamplate from './templates/card-templates.hbs';

const gallary = document.querySelector('js-menu');

function createMenu(menuList) {
  return menuList.map(cardTamplate).join('');
}

const itemGallary = createMenu(menuList);
// console.log(itemGallary);
gallary.insertAdjacentHTML('beforeend', itemGallery);
