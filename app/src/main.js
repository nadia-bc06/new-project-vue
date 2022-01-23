import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueCompositionApi from '@vue/composition-api'
import router from './router'
import {store} from  './../src/store'

Vue.config.productionTip = false

Vue.use(VueCompositionApi)



new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
