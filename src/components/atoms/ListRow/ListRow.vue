<template>
  <div
    class="grid grid-cols-12 border-b last:border-none py-4"
  >
    <div
      class="col-span-1 text-center px-2 flex justify-center items-center"
      v-text="post.id"
    />
    <div
      class="col-span-8 md:col-span-5 text-center md:flex justify-center items-center px-2"
    >
      <span
        class="block truncate"
        v-text="post.title"
      />
      <div class="text-xs md:hidden space-x-2 flex flex-col">
        <span 
          class="whitespace-nowrap"
          v-text="`${$t('posts.columns.userId')}: ${post.userId}`"
        />
        <span
          class="whitespace-nowrap truncate"
          v-text="`${$t('posts.columns.tags')}: ${post.tags}`"
        />
      </div>
    </div>
    <div
      class="hidden md:block col-span-1 text-center px-2"
      v-text="post.userId"
    />
    <div
      class="hidden md:block col-span-3 text-center px-2"
      v-text="post.tags.join(', ')"
    />
    <div
      class="col-span-3 md:col-span-2 text-center justify-end items-center flex space-x-4 mr-4"
    >
      <button
        class="block"
        @click="$emit('preview', post)"
      >
        <icon
          icon="eye"
          class="h-5 w-5 stroke-2 hover:text-green-500"
          viewBox="0 0 32 32"
        />
      </button>
      <button
        class="block"
        @click="$emit('delete', post)"
      >
        <icon
          icon="cross"
          class="h-5 w-5 stroke-2 hover:text-red-500"
          viewBox="0 0 32 32"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Post } from '@/interfaces'
import Icon from '@quarks/Icon'

export default defineComponent({
  name: 'AtomListRow',
  components: {
    Icon
  },
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true
    }
  },
  emits: ['delete', 'preview']
})
</script>
