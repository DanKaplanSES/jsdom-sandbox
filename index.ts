import { JSDOM } from 'jsdom';

JSDOM.fromFile('template.html', {
  url: 'http://localhost',
  runScripts: 'dangerously',
  resources: 'usable',
  pretendToBeVisual: true,
}).then((dom) => {
  console.log(dom.window.document.querySelector('p').textContent); // "Hello world"
});
