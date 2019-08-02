import Vue from '../node_modules/vue/dist/vue.js';
import PinList from './PinList.vue';

const app = new Vue({
  el: '#vue',
  components: {
    'pin-list': PinList,
  },
  data: {
    pins: [],
    status: 'loading',
  },
});
