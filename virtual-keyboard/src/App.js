import Keyboard from './Keyboard';

export default class App {
  renderApp() {
    let lang = localStorage.getItem('keyboardLang');
    if (lang !== 'Eng' || lang !== 'Rus') {
      lang = 'Eng';
    }

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
    textarea.id = 'textarea';
    mainWrapper.append(textarea);

    const keyboardWrapper = document.createElement('div');
    keyboardWrapper.classList.add('keyboard__wrapper');
    mainWrapper.append(keyboardWrapper);

    this.keyboard = new Keyboard(keyboardWrapper);
    this.keyboard.renderKeyboard();

    const descriptionWin = document.createElement('p');
    descriptionWin.classList.add('description');
    descriptionWin.innerHTML = 'Клавиатура создана в операционной системе Windows';
    mainWrapper.append(descriptionWin);

    const langWrapper = document.createElement('div');
    langWrapper.classList.add('lang__wrapper');
    mainWrapper.append(langWrapper);

    const descriptionLang = document.createElement('p');
    descriptionLang.classList.add('description');
    descriptionLang.innerHTML = 'Переключение языка: Ctrl + Alt';
    langWrapper.append(descriptionLang);

    const changeWrapper = document.createElement('button');
    changeWrapper.type = 'button';
    changeWrapper.id = 'lang__change';
    changeWrapper.classList.add('lang__change');

    changeWrapper.innerHTML = `${lang}`;
    langWrapper.append(changeWrapper);

    return this.keyboard;
  }
}
