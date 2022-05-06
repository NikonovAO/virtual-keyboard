import { Key } from './Key.js';

export class LetterKey{
  constructor(name, target) {
    this.target = target;
    this.name = name;
    const key = document.createElement('button');
    key.classList.add('keyboard__key');
    key.classList.add(`key-${this.name}`);
    key.innerHTML = this.name;
    this.target.append(key);
    key.addEventListener('click', ()=> {
      console.log(this.name)
    })
  }
  
  stop() {
    console.log(this)
  }

  
}