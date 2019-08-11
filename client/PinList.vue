<template>
<div class="pins">
  <div v-for="pin in pins"
    :key="pin.id"
    :data-id="pin.id"

    class="pin"
    >
      <div class="editable" v-if="pin.editable">
        <div class="borderable">
          <span class="glyphicon glyphicon-trash" :data-id="pin.id"></span>
        </div>
        <div class="borderable">
          <span class="glyphicon glyphicon-pencil" :data-id="pin.id"></span>
        </div>
      </div>
      <a :href="pin.image.standard.image" class="lightbox" :data-id="pin.id">
          <div class="image-wrapper" style="`width: ${pin.image.thumbnail.width}px; height: ${pin.image.thumbnail.height}px;`">
              <img :src="pin.image.thumbnail.image" :width="pin.image.thumbnail.width" :height="pin.image.thumbnail.height"/>
          </div>
      </a>
      <p v-if="pin.description" v-html="formatDescription(description)"></p>
      <div class="pin-footer clearfix">
          <div class="avatar pull-left">
              <img :src="`//gravatar.com/avatar/${pin.submitter.gravatar}`">
          </div>
          <div class="text pull-right">
              <span class="dim">pinned by</span>
              <a :href="`/pins/users/${pin.submitter.username}/`">{{pin.submitter.username}}</a>
              <span class="dim" v-if="pin.tags">in</span>
              <span v-if="pin.tags" v-for="tag in pin.tags" class="tag">
                <a :href="`/pins/tags/${tag}/`">{{tag}}</a>
              </span>
          </div>
      </div>
  </div>
</div>
</template>

<script>
// import Pin from './Pin.vue';
import { formatDescription } from './formatters.js';

export default {
  name: 'pin-list',
  props: {
    pins: Array,
  },

  // components: {
  //   pin: Pin,
  // }
}
</script>

<style>
.example {
  color: red;
}
</style>