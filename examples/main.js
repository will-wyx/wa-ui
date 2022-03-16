import Vue from 'vue'
import App from './App.vue'
import WaUI from '@/index'
import '../packages/theme/basic/index.scss'

Vue.config.productionTip = false

Vue.use(WaUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
