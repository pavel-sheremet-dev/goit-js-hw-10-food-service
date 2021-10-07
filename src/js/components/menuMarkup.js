import menu from '../data/menu.json';
import makeMenuMarkup from '../../templating/MenuTpl.hbs';

const menuMarkup = makeMenuMarkup(menu);

export default menuMarkup;
