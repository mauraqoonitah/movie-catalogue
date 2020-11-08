import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
});

// hashchange (ketika url hash diubah)
window.addEventListener('hashchange', () => {
    app.renderPage();
});
// load (ketika halaman dimuat)
window.addEventListener('load', () => {
    app.renderPage();
});