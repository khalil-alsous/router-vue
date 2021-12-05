import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./scss/main.scss";
Vue.config.productionTip = false;

// Filter
import "./filter";

// directive
import "./directive";
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
