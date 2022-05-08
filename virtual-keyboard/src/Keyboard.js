import Key from './Key';
import {
  keysRowE, keysRowD, keysRowC, keysRowB, keysRowA,
} from './keys';

export default class Keyboard {
  constructor(target) {
    this.target = target;
  }

  renderKeyboard() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    this.target.append(keyboard);

    const keyboardRowE = document.createElement('div');
    keyboardRowE.classList.add('keyboard__row');
    keyboardRowE.classList.add('row-E');
    keyboard.append(keyboardRowE);

    keysRowE.forEach((element) => {
      const key = new Key(element.name, element.lowerCaseValue.en, keyboardRowE);
      key.renderKey();
    });

    const keyboardRowD = document.createElement('div');
    keyboardRowD.classList.add('keyboard__row');
    keyboardRowD.classList.add('row-D');
    keyboard.append(keyboardRowD);

    keysRowD.forEach((element) => {
      const key = new Key(element.name, element.lowerCaseValue.en, keyboardRowD);
      key.renderKey();
    });

    const keyboardRowC = document.createElement('div');
    keyboardRowC.classList.add('keyboard__row');
    keyboardRowC.classList.add('row-C');
    keyboard.append(keyboardRowC);

    keysRowC.forEach((element) => {
      const key = new Key(element.name, element.lowerCaseValue.en, keyboardRowC);
      key.renderKey();
    });

    const keyboardRowB = document.createElement('div');
    keyboardRowB.classList.add('keyboard__row');
    keyboardRowB.classList.add('row-B');
    keyboard.append(keyboardRowB);

    keysRowB.forEach((element) => {
      const key = new Key(element.name, element.lowerCaseValue.en, keyboardRowB);
      key.renderKey();
    });

    const keyboardRowA = document.createElement('div');
    keyboardRowA.classList.add('keyboard__row');
    keyboardRowA.classList.add('row-A');
    keyboard.append(keyboardRowA);

    keysRowA.forEach((element) => {
      const key = new Key(element.name, element.lowerCaseValue.en, keyboardRowA);
      key.renderKey();
    });
  }
}
