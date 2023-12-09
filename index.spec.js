import { JSDOM } from 'jsdom';

describe('jquery', () => {
  it('uses the currently available document', async () => {
    const { document: template1Document, jquery: template1Jquery } =
      await parseHtml('template1.html');
    expect(template1Document.querySelector('p').textContent).toEqual(
      'Hello world'
    );
    expect(template1Jquery.find('p').text()).toEqual('Hello world');

    const { document: template2Document, jquery: template2Jquery } =
      await parseHtml('template2.html');
    expect(template2Document.querySelector('p').textContent).toEqual(
      'Goodbye world'
    );
    expect(template2Jquery.find('p').text()).toEqual('Goodbye world');
  });
});

async function parseHtml(fileName) {
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

  //const $ = dynamicImport.default;
  const $ = dynamicImport.default(dom.window);
  return {
    document: dom.window.document,
    jquery: $(`html`),
  };
}
