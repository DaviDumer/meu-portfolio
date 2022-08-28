import './css/main.css'; // Principal
import './css/header.css';
import './css/button-menu-hamburger.css';
import './css/over-menu.css';

var buttonHamburger = document.querySelector('.js-header__button__menu');
var overMenu = document.querySelector('.js-header__over__menu');

var clickbuttonHamburger = false;
function activeButtonHamburger(e) {
  if (e.type === 'mouseover' && !clickbuttonHamburger) {
    if (
      e.target.classList.contains('js-header__button__menu') ||
      e.target.parentElement.classList.contains('js-header__button__menu')
    ) {
      buttonHamburger.classList.add('header__button__menu--hover');
    }
  } else if (e.type === 'mouseout' && !clickbuttonHamburger) {
    buttonHamburger.classList.remove('header__button__menu--hover');
  }
}
function handleClickButtonHamburger(e) {
  // overMenu.firstElementChild.classList.toggle('header__container--show');
  if (!clickbuttonHamburger) {
    overMenu.classList.add('c-header__over__menu--Show');
    buttonHamburger.classList.add('header__button__menu--hover');
    clickbuttonHamburger = true;
  } else {
    buttonHamburger.classList.remove('header__button__menu--hover');
    overMenu.classList.remove('c-header__over__menu--Show');
    clickbuttonHamburger = false;
  }
}

buttonHamburger.onmouseover = activeButtonHamburger;
buttonHamburger.onmouseout = activeButtonHamburger;
buttonHamburger.onclick = handleClickButtonHamburger;
