import {
  destroyVM,
  createTest
} from '../util'
import Hello  from '../../../src/views/test/index'
describe('Hello.vue', () => {
  let vm

  afterEach(() => {
    destroyVM(vm)
  })
  it('测试获取元素内容', () => {
    vm = createTest(Hello, {
      content: 'Hello World'
    }, true)
    expect(vm.$el.querySelector('.hello h1').textContent).to.equal('Welcome!')
    expect(vm.$el.querySelector('.hello h2').textContent).to.have.be.equal('Hello World')
  })

})
