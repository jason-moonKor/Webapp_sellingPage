import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins.js";
import store from "./store.js";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// createApp(App).use(router).mixin(mixins).use(store).mount("#app");

const app = createApp(App);
app.use(router);
app.mixin(mixins);
app.use(store);
app.use(VueSweetalert2);
app.mount("#app");

window.Kakao.init("639ba83b6c956528d5f3e1bf34a28290");
