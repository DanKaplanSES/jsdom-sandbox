import { ConfigurableResourceLoader } from 'jsdom-configurable-resource-loader';
import { createJsDom } from "../b-package/index.js";

createJsDom(new ConfigurableResourceLoader({
    blacklist: [/foo.com/],
}))


export const A = "a";