import { A } from "./index.js";
import { B } from "../b-package/index.js";

describe(`Dependency Resolution`, () => {
  it(`can resolve A's dependencies`, () => {
    expect(A).toEqual("a");
  });
  it(`can resolve B's dependencies`, () => {
    expect(B).toEqual("b");
  });
});