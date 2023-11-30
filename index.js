import { JSDOM } from 'jsdom';

(async () => {
  const dom = await JSDOM.fromFile('template.html', {
    url: 'http://localhost',
    runScripts: 'dangerously',
    resources: 'usable',
    pretendToBeVisual: true,
  });

  console.log('Post await: Window exists?', dom.window !== undefined);
})();
