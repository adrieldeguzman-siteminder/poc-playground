<script lang="ts">
import { defineComponent, ref, onMounted, computed } from '@vue/composition-api'
import pets, { Pet } from '@/utils/pets'
import PetList from '@/components/pets/PetList.vue'
import PetFilter from '@/components/pets/PetFilter.vue'

const fetchPets = (): Promise<Pet[]> => new Promise(resolve => {
  setTimeout(() => {
    resolve(pets)
  }, 1000)
})

export default defineComponent({
  components: {
    PetList,
    PetFilter
  },
  setup () {
    const pets = ref<Pet[]>([])
    const getPets = async () => {
      pets.value = await fetchPets()
    }
    onMounted(getPets)

    const petFilter = ref('')
    const setFilter = (filter: string) => {
      petFilter.value = filter
    }
    const filteredPets = computed(() => pets.value.filter(pet => pet.name.toLowerCase().includes(petFilter.value.toLowerCase())))

    return {
      filteredPets,
      setFilter
    }
  }
})
</script>
<template>
  <div class="pets">
    <pet-filter @filterUpdated="setFilter"/>
    <pet-list :pets="filteredPets"/>
  </div>
</template>
