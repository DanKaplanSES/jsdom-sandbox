import { JSDOM } from 'jsdom';

export function myFromFile(resources) {
  JSDOM.fromFile('template.html', {
    url: 'http://localhost',
    runScripts: 'dangerously',
    resources,
    pretendToBeVisual: true,
  }).then((dom) => {
    console.log(dom.window.document.querySelector('p').textContent); // "Hello world"
  });
}
