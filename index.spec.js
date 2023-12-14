import * as testSetup from './test-setup.js';
import * as prodCode from './prod-code.js';

describe('jquery', () => {
  it('dynamic imports affect static imports template1', async () => {
    await testSetup.parseHtmlWithDynamicImport('template1.html');

    const { document: template1Document, jquery: template1Jquery } =
      await prodCode.parseHtmlWithJQueryStaticImport('template1.html'); // !!!
    // Error: jQuery requires a window with a document
    expect(template1Document.querySelector('p').textContent).toEqual(
      'Hello world'
    );
    expect(template1Jquery.find('p').text()).toEqual('Hello world');
  });

  it('dynamic imports affect static imports template2', async () => {
    await testSetup.parseHtmlWithDynamicImport('template2.html');

    const { document: template2Document, jquery: template2Jquery } =
      await prodCode.parseHtmlWithJQueryStaticImport('template2.html'); // !!!
    // Error: jQuery requires a window with a document
    expect(template2Document.querySelector('p').textContent).toEqual(
      'Goodbye world'
    );
    expect(template2Jquery.find('p').text()).toEqual('Goodbye world');
  });
});
