/* eslint-disable no-unused-vars */
import { JSDOM } from 'jsdom';

async function logHtml(fileName, logPrefix) {
  const dom = await JSDOM.fromFile(fileName, {
    url: 'http://localhost',
    runScripts: 'dangerously',
    resources: 'usable',
    pretendToBeVisual: true,
  });
  const window = dom.window;
  const document = window.document;

  globalThis.window = window;
  globalThis.document = document;

  const dynamicImport = await import('jquery');

  const $ = dynamicImport.default;

  console.log(
    logPrefix + ': document.documentElement.outerHTML:\n',
    document.documentElement.outerHTML
  );
  console.log();
  console.log(logPrefix + ': $(`html`).html():\n', $(`html`).html());
}

await logHtml('template1.html', 'first dynamic import');
console.log();
console.log('------------------------');
console.log();
await logHtml('template2.html', 'second dynamic import');
