<template>
  <component
      class="wa-icon"
      :class="{'wa-icon--loading': loading }"
      :is="type"
  />
</template>

<script>
import { LoadingOne } from '@icon-park/vue'

export default {
  name: 'WaIcon',
  components: { LoadingOne },
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
      }
      return type;
    }
  },
}
</script>

<style scoped>

</style>
