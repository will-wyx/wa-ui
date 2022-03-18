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
        <option value="text">text</option>
      </select>
      <label for="loading">
        <input id="loading" type="checkbox" v-model="loading"> loading
      </label>
      <label for="disabled">
        <input id="disabled" type="checkbox" v-model="disabled"> disabled
      </label>
      <select v-model="icon">
        <option :value="null">无</option>
        <option v-for="i of icons" :value="i" :key="i">{{ i }}</option>
      </select>
    </div>
    <div class="button-demo__private">
      <wa-button
          :type="type"
          :loading="loading"
          :icon="icon"
          :disabled="disabled"
          @click="handleBtnClick">{{ msg }}
      </wa-button>
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
      disabled: false,
      icon: null,
      type: 'default',
      icons: [
        'aiming',
        'config',
        'search'
      ]
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
