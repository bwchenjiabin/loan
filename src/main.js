// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'jquery'
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://172.16.0.245:8080/'
Vue.config.productionTip = false


Vue.config.productionTip = false

import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'; 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

