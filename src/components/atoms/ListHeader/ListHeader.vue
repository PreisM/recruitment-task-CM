<template>
  <div
    ref="header"
    class="grid grid-cols-12 bg-gray-900 text-white py-4 sticky top-0"
    :class="isSticky && 'border-b'"
  >
    <div
      class="col-span-1 text-center px-2 whitespace-nowrap"
      v-text="$t('posts.columns.id')"
    />
    <div
      class="col-span-8 md:col-span-5 text-center px-2 whitespace-nowrap"
      v-text="$t('posts.columns.title')"
    />
    <div
      class="hidden md:block col-span-1 text-center px-2 whitespace-nowrap"
      v-text="$t('posts.columns.userId')"
    />
    <div
      class="hidden md:block col-span-3 text-center px-2 whitespace-nowrap"
      v-text="$t('posts.columns.tags')"
    />
    <div
      class="col-span-3 md:col-span-2 text-center justify-end items-center flex space-x-4 mr-4"
    >
      <input
        ref="input"
        v-model="phrase"
        class="transition-all text-gray-900 h-6 rounded focus:outline-none"
        :class="isInputHidden ? 'max-w-full sm:max-w-0 p-2 sm:p-0' : 'max-w-full p-2'"
        :placeholder="$t('posts.search')"
      >
      <button
        class="hidden sm:block"
        @click="showInput"
      >
        <icon
          :icon="isInputHidden ? 'search' : 'cross'"
          class="h-5 w-5 stroke-2 hover:text-gray-300"
          :viewBox="isInputHidden ? '0 0 50 50' : '0 0 32 32'"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import Icon from '@quarks/Icon'

export default defineComponent({
  name: 'AtomListHeader',
  components: {
    Icon
  },
  emits: ['search'],
  setup (_, { emit }) {
    const header = ref()
    const isSticky = ref(false)
    const isInputHidden = ref(true)
    const phrase = ref()
    const input = ref()

    watch(() => phrase.value, (v: string) => {
      emit('search', v)
    })

    const onScroll = () => {
      isSticky.value = header.value.getBoundingClientRect().top <= 0
    }

    const showInput = () => {
      isInputHidden.value = !isInputHidden.value
      input.value.focus()
    }

    onMounted(() => {
      window.addEventListener('scroll', onScroll)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', onScroll)
    })

    return {
      header,
      isSticky,
      isInputHidden,
      phrase,
      input,
      showInput
    }
  }
})
</script>
