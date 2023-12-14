import { parseHtmlWithDynamicImport } from './test-setup.js';
import { parseHtmlWithJQueryStaticImport } from './prod-code.js';

describe('jquery', () => {
  it('affects later static imports', async () => {
    /*
    This will run:
    const dynamicImport = await import('jquery');
    const $ = dynamicImport.default(dom.window);
    */
   await parseHtmlWithDynamicImport('template1.html');
   
    /*
    This will run:
    import jQuery from 'jquery';
    return { document: dom.window.document, jquery: jQuery(`html`), };
    */
    const { document: template1Document, jquery: template1Jquery } = await parseHtmlWithJQueryStaticImport('template1.html'); // !!!
    // Error: jQuery requires a window with a document
    expect(template1Document.querySelector('p').textContent).toEqual( 'Hello world' );
    expect(template1Jquery.find('p').text()).toEqual('Hello world');

    /*
    This will run:
    const dynamicImport = await import('jquery');
    const $ = dynamicImport.default(dom.window);
    */
    await parseHtmlWithDynamicImport('template2.html');

    /*
    This will run:
    import jQuery from 'jquery';
    return { document: dom.window.document, jquery: jQuery(`html`), };
    */
    const { document: template2Document, jquery: template2Jquery } = await parseHtmlWithJQueryStaticImport('template2.html');
    expect(template2Document.querySelector('p').textContent).toEqual( 'Goodbye world' );
    expect(template2Jquery.find('p').text()).toEqual('Goodbye world');
  });
});
