import ListRow from './ListRow.vue'
import { mount } from '@vue/test-utils'

describe('ListRow.vue', () => {
  const wrapper = mount(ListRow, {
    props: {
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

  it('ListRow render', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Render text', () => {
    expect(wrapper.text()).toContain(1)
    expect(wrapper.text()).toContain('Test title')
    expect(wrapper.text()).toContain(2)
    expect(wrapper.text()).toContain('Test tag')
  })

  it('Buttons work', async () => {
    const btns = wrapper.findAll('button')
    await btns[0].trigger('click')
    expect(wrapper.emitted('preview')).toHaveLength(1)
    await btns[1].trigger('click')
    expect(wrapper.emitted('delete')).toHaveLength(1)
  })
})
