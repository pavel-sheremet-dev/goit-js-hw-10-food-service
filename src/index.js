import './sass/main.scss';

import refs from './js/data/references';
import { setStartTheme, onCheckbox } from './js/utils/themesControl';
import menuMarkup from './js/components/menuMarkup';

setStartTheme();

refs.themeCheckbox.addEventListener('change', onCheckbox);

refs.menu.insertAdjacentHTML('afterbegin', menuMarkup);
