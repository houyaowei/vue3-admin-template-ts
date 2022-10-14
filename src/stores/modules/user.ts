import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'userStore',
  state: () => ({
    userInfo: {},
    isLogin: false,
  }),
  getters: {},
  actions: {
    // 侧边栏折叠
    setUserInfo(data: object) {
      this.userInfo = data;
    },
  },
});
