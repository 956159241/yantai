import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './router'

/* eslint-enable */

Vue.config.debug = process.env.NODE_ENV !== 'production'
Vue.config.devtools = Vue.config.debug
Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  hashChange: true
})

// configure router
routerConfig(router)
const App = Vue.extend(require('./app.vue'))

router.start(App, 'body')
