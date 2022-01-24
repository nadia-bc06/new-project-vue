import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueCompositionApi from '@vue/composition-api'
import router from './router'
import {store} from  './../src/store'
import CxltToastr from 'cxlt-vue2-toastr'

Vue.use(CxltToastr)

Vue.config.productionTip = false

Vue.use(VueCompositionApi)



new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
