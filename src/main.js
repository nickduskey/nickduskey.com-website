// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueAnalytics from 'vue-analytics';

Vue.use(VueAnalytics, {
  id: 'UA-76715549-1',
  autoTracking: {
    screenView: true,
  },
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
