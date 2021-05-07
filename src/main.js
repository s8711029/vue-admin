import { createApp } from "vue";
import App from "./App.vue";
import router from "../router/index.js";
import store from "../store/index.js";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

createApp(App).use(store).use(router).use(ElementUI).mount("#app");
