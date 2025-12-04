import './style.css';
import { Personal_data, projects } from './data.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { Home } from './pages/Home.js';
import { Portfolio } from './pages/Portfolio.js';
import { Resume } from './pages/Resume.js';
import { Contact } from './pages/Contact.js';

const app = document.querySelector('#app');

function render() {
  const path = window.location.hash || '#/';

  app.innerHTML = `
    ${Header()}
    <main id="main-content">
      ${getPage(path)}
    </main>
    ${Footer()}
  `;
}

function getPage(path) {
  switch (path) {
    case '#/': return Home();
    case '#/portfolio': return Portfolio();
    case '#/resume': return Resume();
    case '#/contact': return Contact();
    default: return Home();
  }
}

window.addEventListener('hashchange', render);
render();
