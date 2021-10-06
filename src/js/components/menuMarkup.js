import menu from '../data/menu.json';
import makeMenuMarkup from '../../templating/MenuTpl.hbs';

const menuRef = document.querySelector('.js-menu');

const menuMarkup = makeMenuMarkup(menu);

menuRef.insertAdjacentHTML('afterbegin', menuMarkup);
