<script lang="ts">
import { defineComponent, PropType, getCurrentInstance, reactive, watch } from '@vue/composition-api'
import VueRouter from 'vue-router'

export default defineComponent({
  props: {
    filter1: {
      type: Array as PropType<string[]>
    },
    filter2: {
      type: Array as PropType<string[]>
    },
    filter3: {
      type: Array as PropType<string[]>
    }
  },
  setup (props) {
    const router = getCurrentInstance()?.proxy.$router as VueRouter
    const { filter1, filter2, filter3 } = props

    const myFilters = reactive({
      filterA: filter1 ?? [],
      filterB: filter2 ?? [],
      filterC: filter3 ?? []
    })

    const filterAValues = [1, 2, 3, 4, 5]
    const filterBValues = ['A', 'B', 'C', 'D', 'E']
    const filterCValues = ['!', '@', '#', '$', '%']

    watch(myFilters, (value) => {
      const query = {
        filter1: value.filterA,
        filter2: value.filterB,
        filter3: value.filterC
      }
      router.push({ query })
    })

    return { myFilters, filterAValues, filterBValues, filterCValues }
  }
})
</script>
<template>
  <div class="filters">
    {{ myFilters.filterA }}
    {{ myFilters.filterB }}
    {{ myFilters.filterC }}

    <div class="filter-a">
      <template v-for="value in filterAValues">
        <input type="checkbox" name="filterA" :key="value" :value="value" v-model="myFilters.filterA"> {{ value }}
      </template>
    </div>

    <div class="filter-b">
      <template v-for="value in filterBValues">
        <input type="checkbox" name="filterB" :key="value" :value="value" v-model="myFilters.filterB"> {{ value }}
      </template>
    </div>

    <div class="filter-c">
      <template v-for="value in filterCValues">
        <input type="checkbox" name="filterC" :key="value" :value="value" v-model="myFilters.filterC"> {{ value }}
      </template>
    </div>
  </div>
</template>
