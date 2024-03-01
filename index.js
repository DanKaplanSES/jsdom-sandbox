import { JSDOM } from 'jsdom';

JSDOM.fromFile('template.html', {
    url: 'http://localhost',
    runScripts: 'dangerously',
    resources: 'usable',
    pretendToBeVisual: true,
}).then((dom) => {
    const KEYS = [];
    KEYS.push(
        ...Object.getOwnPropertyNames(dom.window).filter(
            (k) => {
                console.log(k);
                return !k.startsWith('_') && !(k in globalThis)
            }
        )
    );

    KEYS.forEach((key) => (globalThis[key] = dom.window[key]));

    const indirectEval = eval;
    indirectEval(`console.log(NodeList);`);
});
