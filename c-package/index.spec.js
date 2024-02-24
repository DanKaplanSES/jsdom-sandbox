import { C } from "./index.js";

describe(`Dependency Resolution`, () => {
  it(`can resolve C's dependencies`, () => {
    expect(C).toEqual("c");
  });
});