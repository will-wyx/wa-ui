<template>
  <button
      class="wa-button"
      @click="handleClick"
      :class="[ `wa-button--${type}` ]"
      :disabled="loading||disabled"
  >
    <wa-icon class="wa-button__icon" :name="iconName" v-if="loading || icon"/>
    <span class="wa-button__content"><slot></slot></span>
  </button>
</template>

<script>
import WaIcon from '../../icon/src/icon'

export default {
  name: "WaButton",
  components: { WaIcon },
  computed: {
    iconName() {
      return this.loading ? 'loading' : this.icon
    }
  },
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
    },
    icon: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped>

</style>
