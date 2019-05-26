import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Counter from '../../../src/views/test/index'

describe('Counter.vue', () => {
  it('clicked', () => {
    const wrapper = shallowMount(Counter)
    expect(wrapper.find('div').text()).contains('1')
  })
})