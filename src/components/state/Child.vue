<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  setup (props, { emit }) {
    const decrement = () => {
      // Only for :prop.bind/@update:prop
      emit('update:value', props.value - 1)

      // Only for v-model/@input
      emit('input', props.value - 1)
    }

    const increment = () => {
      // Only for :prop.bind/@update:prop
      emit('update:value', props.value + 1)

      // Only for v-model/@input
      emit('input', props.value + 1)
    }

    return {
      decrement,
      increment
    }
  }
})
</script>
<template>
  <div class="child">
    <button @click="decrement">-</button>&nbsp;
    <button @click="increment">+</button>
  </div>
</template>
