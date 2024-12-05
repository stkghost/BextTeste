<template>
  <div class="input-wrapper">
    <label v-if="label" :for="id" v-bind="$attrs" class="input-label">
      {{ label }}
    </label>

    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input-field"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CustomInput',
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
  inhertAttrs: true,
})
</script>

<style scoped>
.input-wrapper {
  min-width: 260px;
  gap: 1rem;
}

.input-label {
  display: block;
  font-size: 1rem;
  margin-bottom: 5px;
  color: #fff;
}

.input-field {
  width: 100%;
  padding: 0.725rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.input-field:focus {
  outline: none;
  border-color: #007bff;
}
</style>
