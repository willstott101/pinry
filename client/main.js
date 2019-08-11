import Vue from '../node_modules/vue/dist/vue.js';
import { fetchPins } from './api.js';

import PinList from './PinList.vue';


Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

const app = new Vue({
  el: '#vue',
  components: {
    'pin-list': PinList,
  },
  data: {
    pins: [],
    loading: false,
  },
});

app.loading = true;
fetchPins().then(pins => {
    app.pins = pins;
    app.loading = false;
});
