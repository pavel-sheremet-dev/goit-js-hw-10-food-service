const themeInputRef = document.querySelector('#theme-switch-toggle');

console.log(themeInputRef);

document.body.classList.add('light-theme');

themeInputRef.addEventListener('change', () => {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');
});
