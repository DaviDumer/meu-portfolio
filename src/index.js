import './css/root.css';
import './css/main.css';
import './css/header.css';
import './css/button-menu-hamburger.css';
import './css/over-menu.css';
import './css/section-about-me.css';
import './css/my-history.css';
import './css/projects.css';
import './css/about-portf.css';
import './css/footer.css';

var linkProjects = document.querySelectorAll('.js-project__about');

linkProjects.forEach((e, i) => {
  // Abre links dos projetos.
  e.addEventListener('click', function () {
    window.open(`${e.getAttribute('data-link')}`, '_blank');
  });
});

var buttonHamburger = document.querySelector('.js-header__button__menu');
var overMenu = document.querySelector('.js-header__over__menu');
var eventLink2 = Array.from(document.querySelectorAll('.js-header-link2'));

var clickbuttonHamburger = false;

function handleClickButtonHamburger(e) {
  // Dispara as animações do menu.
  if (!clickbuttonHamburger) {
    overMenu.classList.add('js-header__over__menu--Show');
    buttonHamburger.classList.add('js-header__button__menu--active');
    clickbuttonHamburger = true;
  } else {
    overMenu.classList.remove('js-header__over__menu--Show');
    buttonHamburger.classList.remove('js-header__button__menu--active');
    clickbuttonHamburger = false;
  }
}
function handleEventLinkMenu(event) {
  if (event.target.tagName === 'A') {
    overMenu.classList.remove('js-header__over__menu--Show');
    buttonHamburger.classList.remove('js-header__button__menu--active');
    clickbuttonHamburger = false;
  }
}

eventLink2.forEach((e, i) => {
  // Abre links das redes sociais.
  switch (i) {
    case 0:
      e.onclick = () => window.open('https://github.com/DaviDumer/', '_blank');
      break;
    case 1:
      e.onclick = () =>
        window.open('https://www.instagram.com/davi_dumer/', '_blank');
      break;
    case 2:
      e.onclick = () =>
        window.open(
          'https://www.linkedin.com/in/davi-dumer-99806a1a3/',
          '_blank'
        );
      break;
    case 3:
      e.onclick = () => window.open('mailto:dumer56870deivs@gmail.com');
      break;
    case 4:
      e.onclick = () => window.open('./curriculo/cv-davi.pdf', '_blank');
      break;
    default:
      break;
  }
});

buttonHamburger.onclick = handleClickButtonHamburger;
overMenu.onclick = handleEventLinkMenu;

var aboutMeTab = document.querySelectorAll('.js-about-me__tab'); // libera as listas de Skills, para cada click de suas respectivas Tabs.
aboutMeTab.forEach(e => {
  e.addEventListener('click', function ({ target }) {
    var value;
    if (target.tagName === 'DIV') {
      value = target.firstElementChild.textContent;
    } else {
      value = target.textContent;
    }

    switch (value) {
      case 'Front-end':
        updatedTextOlBox(undefined, [
          [
            'HTML5',
            'CSS3',
            'Ajax',
            'jQuery',
            'Node js',
            'React js',
            'Figma',
            'Bootstrap',
            'Webpack',
          ],
          [
            'Design de interface de usuário.',
            'UX Design.',
            'Metodologia BEM (Block, Element, Modifier) para CSS.',
            'Namespace CSS.',
            'Uso Profissional de Figma para wireframe e prototipagem',
          ],
        ]);
        break;
      case 'Back-end':
        updatedTextOlBox(undefined, [
          ['Node js.', 'Express js.', 'Docker.', 'MySQL.', 'Adonis js.'],
          [
            'Construir API com Express js.',
            'Básico de banco de dados MySQL.',
            'Básico de banco de dados MongoDB.',
            'Básico deploy de APIs na AWS e Heroku.',
            'Básico de construção de APIs com Adonis js.',
          ],
        ]);
        break;
      case 'Mobile / Desktop':
        updatedTextOlBox(undefined, [
          ['Node js.', 'React-Native js.', 'Android Studio.', 'Electron js.'],
          [
            'Desenvolvimento de aplicações Desktop com Electron js',
            'Desenvolvimento de aplicações Mobile com React-Native js',
          ],
        ]);
        break;
      case 'Outros':
        updatedTextOlBox(
          [
            '1 Linguagens de programação:',
            '2 Linguagens humanas:',
            '3 Versionamento de Código:',
            '4 ServiceNow:',
          ],
          [
            [
              'JavaScript (ECMAScript 6+).',
              'TypeScript (“Estudando”).',
              'Python 3.',
              'Java (“Estudando”).',
            ],
            ['Básico Inglês.'],
            ['Git e GitHub.'],
            ['Administração de instância ServiceNow (“Estudando”).'],
          ]
        );
        break;
      default:
        break;
    }
  });
});

function updatedTextOlBox( // Atualiza os text-box das skills
  Labels = ['1 Tecnologías:', '2 Skills:'],
  listOfTexts
) {
  var textBox = document.querySelector('.js-about-me__text-box');

  Array.from(textBox.children).forEach(e => {
    e.parentNode.removeChild(e);
  });

  Labels.forEach((e, index1) => {
    var h3 = document.createElement('h3');
    var ol = document.createElement('ol');
    var element = document.createElement('li');
    h3.innerText = e;
    element.appendChild(h3);
    element.appendChild(ol);
    listOfTexts[index1].forEach((e, i) => {
      var li = document.createElement('li');
      var p = document.createElement('p');
      p.innerText = e;
      li.appendChild(p);
      ol.appendChild(li);
    });
    textBox.appendChild(element);
  });
}

var bodyScrol = document.querySelector('#root');
var headerScroll = document.querySelector('.js-header--scroll');
var headerPhotoScroll = document.querySelector(
  '.js-header__perfil__photo--scroll'
);

bodyScrol.onscroll = () => {
  if (
    window.scrollY > 0 &&
    !headerScroll.classList.contains('js-header--scroll-active')
  ) {
    headerScroll.classList.add('js-header--scroll-active');
    headerPhotoScroll.classList.add('js-header__perfil__photo--scroll-active');
  } else if (!window.scrollY) {
    headerScroll.classList.remove('js-header--scroll-active');
    headerPhotoScroll.classList.remove(
      'js-header__perfil__photo--scroll-active'
    );
  }
};
