import { ConfigurableResourceLoader } from 'jsdom-configurable-resource-loader';
import { ResourceLoader } from 'jsdom';
import { myFromFile } from 'b-package';

console.log(`Is ConfigurableResourceLoader an instance of ResourceLoader?`, ConfigurableResourceLoader instanceof ResourceLoader);
myFromFile(new ConfigurableResourceLoader());