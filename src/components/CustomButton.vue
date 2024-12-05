<template>
  <button class="button" v-bind="$attrs">{{ title }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CustomButton',
  props: {
    title: {
      type: String,
      default: 'Entrar',
    },
  },
  inhertAttrs: true,
})
</script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: hsla(160, 100%, 37%, 0.2);
  border: none;
  border-radius: 4px;
  min-width: 120px;
}
</style>
