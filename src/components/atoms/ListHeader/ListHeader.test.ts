import ListHeader from './ListHeader.vue'
import { mount } from '@vue/test-utils'

describe('ListHeader.vue', () => {
  const wrapper = mount(ListHeader, {
    global: {
      mocks: {
        $t: (msg: string) => msg
      }
    }
  })

  it('ListHeader render', () => {
    expect(wrapper.exists()).toBe(true)
  })
  
  it('Emit text', async () => {
    const input = wrapper.find('input')
    expect(input.attributes('type')).toBe('text')
    await input.setValue('test')
    expect(wrapper.emitted('search')).toHaveLength(1)
  })
})
