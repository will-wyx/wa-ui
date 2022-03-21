<template>
  <label
      class="wa-checkbox"
      :class="{'is-checked': model}"
  >
    <span class="wa-checkbox__input">
      <span class="wa-checkbox__border">
        <wa-icon name="check-small" class="wa-checkbox__icon"/>
      </span>
      <input v-model="model" type="checkbox" class="wa-checkbox__original"/>
    </span>
    <span class="wa-checkbox__label">Hello World</span>
  </label>
</template>

<script>
export default {
  name: "WaCheckbox",
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style scoped>
</style>
