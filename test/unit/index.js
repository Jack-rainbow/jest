require('../../node_modules/babel-regenerator-runtime');

const testsContext = require.context('./components', true, /\.spec$/);
testsContext.keys().forEach(testsContext);


// const srcContext = require.context('../../src/views/test', true, /\.vue$/)
// srcContext.keys().forEach(srcContext)
