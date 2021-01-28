import 'vee-validate';
import '@mdi/font/css/materialdesignicons.css';
import '../../src/sass/my-styles.scss';
import 'airbnb-js-shims/target/es2015';
import Vue from 'vue';
import Buefy from 'buefy';

Vue.use(Buefy, {
  defaultIconPack: 'mdi',
});

export default {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
