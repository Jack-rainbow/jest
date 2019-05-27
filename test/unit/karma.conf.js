
var webpack = require('webpack');
module.exports = function (config) {
  config.set({
    //默认路径
    // basePath:'../../src/views',
    // 浏览器
    browsers: ['ChromeHeadless'],
     // 测试框架
    frameworks: ['mocha','sinon-chai'],
    // 测试报告
    reporters: ['spec', 'coverage'],
    // 测试入口文件
    files: ['./index.js'],
    // 预处理器 karma-webpack
    preprocessors: {
      './index.js': ['webpack']
    },
    // 要从加载的文件中排除的文件/模式列表。
    // exclude: [
    //   '../../src/views/README.md'
    // ],
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
        // these babel options will be passed only to isparta and not to babel-loader
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
