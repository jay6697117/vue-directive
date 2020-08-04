import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import directives from './directives';
console.log('directives :>> ', directives); // 测试
Vue.config.productionTip = false;

Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key]);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
