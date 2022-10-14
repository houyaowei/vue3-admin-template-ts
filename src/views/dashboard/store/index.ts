import { defineStore } from 'pinia';
import type { DashboardStoreModel } from "./interfaces"
import type { DistrictModal } from "@/types/biz/test";

export const useDashboardStore = defineStore('dashboardStore',{
  state: ():DashboardStoreModel => ({
    districts: [],
  }),
  getters: {
    getAllCategories: (state) => {
      return state.districts;
    }
  },
  actions: {
    toStoreDistricts(item: DistrictModal) {
      this.districts.push(item)
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        // key: '', //可以不配置，默认是storeid
        storage: window.localStorage,
        // paths: ['nested.data'] //如果想缓存部分数据，就配置该项,默认缓存所有数据
      }
    ]
  }
});
