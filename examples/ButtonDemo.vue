<template>
  <div class="button-demo">
    <div class="button-demo__options">
      <select v-model="type">
        <option value="default">default</option>
        <option value="info">info</option>
        <option value="primary">primary</option>
        <option value="success">success</option>
        <option value="warning">warning</option>
        <option value="danger">danger</option>
      </select>
      <label for="loading">
        <input id="loading" type="checkbox" v-model="loading"> loading
      </label>
    </div>
    <div class="button-demo__private">
      <wa-button :type="type" :loading="loading" @click="handleBtnClick">{{ msg }}</wa-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonDemo",
  data() {
    return {
      msg: 'Hello World',
      loading: false,
      type: 'default'
    }
  },
  methods: {
    handleBtnClick() {
      console.log(this.msg)
    }
  },
}
</script>

<style scoped lang="scss">
.button-demo {
  &__options {
    margin: 1rem 0;
  }
}
</style>
