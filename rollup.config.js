import resolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue';

export default {
  input: 'client/main.js',
  output: [{
    file: 'pinry/static/js/vue-bundle.js',
    format: 'iife'
  }],
  plugins: [
    vue(),
    buble({
      objectAssign: 'Object.assign'
    }),
    resolve({
      mainFields: ['main'],
    }),
    commonjs(),
  ]
}