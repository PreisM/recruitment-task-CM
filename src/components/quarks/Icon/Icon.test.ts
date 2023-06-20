import Icon from './Icon.vue'
import { mount } from '@vue/test-utils'

describe('Icon.vue', () => {
  const wrapper = mount(Icon, {
    props: {
      icon: 'cross'
    }
  })

  it('Icon render', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
