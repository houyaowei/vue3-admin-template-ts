import { defineStore } from 'pinia';
import type { tagMata } from '../../types/tagview'
import type { UserStoreState } from "@/types/router";

export const useSettingStore = defineStore({
  id: 'settingStore',
  state: (): UserStoreState => ({
    tagsList: [],
    collapse: true,
  }),
  getters: {},
  actions: {
    delTagsItem(data: tagMata) {
      this.tagsList.splice(data.index, 1);
    },
    setTagsItem(data: tagMata) {
      this.tagsList.push(data);
    },
    clearTags() {
      this.tagsList = [];
    },
    closeTagsOther(data: tagMata) {
      this.tagsList = data;
    },
    closeCurrentTag(data: tagMata) {
      for (let i = 0, len = this.tagsList.length; i < len; i++) {
        const item = this.tagsList[i];
        if (item.path === data.$route.fullPath) {
          if (i < len - 1) {
            data.$router.push(this.tagsList[i + 1].path);
          } else if (i > 0) {
            data.$router.push(this.tagsList[i - 1].path);
          } else {
            data.$router.push('/');
          }
          this.state.tagsList.splice(i, 1);
          break;
        }
      }
    },
    // 侧边栏折叠
    handleCollapse(data: boolean) {
      this.collapse = data;
    },
  },
});
