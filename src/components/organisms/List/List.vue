<template>
  <div class="bg-gray-300 pb-4 rounded">
    <list-header @search="$emit('search', $event)" />
    <div
      v-if="isLoading"
      class="relative min-h-[570px]"
    >
      <spinner class="absolute top-1/2 left-1/2" />
    </div>
    <list-rows
      v-else-if="!isLoading && posts.length > 0"
      :posts="posts"
      @delete="$emit('delete', $event)"
    />
    <div
      v-else
      class="pt-4 text-2xl text-gray-900 text-center"
      v-text="$t('posts.noPost')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Post } from '@/interfaces'
import ListHeader from '@atoms/ListHeader'
import Spinner from '@atoms/Spinner'
import ListRows from '@molecules/ListRows'

export default defineComponent({
  name: 'OrganismList',
  components: {
    ListHeader,
    ListRows,
    Spinner
  },
  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true
    },
    isLoading: Boolean
  },
  emits: ['search', 'delete']
})
</script>
