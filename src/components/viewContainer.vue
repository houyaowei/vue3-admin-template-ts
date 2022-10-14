<template>
  <div class="about">
    <v-sidebar />
    <div class="content-box" :class="{ 'content-collapse': collapse }">
      <v-header />
      <v-tags></v-tags>
      <div class="content">
        <router-view v-slot="{ Component }">
          <transition name="move" mode="out-in">
            <div>
              <keep-alive :include="tagsList">
                <component :is="Component" />
              </keep-alive>
            </div>
          </transition>
        </router-view>
        <el-backtop target=".content"></el-backtop>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed } from "vue";
import { useSettingStore } from "../stores/modules/setting"

import vHeader from "@/components/Header.vue";
import vSidebar from "@/components/Sidebar.vue";
import vTags from "@/components/Tags.vue";
export default {
  components: {
    vHeader,
    vSidebar,
    vTags,
  },
  setup() {
    const store = useSettingStore();
    const tagsList = computed(() =>
      store.tagsList.map((item) => item.name)
    );
    const collapse = computed(() =>
      store.collapse
    );
    return {
      tagsList,
      collapse,
    };
  },
};
</script>
