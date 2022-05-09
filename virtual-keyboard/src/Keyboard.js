import Key from './Key';
import {
  keysRowE, keysRowD, keysRowC, keysRowB, keysRowA,
} from './keys';

export default class Keyboard {
  constructor(target) {
    this.target = target;
    this.textarea = document.getElementById('textarea');
    this.keys = [];
    this.keyboard = document.createElement('div');
  }

  renderKeyboard() {
    this.keys = [];
    if (this.keyboard) {
      this.keyboard.remove();
    }
    let lang = localStorage.getItem('keyboardLang');

    if (lang !== 'Eng' && lang !== 'Rus') {
      lang = 'Eng';
    }
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');
    this.target.append(this.keyboard);

    const keyboardRowE = document.createElement('div');
    keyboardRowE.classList.add('keyboard__row');
    keyboardRowE.classList.add('row-E');
    this.keyboard.append(keyboardRowE);

    keysRowE.forEach((element) => {
      this.key = new Key(element.name, element.lowerCaseValue[lang], element.type, keyboardRowE);
      this.key.renderKey();
      this.key.listenerKey();
      this.keys.push(this.key);
    });

    const keyboardRowD = document.createElement('div');
    keyboardRowD.classList.add('keyboard__row');
    keyboardRowD.classList.add('row-D');
    this.keyboard.append(keyboardRowD);

    keysRowD.forEach((element) => {
      this.key = new Key(element.name, element.lowerCaseValue[lang], element.type, keyboardRowD);
      this.key.renderKey();
      this.key.listenerKey();
      this.keys.push(this.key);
    });

    const keyboardRowC = document.createElement('div');
    keyboardRowC.classList.add('keyboard__row');
    keyboardRowC.classList.add('row-C');
    this.keyboard.append(keyboardRowC);

    keysRowC.forEach((element) => {
      this.key = new Key(element.name, element.lowerCaseValue[lang], element.type, keyboardRowC);
      this.key.renderKey();
      this.key.listenerKey();
      this.keys.push(this.key);
    });

    const keyboardRowB = document.createElement('div');
    keyboardRowB.classList.add('keyboard__row');
    keyboardRowB.classList.add('row-B');
    this.keyboard.append(keyboardRowB);

    keysRowB.forEach((element) => {
      this.key = new Key(element.name, element.lowerCaseValue[lang], element.type, keyboardRowB);
      this.key.renderKey();
      this.key.listenerKey();
      this.keys.push(this.key);
    });

    const keyboardRowA = document.createElement('div');
    keyboardRowA.classList.add('keyboard__row');
    keyboardRowA.classList.add('row-A');
    this.keyboard.append(keyboardRowA);

    keysRowA.forEach((element) => {
      this.key = new Key(element.name, element.lowerCaseValue[lang], element.type, keyboardRowA);
      this.key.renderKey();
      this.key.listenerKey();
      this.keys.push(this.key);
    });
    return this.keyboard;
  }
}
