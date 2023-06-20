<template>
  <transition name="slide-fade">
    <div
      data-test="notify"
      class="fixed top-10 right-5 p-6 rounded shadow-md text-white"
      :class="{
        'bg-red-500': type === 'danger',
        'bg-green-500': type === 'success',
        'bg-blue-400': type === 'info'
      }"
    >
      <h3
        class="text-lg font-semibold"
        v-text="title"
      />
      <p
        class="text-sm"
        v-text="description"
      />
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AtomNotify',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    type: {
      type: String,
      validator: (v: string) => ['danger', 'info', 'success'].includes(v),
      default: 'danger'
    }
  }
})
</script>

<style scoped lang="postcss">
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 200ms cubic-bezier(0.17, 0.67, 0.17, 0.98);
}
.slide-fade-enter-from {
  transform: translateY(20px);
}
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
