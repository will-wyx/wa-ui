<template>
  <div class="checkbox-demo">
    <h1>Checkbox</h1>
    <div class="checkbox-demo__options">
      <wa-checkbox v-model="disabled">disabled</wa-checkbox>
    </div>
    <div class="checkbox-demo__private">
      <wa-checkbox v-model="checked" :disabled="disabled">
        Hello World
      </wa-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckboxDemo",
  data() {
    return {
      checked: false,
      disabled: false,
    }
  },
}
</script>

<style scoped lang="scss">
.checkbox-demo {
  &__options {
    margin: 1rem 0;
  }
}
</style>
