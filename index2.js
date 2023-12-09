import { JSDOM } from 'jsdom';
import jQuery from 'jquery';

export async function parseHtmlWithJQueryStaticImport(fileName) {
  const dom = await JSDOM.fromFile(fileName, {
    url: 'http://localhost',
    runScripts: 'dangerously',
    resources: 'usable',
    pretendToBeVisual: true,
  });


  return {
    document: dom.window.document,
    jquery: jQuery(`html`),
  };
}
