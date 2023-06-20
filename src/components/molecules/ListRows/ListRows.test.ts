import ListRows from './ListRows.vue'
import { mount } from '@vue/test-utils'

describe('ListRows.vue', () => {
  const wrapper = mount(ListRows, {
    props: {
      posts: [
        {
          id: 1,
          title: 'Test title',
          body: 'Test body',
          userId: 2,
          tags: ['Test tag']
        },
        {
          id: 3,
          title: 'Test title2',
          body: 'Test body2',
          userId: 4,
          tags: ['Test tag2']
        }
      ]
    },
    global: {
      mocks: {
        $t: (msg: string) => msg
      }
    }
  })

  it('ListRows render', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('ListRows render all items', () => {
    const rows = wrapper.findAll('[data-test="row"]')
    expect(rows).toHaveLength(2)
  })
})
