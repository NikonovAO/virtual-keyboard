import { LetterKey } from './LetterKey.js';
import { keysRowE } from './keys.js';
import { keysRowD } from './keys.js';
import { keysRowC } from './keys.js';
import { keysRowB } from './keys.js';
import { keysRowA } from './keys.js';

export class Keyboard {

  constructor(target) {

    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    target.append(keyboard);

    const keyboardRowE = document.createElement('div');
    keyboardRowE.classList.add('keyboard__row');
    keyboardRowE.classList.add('row-E');
    keyboard.append(keyboardRowE);

    keysRowE.forEach(element => {
      new LetterKey(element.lowerCaseValue.en, keyboardRowE);
    })
    

    const keyboardRowD = document.createElement('div');
    keyboardRowD.classList.add('keyboard__row');
    keyboardRowD.classList.add('row-D');
    keyboard.append(keyboardRowD);

    keysRowD.forEach(element => {
      new LetterKey(element.lowerCaseValue.en, keyboardRowD);
    })

    const keyboardRowC = document.createElement('div');
    keyboardRowC.classList.add('keyboard__row');
    keyboardRowC.classList.add('row-C');
    keyboard.append(keyboardRowC);

    keysRowC.forEach(element => {
      new LetterKey(element.lowerCaseValue.en, keyboardRowC);
    })

    const keyboardRowB = document.createElement('div');
    keyboardRowB.classList.add('keyboard__row');
    keyboardRowB.classList.add('row-B');
    keyboard.append(keyboardRowB);

    keysRowB.forEach(element => {
      new LetterKey(element.lowerCaseValue.en, keyboardRowB);
    })

    const keyboardRowA = document.createElement('div');
    keyboardRowA.classList.add('keyboard__row');
    keyboardRowA.classList.add('row-A');
    keyboard.append(keyboardRowA);

    keysRowA.forEach(element => {
      new LetterKey(element.lowerCaseValue.en, keyboardRowA);
    })
  }
}