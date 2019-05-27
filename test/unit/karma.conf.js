
var webpack = require('webpack');
module.exports = function (config) {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha','sinon-chai'],
    reporters: ['spec', 'coverage'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack']
    },
    exclude: [
      '../../src/views/README.md'
    ],
    webpack: {
      module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
        ]
      },
      vue: {
        loaders: {
          js: 'isparta-loader'
        }
      },
      isparta: {
        embedSource: true,
        noAutoWrap: true,
        babel: {
          presets: ['es2015']
        }
      },
    },
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {
          type: 'lcov',
          subdir: '.'
        },
        {
          type: 'text-summary'
        }
      ]
    },
    port: 9999,
    autoWatch: true,
  });
};
