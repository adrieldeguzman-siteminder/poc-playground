<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api'
import { useQuery, useResult } from '@vue/apollo-composable'
import { Pet, Query } from '@/components/pets/types'
import PetList from '@/components/pets/PetList.vue'
import PetFilter from '@/components/pets/PetFilter.vue'
import PetEmpty from '@/components/pets/PetEmpty.vue'
import { allPetsQuery } from '@/components/pets/gql/queries'

export default defineComponent({
  components: {
    PetList,
    PetFilter,
    PetEmpty
  },
  setup () {
    const { result, loading } = useQuery(allPetsQuery)
    const pets = useResult<Query, Pet[]>(result, [])

    const petFilter = ref('')
    const setFilter = (filter: string) => {
      petFilter.value = filter
    }
    const filteredPets = computed(() => pets.value.filter(pet => pet.name.toLowerCase().includes(petFilter.value.toLowerCase())))
    const isPetsEmpty = computed(() => filteredPets.value.length === 0)

    return {
      filteredPets,
      setFilter,
      loading,
      isPetsEmpty
    }
  }
})
</script>
<template>
  <div class="pets">
    <pet-filter @filterUpdated="setFilter"/>
    <span v-if="loading">Loading...</span>
    <pet-empty v-if="isPetsEmpty && !loading"/>
    <pet-list v-else :pets="filteredPets"/>
  </div>
</template>
