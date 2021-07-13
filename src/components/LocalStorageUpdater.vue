<script lang="ts">
import { user } from '@/services/user'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup () {
    const updateLocalStorage = () => {
      user.value = Math.random().toString()
    }

    return { updateLocalStorage }
  }
})
</script>
<template>
  <div class="local-storage-updater">
    <button @click="updateLocalStorage">Update User</button>
  </div>
</template>
