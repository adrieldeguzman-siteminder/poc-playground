import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCompositionAPI, { provide } from '@vue/composition-api'
import { apolloClient } from '@/utils/apollo'
import { DefaultApolloClient } from '@vue/apollo-composable'

Vue.config.productionTip = false
Vue.use(VueCompositionAPI)

new Vue({
  router,
  store,
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },
  render: h => h(App)
}).$mount('#app')
