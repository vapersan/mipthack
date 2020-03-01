import Vue from 'vue'
import App from './App.vue'
import {feeapi} from '@/feeapi.js';

Object.defineProperty(Vue.prototype, '$feeapi', {value: feeapi});
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
