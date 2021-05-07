import { createApp } from "vue";
import App from "./App.vue";
import router from "../src/router/index.js";
import store from "../src/store/index.js";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
//import router from './router'



//Vue.use(ElementUI);

//Vue.use(ElementUI);

/*
new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
  }).$mount("#app");;
 */
createApp(App).use(router).use(ElementPlus).use(router).use(store).mount("#app");
//createApp(App).use(store).use(router).mount("#app");
