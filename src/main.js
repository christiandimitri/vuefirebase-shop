import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);
Vue.component("Navbar", require("@/components/Navbar.vue").default);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
