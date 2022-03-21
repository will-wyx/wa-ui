<template>
  <div class="checkbox-demo">
    <div class="checkbox-demo__options">
      <label for="disabled">
        <input id="disabled" type="checkbox" v-model="disabled"> disabled
      </label>
    </div>
    <div class="checkbox-demo__private">
      <wa-checkbox v-model="checked" :disabled="disabled"/>
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
