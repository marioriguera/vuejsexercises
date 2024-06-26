import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

/**
 * Video reproductor section
 */
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";

/**
 * CSS import section
 */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/styles/main.css";

const application = createApp(App);
application.use(router);
application.use(VuePlyr, {
    plyr: {},
});
application.mount("#app");
