
import { createTest, destroyVM } from '../util';
import test2 from '../../../src/views/test2/index.vue';
describe('test2', () => {
  let vm;

  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(test2, {
      message: '测试new.JS'
    }, true );

     expect(vm.message).to.equal('测试new.JS');
  });
  
});

