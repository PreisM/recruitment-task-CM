import Modal from './Modal.vue'
import { mount } from '@vue/test-utils'

describe('Modal.vue', () => {
  const wrapper = mount(Modal, {
    props: {
      show: true,
      post: {
        id: 1,
        title: 'Test title',
        body: 'Test body',
        userId: 2,
        tags: ['Test tag']
      }
    },
    global: {
      mocks: {
        $t: (msg: string) => msg
      }
    }
  })

  it('Modal render', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Modal render body', () => {
    expect(wrapper.text()).toContain('Test body')
  })

  it('Modal render body', async () => {
    await wrapper.setProps({ isDelete: true })
    const btns = wrapper.findAll('button')
    await btns[0].trigger('click')
    expect(wrapper.emitted('delete')).toHaveLength(1)
    await btns[1].trigger('click')
    expect(wrapper.emitted('close')).toHaveLength(1)
  })
})
