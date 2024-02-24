import { A } from "./index.js";
import { B } from "../b-package/index.js";
import { C } from "../c-package/index.js";

describe(`Dependency Resolution`, () => {
  it(`can resolve A's dependencies`, () => {
    expect(A).toEqual("a");
  });
  it(`can resolve B's dependencies`, () => {
    expect(B).toEqual("b");
  });
  it(`can resolve C's dependencies`, () => {
    expect(C).toEqual("c");
  });
});