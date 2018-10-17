import Vue from 'vue'
import App from './App.vue'
import VueScrollReveal from 'vue-scroll-reveal';
import 'bootstrap/dist/css/bootstrap-grid.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

Vue.config.productionTip = false;

Vue.use(VueScrollReveal, {
  delay: 500,
  duration: 1000,
  origin: 'bottom',
  distance: '10px'
});

export const eventBus = new Vue();

new Vue({
  render: h => h(App)
}).$mount('#app')
