<template>
  <div id="app">
    <wa-button type="primary" @click="handleBtnClick">{{ msg }}</wa-button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      msg: 'Hello World'
    }
  },
  methods: {
    handleBtnClick() {
      console.log(this.msg)
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
