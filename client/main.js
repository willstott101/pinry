import Vue from '../node_modules/vue/dist/vue.js';
import Pin from './Pin.vue';

const app = new Vue({
  el: '#vue',
  components: {
    'pin': Pin,
  }
});
