<template>
  <button class="wa-button" @click="handleClick">
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
}
</script>

<style scoped>

</style>
