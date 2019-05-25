
module.exports = function (config) {
  const configuration = {
    //默认路径
    // basePath:'../../src/views'
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
      './index.js': ['webpack', 'sourcemap', 'coverage']
    },
    // 要从加载的文件中排除的文件/模式列表。
    exclude: [
      '../../src/views/README.md'
    ],
    mode: 'development',
    //配置日志级别
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // logLevel: config.LOG_INFO,
     // 测试覆盖率报告
     // https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md
    coverageReporter: {
      dir: './coverage',
      reporters: [{
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
    client: {
      mocha: {
        timeout: 4000
      }
    }
  };

  config.set(configuration);
};
