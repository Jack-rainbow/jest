import Vue from 'vue'
import Test from '@/views/test.vue'

describe('Test.vue', () => {
  let cmp, vm
  beforeEach(() => {
    cmp = Vue.extend(Test),
    vm = new cmp({
      data:{
         messages: [1,2,3,4]
      }
    }).$mount()
  })
  it('equals messages to [1,2,3,4]', () => {
    expect(vm.messages).toEqual([1, 2, 3, 4])
  })
})
