<template>
  <component
      class="wa-icon"
      :class="{'wa-icon--loading': loading }"
      :is="type"
  />
</template>

<script>
import { LoadingOne, Aiming, Config, Search } from '@icon-park/vue'

export default {
  name: 'WaIcon',
  components: { LoadingOne, Aiming, Config, Search },
  props: {
    name: {
      type: String,
      default: ''
    },
  },
  computed: {
    loading() {
      return this.name === 'loading'
    },
    type() {
      let type = '';
      switch(this.name) {
        case 'loading':
          type = 'LoadingOne'
          break;
        default:
          type = this.name
          break;
      }
      console.log(type)
      return type;
    }
  },
}
</script>

<style scoped>

</style>
