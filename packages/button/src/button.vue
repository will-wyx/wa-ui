<template>
  <button
      class="wa-button"
      @click="handleClick"
      :class="[ `wa-button--${type}` ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "WaButton",
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
  },
}
</script>

<style scoped>

</style>
