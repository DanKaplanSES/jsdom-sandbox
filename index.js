import { JSDOM } from 'jsdom';

JSDOM.fromFile('template.html', {
    url: 'http://localhost',
    runScripts: 'dangerously',
    resources: 'usable',
    pretendToBeVisual: true,
}).then(({ window }) => {
    console.log(`Object.getOwnPropertyNames(window).filter((k) => k === "HTMLElement").length`, Object.getOwnPropertyNames(window).filter((k) => k === "HTMLElement").length);
    
    console.log(`window.HTMLElement`, window.HTMLElement);
    console.log(`Object.getOwnPropertyDescriptor(window, 'HTMLElement')`, Object.getOwnPropertyDescriptor(window, 'HTMLElement'));
    console.log(`Object.getPrototypeOf(window.constructor).name`, Object.getPrototypeOf(window.constructor).name);

    const indirectEval = eval;
    indirectEval(`console.log(HTMLElement);`);
});
