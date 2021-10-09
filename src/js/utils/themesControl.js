import { THEME_KEY } from '../data/localStorageKeys';
import refs from '../data/references';
import CSS from '../data/css';

const { THEME_LIGTH, THEME_DARK } = CSS;

const setStartTheme = () => {
  const preferedThemeClass = localStorage.getItem(THEME_KEY) || THEME_LIGTH;
  document.body.classList.add(preferedThemeClass);
  refs.themeCheckbox.checked = !document.body.classList.contains(THEME_LIGTH);
};

const onCheckbox = e => {
  const setLigth = !e.target.checked;

  let oldClass, newClass;
  [oldClass, newClass] = setLigth
    ? [THEME_DARK, THEME_LIGTH]
    : [THEME_LIGTH, THEME_DARK];

  document.body.classList.replace(oldClass, newClass);

  localStorage.setItem(THEME_KEY, newClass);
};

export { setStartTheme, onCheckbox };
