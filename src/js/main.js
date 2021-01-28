// Boilerplate: Application entry file
import Vue from 'vue';
import App from '@components/App';
import router from '@/router';
import store from '@/store';
import '@/sass/my-styles.scss';
import '@mdi/font/css/materialdesignicons.css';
import '@js/vee-validate';
import Buefy from 'buefy';
import 'airbnb-js-shims/target/es2015';

Vue.config.productionTip = false;
Vue.use(Buefy, {
  defaultIconPack: 'mdi',
});

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  beforeCreate() {},
  render: (h) => h(App),
});
