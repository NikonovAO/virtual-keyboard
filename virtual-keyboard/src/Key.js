export default class Key {
  constructor(name, value, type, target) {
    this.name = name;
    this.value = value;
    this.type = type;
    this.target = target;
  }

  renderKey() {
    this.key = document.createElement('button');
    this.key.classList.add('keyboard__key');
    this.key.classList.add(`key-${this.name}`);
    if (this.type === 'alphanumeric' || this.name === 'ControlLeft' || this.name === 'ControlRight'
    || this.name === 'AltLeft' || this.name === 'AltRight') {
      this.key.innerHTML = this.value;
    } else {
      this.key.innerHTML = this.name;
    }

    this.target.append(this.key);
    return this.key;
  }

  listenerKey() {
    this.key.addEventListener('click', () => {
      const textarea = document.getElementById('textarea');
      textarea.focus();
      if (this.type === 'alphanumeric') {
        textarea.value += this.value;
      }
    });
  }
}
