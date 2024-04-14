describe(`console.time`, () => {
    xit(`correct console.time prints`, () => {
        console.group(`correct usage in test`);
        console.time(`correct test`);
        console.log(`correct test: NOT console.time()`);
        console.timeLog(`correct test`);
        console.log(`correct test: NOT console.time()`);
        console.timeLog(`correct test`);
        console.log(`correct test: NOT console.time()`);
        console.time(`correct test`);
        console.groupEnd(`correct usage in test`);
    });

    it(`incorrect console.time prints`, () => {
        console.group(`incorrect usage in test`);
        console.time(`incorrect test`);
        console.log(`incorrect test: NOT console.time()`);
        console.time(`incorrect test`);
        console.log(`incorrect test: NOT console.time()`);
        console.time(`incorrect test`);
        console.log(`incorrect test: NOT console.time()`);
        console.time(`incorrect test`);
        console.groupEnd(`incorrect usage in test`);
    });
});