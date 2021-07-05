<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { Pet } from '@/components/pets/types'

export default defineComponent({
  props: {
    pet: {
      required: true,
      type: Object as PropType<Pet>
    }
  },
  setup () {
    return {}
  }
})
</script>
<template>
  <div class="pet-item">
    <h3>{{ pet.id }}</h3>
    <h4>{{ pet.name }}</h4>
    <h4>{{ pet.weight }}</h4>
    <hr>
  </div>
</template>
