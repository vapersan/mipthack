import Vue from 'vue'
import App from './App.vue'
import {feeapi} from '@/feeapi.js';
import VueRouter from 'vue-router';
import routes from './routes';
import BootstrapVue from "bootstrap-vue";

Object.defineProperty(Vue.prototype, '$feeapi', {value: feeapi});
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);
const router = new VueRouter({
    mode: 'history',
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
    }
});
// Vue.prototype.$router = router;
new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
