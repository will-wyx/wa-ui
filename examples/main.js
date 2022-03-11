import Vue from 'vue'
import App from './App.vue'
import WAUI from '@/index'

Vue.config.productionTip = false

Vue.use(WAUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
