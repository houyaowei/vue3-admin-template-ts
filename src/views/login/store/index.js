import { defineStore } from 'pinia';

export const useLoginStore = defineStore({
  id: 'loginStore',
  state: () => ({
    categories: [],
  }),
  getters: {
    getAllCategories: (state) => {
      return state.categories;
    },
  },
  actions: {
    addCategories() {
      this.categories.push({
        name: 'test',
        count: 1,
      });
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        // key: '', //可以不配置，默认是storeid
        storage: window.localStorage,
        // paths: ['nested.data'] //如果想缓存部分数据，就配置该项,默认缓存所有数据
      },
    ],
  },
});
