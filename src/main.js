import Vue from 'vue';
import App from '@/App.vue';
import store from '@/store';
import router from '@/router';

import '@/assets/styles/app.scss';

import { formatNumber } from '@/utils/formatNumber';

Vue.config.productionTip = false;
Vue.filter('number', formatNumber);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
