require('ts-node').register({
  project: "tsconfig.json",
  transpileOnly: true,
  files: true
})

/*
Add this line as a jasmine helper to enable:

"spec/support/type-check.js"
*/ 