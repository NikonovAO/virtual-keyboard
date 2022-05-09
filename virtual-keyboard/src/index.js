import './style.css';
import App from './App';

const app = new App();
app.renderApp();

export default function pressButton() {
  const textarea = document.getElementById('textarea');
  document.onkeydown = function keyDown(event) {
    event.preventDefault();
    textarea.focus();
    const item = app.keyboard.keys.find((element) => element.name === event.code);
    if (item) {
      item.key.classList.add('key-active');
      if (item.name === 'Backspace') {
        let str = textarea.value;
        str = str.slice(0, str.length - 1);
        textarea.value = str;
      } else if (item.name === 'ControlLeft' || item.name === 'ControlRight' || item.name === 'AltLeft' || item.name === 'AltRight') {
        textarea.value += '';
      } else if (item.name === 'ShiftRight' || item.name === 'ShiftLeft') {
        textarea.value += '';
      } else {
        textarea.value += item.value;
      }
    }
  };

  document.onkeyup = function keyUp(event) {
    event.preventDefault();
    textarea.focus();
    const item = app.keyboard.keys.find((element) => element.name === event.code);
    if (item) {
      item.key.classList.remove('key-active');
    }
  };
}

function changeLang() {
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

pressButton();
changeLang();
export { app };
