<template>
  <h1
    class="text-3xl font-light text-gray-500 mb-6"
    v-html="text"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AtomSectionHeader',
  props: {
    text: {
      type: String,
      required: true
    }
  }
})
</script>
