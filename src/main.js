import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import directives from './directives/index';
Vue.use(directives);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
