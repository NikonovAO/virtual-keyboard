import './style.css';
import App from './App';
import changeLang from './changeLang';

let app = new App();
app.renderApp();
changeLang();
pressButton();

export default function pressButton() {
  const textarea = document.getElementById('textarea');

  document.onkeydown = function(event) {
    event.preventDefault();
    textarea.focus();
    const item = app.keyboard.keys.find((element) => element.name === event.code);
    console.log(app.keyboard.keys)
    if (!item) {
      return;
    } else {
      item.key.classList.add('key-active');
      if(item.name === 'Backspace') {
        let str = textarea.value;
        str = str.slice(0, str.length - 1);
        textarea.value = str;
        console.log(textarea.value.length)
  
      } else if(item.name === 'ControlLeft' || item.name === 'ControlRight' || item.name === 'AltLeft' || item.name === 'AltRight') {
        textarea.value = textarea.value;
      } else {
        textarea.value += item.value;
      }
    }
  };

  document.onkeyup = function(event) {
    event.preventDefault();
    textarea.focus();
    const item = app.keyboard.keys.find((element) => element.name === event.code);
    if(!item) {
      return;
    } else {
      item.key.classList.remove('key-active');
    }
  };
}



export { app }