    console.group(`correct usage in prod`);
    console.time(`correct prod`);
    console.log(`correct prod: NOT console.time()`);
    console.timeLog(`correct prod`);
    console.log(`correct prod: NOT console.time()`);
    console.timeLog(`correct prod`);
    console.log(`correct prod: NOT console.time()`);
    console.time(`correct prod`);
    console.groupEnd(`correct usage in prod`);

    console.group(`incorrect usage in prod`);
    console.time(`incorrect prod`);
    console.log(`incorrect prod: NOT console.time()`);
    console.time(`incorrect prod`);
    console.log(`incorrect prod: NOT console.time()`);
    console.time(`incorrect prod`);
    console.log(`incorrect prod: NOT console.time()`);
    console.time(`incorrect prod`);
    console.groupEnd(`incorrect usage in prod`);