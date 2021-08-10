import data from './menu.json';
import template from './template.hbs';
import theme from './switch-theme.js';

// console.log(data);
// console.log(template);

var result = data.map(item => template(item)).join('');
console.log(result);

document.querySelector('.js-menu').innerHTML = result;
