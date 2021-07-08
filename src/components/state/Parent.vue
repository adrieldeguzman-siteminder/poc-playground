<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import Child from './Child.vue'

export default defineComponent({
  components: {
    Child
  },
  setup () {
    const counter = ref(0)

    return {
      counter
    }
  }
})
</script>
<template>
  <div class="parent">
    <h1>{{ counter }}</h1>

    <div style="height: 40rem; overflow: scroll">
      <!-- Not going to update -->
      <p>No sync (not going to update)</p>
      <div class="code">&lt;Child :value="counter" /&gt;</div>
      <Child :value="counter" />

      <!-- Update using .sync -->
      <p>Using .sync</p>
      <div class="code">&lt;Child :value.sync="counter" /&gt;</div>
      <Child :value.sync="counter" />

      <!-- .sync is syntactic sugar for this -->
      <p>Expanded version of .sync</p>
      <div class="code">&lt;Child :value="counter" @update:value="event => counter = event" /&gt;</div>
      <Child :value="counter" @update:value="event => counter = event" />

      <!-- Since the prop name is 'value', v-model should work. However, it will only listen to 'input' event -->
      <p>Using v-model, since prop name is 'value'</p>
      <div class="code">&lt;Child v-model="counter" /&gt;</div>
      <Child v-model="counter" />

      <!-- v-model is syntactic sugar for this -->
      <p>Expanded version of v-model</p>
      <div class="code">&lt;Child :value="counter" @input="event => counter = event" /&gt;</div>
      <Child :value="counter" @input="event => counter = event" />

      <!-- This is the longest version without using the shorthands above -->
      <p>Expanded version of everything without using shorthands</p>
      <div class="code">&lt;Child v-bind:value="counter" v-on:input="event => counter = event" /&gt;</div>
      <Child v-bind:value="counter" v-on:input="event => counter = event" />

      <p>Note: For Vue 2.x, generally only use v-model for the context of input (text, select, checkbox)</p>
      <p>Use :prop.sync for two-way binding of parent-child state</p>
      <p>For more complex state sharing, consider putting to Vuex</p>
    </div>
  </div>
</template>
<style scoped>
div.code {
  font-family: monospace;
  border: 1px solid black;
  padding: 0.5em;
  margin: auto;
  margin-bottom: 1em;
  max-width: 40rem;
}
</style>
