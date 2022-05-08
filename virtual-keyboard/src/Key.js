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
    this.key.innerHTML = this.value;
    this.target.append(this.key);
    return this.key;
  }

  listenerKey() {
    this.key.addEventListener('click', () => {
      const textarea = document.getElementById('textarea');
      console.log(this.value);
      textarea.focus();
      if (this.type === 'alphanumeric') {
        console.log(textarea.value);
        textarea.value += this.value;
      }
    });
  }
}
