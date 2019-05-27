require('../../node_modules/babel-regenerator-runtime');

const testsContext = require.context('./components', true, /\.spec$/);
console.log(testsContext)
testsContext.keys().forEach(testsContext);
