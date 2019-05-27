
import {
  createTest,
  createVue,
  destroyVM
} from '../util';

// 引用要测试的组件
import child from '../../../src/views/test/index.vue';
describe('Alert', () => {
      let vm;
      afterEach(() => {
        destroyVM(vm);
      });
 it('create', () => {
   vm = createTest(child, {
      message: '这是message'
   }, true);
    expect(vm.message).to.equal('这是message');
 });
})