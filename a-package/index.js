import { createJsDom } from "../b-package/index.js";
import { ResourceLoader } from 'jsdom'

createJsDom(new ResourceLoader())

export const A = "a";