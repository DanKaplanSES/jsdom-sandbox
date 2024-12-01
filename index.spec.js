import { run } from './index.js';

describe("Test", function () {
    it("runs jsdom", async function () {
        await run();
        expect(true).toBe(true);
    });
});
