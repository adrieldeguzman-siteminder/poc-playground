<script lang="ts">
import { defineComponent, ref, watch } from '@vue/composition-api'

export default defineComponent({
  emits: ['filterUpdated'],
  setup (_, { emit }) {
    const petName = ref('')
    watch(petName, (value) => {
      setTimeout(() => {
        if (petName.value === value) {
          emit('filterUpdated', value)
        }
      }, 500)
    })

    return {
      petName
    }
  }
})
</script>
<template>
  <div class="pet-filter">
    <input type="text" v-model="petName">
  </div>
</template>
