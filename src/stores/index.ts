import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createPinia } from 'pinia';
import type { App } from "vue";
const store = createPinia();
// install persist plugin
store.use(piniaPluginPersistedstate)

const installStore = ( app: App ): void => {
  app.use(store)
}

export default installStore;
