<template>
  <div id="app">
    <button-demo/>
  </div>
</template>

<script>

import ButtonDemo from "./ButtonDemo";
export default {
  name: 'App',
  components: { ButtonDemo }
}
</script>

<style lang="scss">
#app {
  width: 900px;
  margin: 2rem auto;
}
</style>
