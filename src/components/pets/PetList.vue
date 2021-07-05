<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import PetItem from '@/components/pets/PetItem.vue'
import { Pet } from '@/components/pets/types'

export default defineComponent({
  components: {
    PetItem
  },
  props: {
    pets: {
      type: Array as PropType<Pet[]>,
      required: true
    }
  },
  setup () {
    return {
    }
  }
})
</script>
<template>
  <div class="pet-list">
    <pet-item
      v-for="pet in pets"
      :key="pet.id"
      :pet="pet"
    />
  </div>
</template>
