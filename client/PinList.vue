<template>
<div class="pins">
  <pin v-for="pin in pins"></pin>
</div>
</template>

<script>
import Pin from './Pin.vue';

export default {
  name: 'pin-list',
  data () {
    return {
      pins: [],
    }
  },

  components: {
    pin: Pin,
  }
}
</script>

<style>
.example {
  color: red;
}
</style>