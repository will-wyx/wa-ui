<template>
  <div class="checkbox-demo">
    <wa-checkbox v-model="checked"/>
  </div>
</template>

<script>
export default {
  name: "CheckboxDemo",
  data() {
    return {
      checked: false
    }
  },
}
</script>

<style scoped>

</style>
