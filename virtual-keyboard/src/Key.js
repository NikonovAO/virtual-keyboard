export default class Key {
  constructor(name, value, target) {
    this.target = target;
    this.name = name;
    this.value = value;
  }

  renderKey() {
    const key = document.createElement('button');
    key.classList.add('keyboard__key');
    key.classList.add(`key-${this.name}`);
    key.innerHTML = this.value;
    this.target.append(key);
    key.addEventListener('click', () => {
      console.log(this.value);
    });
  }
}
