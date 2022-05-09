import pressButton, { app } from '.';

export default function changeLang() {
  const changeBtn = document.getElementById('lang__change');
  let bool = true;
  changeBtn.addEventListener('click', () => {
    if (bool) {
      changeBtn.innerHTML = 'Rus';
      bool = false;
      localStorage.setItem('keyboardLang', 'Rus');
      app.keyboard.renderKeyboard();
      pressButton();
    } else {
      changeBtn.innerHTML = 'Eng';
      bool = true;
      localStorage.setItem('keyboardLang', 'Eng');
      app.keyboard.renderKeyboard();
      pressButton();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.altKey) {
      if (localStorage.getItem('keyboardLang') === 'Eng') {
        localStorage.setItem('keyboardLang', 'Rus');
        changeBtn.innerHTML = 'Rus';
      } else {
        localStorage.setItem('keyboardLang', 'Eng');
        changeBtn.innerHTML = 'Eng';
      }
      app.keyboard.renderKeyboard();
      pressButton();
    }
  });
}
