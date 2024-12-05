import './assets/css/styles.css';
import { section as HomeSection } from './home.js';
import { section as AboutSection } from './about.js';
import { section as PopularSection } from './popular.js';
import { section as ContactSection } from './contact.js';

const app = document.getElementById('content');
const homeButton = document.getElementById('home-button');
const aboutButton = document.getElementById('about-button');
const popularButton = document.getElementById('popular-button');
const contactButton = document.getElementById('contact-button');

app.innerHTML = HomeSection;

homeButton.addEventListener('click', (e) => {
    app.innerHTML = HomeSection;
});

aboutButton.addEventListener('click', (e) => {
    app.innerHTML = AboutSection;
});

popularButton.addEventListener('click', (e) => {
    app.innerHTML = PopularSection;
});

contactButton.addEventListener('click', (e) => {
    app.innerHTML = ContactSection;
});
