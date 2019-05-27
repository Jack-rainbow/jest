
import {
  createTest,
  destroyVM
} from '../util';

// 引用要测试的组件
import Test from '../../../src/views/test/index.vue';
describe('Test', () => {
      let vm;
      afterEach(() => {
        destroyVM(vm);
      });
 it('create', () => {
   vm = createTest(Test, {
      message: '这是message'
   }, true);
    expect(vm.message).to.equal('这是message');
 });
})