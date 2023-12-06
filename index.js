/* eslint-disable no-unused-vars */
import { JSDOM } from 'jsdom';

console.log(`start`);

const dom = await JSDOM.fromFile('template1.html', {
  url: 'http://localhost',
  runScripts: 'dangerously',
  resources: 'usable',
  pretendToBeVisual: true,
});
const window = dom.window;
const document = window.document;

console.log('p textContent vanilla', document.querySelector('p').textContent); // "Hello world"

globalThis.window = window;
globalThis.document = document;

const previousModule = globalThis.module;
console.log(previousModule);
globalThis.module = undefined;


const dynamicImport = await import('jquery');
// console.log(`1`, dynamicImport);
// console.log(`2`, dynamicImport.default);
// console.log(`3`, typeof dynamicImport.default);
// console.log(`4`, dynamicImport.default());
// console.dir(dynamicImport.default);

const $ = dynamicImport.default;
// console.dir($);

console.log(`html`, $('body').init);

console.log('p textContent jQuery', $('p').textContent); // "Hello world'

