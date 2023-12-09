import { parseHtml } from './index.js';
import { parseHtmlWithJQueryStaticImport } from './index2.js';

describe('jquery', () => {
  it('affects later static imports', async () => {
    /*
    This will run:
    const dynamicImport = await import('jquery');
    const $ = dynamicImport.default(dom.window);
    */
    await parseHtml('template1.html');
    
    const { document: template1Document, jquery: template1Jquery } = await parseHtmlWithJQueryStaticImport('template1.html');
    expect(template1Document.querySelector('p').textContent).toEqual( 'Hello world' );
    expect(template1Jquery.find('p').text()).toEqual('Hello world');

    /*
    This will run:
    const dynamicImport = await import('jquery');
    const $ = dynamicImport.default(dom.window);
    */
    await parseHtml('template2.html');
    const { document: template2Document, jquery: template2Jquery } = await parseHtmlWithJQueryStaticImport('template2.html');
    expect(template2Document.querySelector('p').textContent).toEqual( 'Goodbye world' );
    expect(template2Jquery.find('p').text()).toEqual('Goodbye world');
  });
});
