const path = require('path')
console.log(path,'222')
module.exports = {
    rootDir: path.resolve(__dirname, '../../'),
    moduleFileExtensions: [
      'js',
      'json',
      'jsx',
      'vue'
    ],
    moduleNameMapper: { //作为环境的依赖
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    // 将测试结果在浏览器中展示，设置此项需安装jest-html-reporter
    // reporters: [
    //   'default',
    //   ['./node_modules/jest-html-reporter', {
    //     pageTitle: 'Test Report',
    //     outputPath: 'test/unit/test-report.html',
    //     includeFailureMsg: true,
    //     includeConsoleLog: true
    //   }]
    // ],
    transform: {
      '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
      '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    },
    testPathIgnorePatterns: [
      '<rootDir>/test/e2e'
    ],
    testMatch: [ //test检测test文件里边文件
      '**/test/unit/components/*.spec.(js|jsx|ts|tsx)'
    ],
    snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'], //快照生成的文件
    // setupFiles: ['<rootDir>/test/unit/setup'], //运行测试环境所需依赖的模块路径列表，
    collectCoverage: true, //是否收集测试时的覆盖率信息
    coverageDirectory: '<rootDir>/test/unit/coverage',//测试覆盖率覆盖目录
    collectCoverageFrom: [ //moduleFileExtensions
      '**/src/views/**/*.{js,vue}',
      '**/src/utils/**/*.js',
       "!**/node_modules/**"
    ],
    'coverageReporters': [
      'lcov',
      'text-summary'
    ],
    "verbose": true, //层次显示测试套件中每个测试的结果。
    "testURL": "http://localhost/",
    // "coverageThreshold": { //分支，行和函数覆盖率低于80％，或者有超过10个未覆盖的语句--用于强制代码检测
    //   "global": {
    //     "branches": 80,
    //     "functions": 80,
    //     "lines": 80,
    //     "statements": -10
    //   }
    // }
     displayName: { //打印标签
       name: 'sPaaS',
       color: 'blue',
     },
     notify:true, //是否开启测试通知
     notifyMode: always //通知模式
  }
