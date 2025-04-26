import { fetchJSON, renderProjects } from '../global.js';

const projects = await fetchJSON('../lib/projects.json');
const projectsContainer = document.querySelector('.projects');

renderProjects(projects, projectsContainer, 'h2');

const jsElements = document.getElementsByClassName('project-title');
const count = jsElements.length;
document.querySelector('h1').insertAdjacentHTML('afterbegin', count + ' ');


