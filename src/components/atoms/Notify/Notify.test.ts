import Notify from './Notify.vue'
import { mount } from '@vue/test-utils'

describe('Notify.vue', () => {
  const wrapper = mount(Notify, {
    props: {
      title: 'Test title',
      description: 'Test description'
    }
  })

  it('Notify render', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Render text', () => {
    expect(wrapper.text()).toContain('Test title')
    expect(wrapper.text()).toContain('Test description')
  })

  it('Notify render right type', async () => {
    const notify = wrapper.find('[data-test="notify"]')
    expect(notify.classes('bg-red-500')).toBe(true)
    expect(notify.classes('bg-blue-400')).toBe(false)
    expect(notify.classes('bg-success-500')).toBe(false)

    await wrapper.setProps({ type: 'success' })
    expect(notify.classes('bg-red-500')).toBe(false)
    expect(notify.classes('bg-blue-400')).toBe(false)
    expect(notify.classes('bg-green-500')).toBe(true)

    await wrapper.setProps({ type: 'info' })
    expect(notify.classes('bg-red-500')).toBe(false)
    expect(notify.classes('bg-blue-400')).toBe(true)
    expect(notify.classes('bg-green-500')).toBe(false)
  })
})
