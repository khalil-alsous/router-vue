import Vue from "vue";
// length cut
Vue.filter(
  "lengthCut",
  (v, textLength, suffix) => v.substring(0, textLength) + suffix
);
