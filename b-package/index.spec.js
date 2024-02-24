import { B } from "./index.js";
import { C } from "---c-package";

describe(`Dependency Resolution`, () => {
  it(`can resolve B's dependencies`, () => {
    expect(B).toEqual("b");
  });
  it(`can resolve C's dependencies`, () => {
    expect(C).toEqual("c");
  });
});