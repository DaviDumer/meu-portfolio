import './css/main.css'; // Principal
import './css/header.css';
import './css/button-menu-hamburger.css';

var buttonHamburger = document.querySelector('.js-header__button__menu');
var headerLinksIn = document.querySelector('.js-header__links__in');
var headerLinksSocial = document.querySelector('.js-header__links__social');
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
  if (!clickbuttonHamburger) {
    buttonHamburger.classList.add('header__button__menu--hover');
    clickbuttonHamburger = true;
  } else {
    buttonHamburger.classList.remove('header__button__menu--hover');
    clickbuttonHamburger = false;
  }
}

buttonHamburger.onmouseover = activeButtonHamburger;
buttonHamburger.onmouseout = activeButtonHamburger;
buttonHamburger.onclick = handleClickButtonHamburger;
