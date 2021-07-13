<script lang="ts">
import { defineComponent, watch } from '@vue/composition-api'
import LocalStorageUpdater from '@/components/LocalStorageUpdater.vue'
import { user } from '@/services/user'

export default defineComponent({
  components: {
    LocalStorageUpdater
  },
  setup () {
    watch(user, value => console.log(value))

    return { user }
  }
})
</script>
<template>
  <div class="local-storage">
    <p>{{ user }}</p>
    <local-storage-updater />
  </div>
</template>
