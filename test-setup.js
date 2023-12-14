import { JSDOM} from 'jsdom'

export async function parseHtmlWithDynamicImport(fileName) {
    const dom = await JSDOM.fromFile(fileName, {
      url: 'http://localhost',
      runScripts: 'dangerously',
      resources: 'usable',
      pretendToBeVisual: true,
    });
    //const window = dom.window;
    //const document = window.document;
  
    //globalThis.window = window;
    //globalThis.document = document;
  
    const dynamicImport = await import('jquery');
    const $ = dynamicImport.default(dom.window);
    return {
      document: dom.window.document,
      jquery: $(`html`),
    };
  }
  