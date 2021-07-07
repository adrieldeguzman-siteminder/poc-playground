<script lang="ts">
import { defineComponent, getCurrentInstance, reactive, watch } from '@vue/composition-api'
import VueRouter from 'vue-router'

interface FilterData {
  filter1?: string | string[]
  filter2?: string | string[]
  filter3?: string | string[]
}

export default defineComponent({
  props: {
    data: {
      type: String
    }
  },
  setup (props) {
    const router = getCurrentInstance()?.proxy.$router as VueRouter
    const { data } = props
    let decodedAndParsedData: FilterData = {}

    if (data) {
      decodedAndParsedData = JSON.parse(atob(data))
    }

    const myFilters = reactive({
      filterA: decodedAndParsedData?.filter1 ?? [],
      filterB: decodedAndParsedData?.filter2 ?? [],
      filterC: decodedAndParsedData?.filter3 ?? []
    })

    const filterAValues = [1, 2, 3, 4, 5]
    const filterBValues = ['A', 'B', 'C', 'D', 'E']
    const filterCValues = ['!', '@', '#', '$', '%']

    watch(myFilters, (value) => {
      const data = btoa(JSON.stringify({
        filter1: value.filterA,
        filter2: value.filterB,
        filter3: value.filterC
      }))
      router.push({ query: { data } })
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
