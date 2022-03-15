<template>
  <button
      class="wa-button"
      @click="handleClick"
      :class="[ `wa-button--${type}` ]"
      :disabled="loading"
  >
    <wa-icon class="wa-button__icon" name="loading" v-if="loading"/>
    <span class="wa-button__content"><slot></slot></span>
  </button>
</template>

<script>
import WaIcon from '../../icon/src/icon'

export default {
  name: "WaButton",
  components: { WaIcon },
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
    loading: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped>

</style>
