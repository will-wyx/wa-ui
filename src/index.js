import Button from '../packages/button'
import Icon from '../packages/icon'
import '../packages/theme/basic/index.scss'
import '@icon-park/vue/styles/index.css'

const components = [Button, Icon]

const install = function(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ...components
}
