import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
// import main from './main';

// document.addEventListener('DOMContentLoaded', main);
const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
