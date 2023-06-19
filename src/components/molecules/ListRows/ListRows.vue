<template>
  <div class="bg-gray-800 text-white mt-1">
    <list-row
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @delete="showModal($event, 'delete')"
      @preview="showModal($event, 'preview')"
    />
    <modal
      :show="!!modal"
      :is-delete="modal === 'delete'"
      :post="activePost"
      @delete="$emit('delete', activePost.id); closeModal()"
      @close="closeModal"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { Post } from '@/interfaces'
import ListRow from '@atoms/ListRow'
import Modal from '@atoms/Modal'

export default defineComponent({
  name: 'MoleculesListRows',
  components: {
    ListRow,
    Modal
  },
  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true
    }
  },
  emits: ['delete'],
  setup () {
    const activePost = ref({} as Post)
    const modal = ref('')

    const showModal = (post: Post, type: string) =>{
      activePost.value = post
      modal.value = type
    }

    const closeModal = () => {
      modal.value = ''
    }

    return {
      activePost,
      showModal,
      closeModal,
      modal
    }
  }
})
</script>
