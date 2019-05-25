var expect = require('chai').expect;
var addNum = require('../../../src/views/hello')

//单独文件测试 需要全局安装mocha 然后到指定目录下执行mocha  index.test.js
describe('测试index.js', function () {
  describe('测试addNum函数', function () {
    it('两数相加结果为两个数字的和', function () {
      expect(addNum(1, 2)).to.be.equal(3);
    });
  });
});
