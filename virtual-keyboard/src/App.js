import Keyboard from './Keyboard';

export default class App {
  constructor() {
    const header = document.createElement('header');
    header.classList.add('header');
    document.body.append(header);

    const headerWrapper = document.createElement('div');
    headerWrapper.classList.add('header__wrapper');
    header.append(headerWrapper);

    const headerTitle = document.createElement('h1');
    headerTitle.classList.add('header__title');
    headerTitle.innerHTML = 'Virtual Keyboard';
    headerWrapper.append(headerTitle);

    const main = document.createElement('main');
    main.classList.add('main');
    document.body.append(main);

    const mainWrapper = document.createElement('div');
    mainWrapper.classList.add('main__wrapper');
    main.append(mainWrapper);

    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    textarea.rows = 5;
    textarea.cols = 50;
    mainWrapper.append(textarea);

    const keyboard = new Keyboard(mainWrapper);
    keyboard.renderKeyboard();
  }
}
