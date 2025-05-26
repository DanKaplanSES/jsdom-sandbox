import { JSDOM } from 'jsdom'

export function createJsDom(resourceLoader) {
    new JSDOM(``, {
        resources: resourceLoader
    });
}

export const C = "c";