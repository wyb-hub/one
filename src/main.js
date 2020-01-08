import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
// import Fastclick from 'fastclick';
Vue.use(ViewUI)
Vue.config.productionTip = false
// 解决移动端300ms延迟
// Fastclick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
