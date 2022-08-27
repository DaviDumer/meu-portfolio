import './css/main.css'; // Principal
import './css/header.css';

function component() {
  const element = document.createElement('div');
  element.classList.add('hello');
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Hello Webpack';

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = netflix;
  element.appendChild(myIcon);
  return element;
}

// document.body.appendChild(component());
