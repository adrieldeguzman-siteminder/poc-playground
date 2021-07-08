<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Parent from '@/components/state/Parent.vue'

export default defineComponent({
  components: {
    Parent
  }
})
</script>
<template>
  <div class="state">
    <Parent />
  </div>
</template>
