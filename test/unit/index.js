require('../../node_modules/babel-regenerator-runtime');

const testsContext = require.context('./spec', true, /\.spec$/);
testsContext.keys().forEach(testsContext);
