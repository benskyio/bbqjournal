// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Nav from './components/Nav.vue'

import BootstrapVue from 'bootstrap-vue'
import VueCharts from 'vue-chartjs'

Vue.use(router);
Vue.use(BootstrapVue);
Vue.component('bbqnav', Nav);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
