<template>
  <transition
    enter-from-class="transition opacity-0"
    enter-active-class="transition duration-200 ease-linear"
    enter-to-class="transition opacity-100"
    leave-from-class="transition opacity-100"
    leave-active-class="transition duration-200 ease-linear"
    leave-to-class="transition opacity-0"
  >
    <div
      v-if="show"
      class="fixed inset-0 z-0"
    >
      <div class="absolute inset-0 bg-gray-500 opacity-75" />
      <div class="bg-white max-w-xl w-9/12 md:w-auto shadow rounded absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-500">
        <div
          v-if="isDelete"
          class="py-4 md:py-6 px-6 text-justify md:text-left md:px-12 text-gray-700"
        >
          <span
            class="text-base md:text-xl font-semibold"
            v-text="$t('posts.modalDelete', { title: `${post.title}` })"
          />
          <div class="mt-8 mx-auto space-x-4 text-center">
            <button
              class="bg-red-500 rounded-full text-white px-4 py-2 font-semibold"
              @click="$emit('delete')"
              v-text="$t('posts.confirm')"
            />
            <button
              class="rounded-full border text-gray-700 px-4 py-2 font-semibold"
              @click="$emit('close')"
              v-text="$t('posts.decline')"
            />
          </div>
        </div>
        <div
          v-else
          class="py-6 px-4 md:px-12 text-gray-900 text-center"
        >
          <div class="flex justify-between">
            <span
              class="text-base md:text-xl font-semibold"
              v-text="post.title"
            />
            <button
              class="block mt-0 md:mt-0.5 mb-auto"
              @click="$emit('close')"
            >
              <icon
                icon="cross"
                class="h-6 w-6 stroke-2 hover:text-gray-700"
                viewBox="0 0 32 32"
              />
            </button>
          </div>
          <div class="mt-8 text-left text-sm md:text-base">
            <span
              v-text="post.body"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '@quarks/Icon'

export default defineComponent({
  name: 'AtomModal',
  components: {
    Icon
  },
  props: {
    show: Boolean,
    post: {
      type: Object,
      required: true
    },
    isDelete: Boolean
  },
  emits: ['delete', 'close']
})
</script>
