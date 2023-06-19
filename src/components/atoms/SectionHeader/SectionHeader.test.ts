import SectionHeader from './SectionHeader.vue'
import { mount } from '@vue/test-utils'

describe('SectionHeader.vue', () => {
  const wrapper = mount(SectionHeader, {
    props: {
      text: 'test'
    }
  })

  it('SectionHeader render', () => {
    expect(wrapper.exists()).toBe(true)
  })
  
  it('Render text', async () => {
    const header = wrapper.find('h1')
    expect(header.text()).toContain('test')
  })
})
