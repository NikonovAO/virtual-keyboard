export default function changeLang() {
  const changeBtn = document.getElementById('lang__change');
  let bool = true;
  changeBtn.addEventListener('click', () => {
    if (bool) {
      changeBtn.innerHTML = 'Rus';
      bool = false;
      localStorage.setItem('keyboardLang', 'Rus');
    } else {
      changeBtn.innerHTML = 'Eng';
      bool = true;
      localStorage.setItem('keyboardLang', 'Eng');
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.altKey) {
      if (localStorage.getItem('keyboardLang') === 'Eng') {
        localStorage.setItem('keyboardLang', 'Rus');
        changeBtn.innerHTML = 'Rus';
      } else {
        localStorage.setItem('keyboardLang', 'Eng');
        changeBtn.innerHTML = 'Eng';
      }
    }
  });
}
