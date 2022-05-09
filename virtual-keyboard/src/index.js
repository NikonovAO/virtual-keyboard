import './style.css';
import App from './App';
import changeLang from './changeLang';

const app = new App();
app.renderApp();
changeLang();

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

  pressButton();
}

export { app };
