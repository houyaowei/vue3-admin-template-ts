import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import './assets/style/main.less';
const app = createApp(App);

app.use(router);

import installStore from "@/stores";
installStore(app)
// @ts-ignore
import installElement from './plugins/element-plus';
installElement(app);

app.mount('#app');
