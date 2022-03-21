<template>
  <div id="app">
    <button-demo/>
    <checkbox-demo/>
  </div>
</template>

<script>

import CheckboxDemo from "./CheckboxDemo";
import ButtonDemo from "./ButtonDemo";
export default {
  name: 'App',
  components: { ButtonDemo, CheckboxDemo }
}
</script>

<style lang="scss">
#app {
  width: 900px;
  margin: 2rem auto;
}
</style>
