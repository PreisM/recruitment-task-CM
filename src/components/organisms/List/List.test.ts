import List from './List.vue'
import { mount } from '@vue/test-utils'

describe('List.vue', () => {
  const wrapper = mount(List, {
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

  it('List render', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
