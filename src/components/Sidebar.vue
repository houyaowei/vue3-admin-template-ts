<template>
  <div class="sidebar">
    <div class="logo">
      <span v-if="!collapse">管理后台开发模板</span>
    </div>
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <el-icon>
                <component :is="item.icon" />
              </el-icon>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-sub-menu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template #title>{{ subItem.title }}</template>
                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index"> {{ threeItem.title }}</el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }} </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <el-icon><component :is="item.icon" /></el-icon>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useSettingStore } from '../stores/modules/setting';
import { useRoute } from 'vue-router';
import { Location, Money, Guide, MessageBox } from '@element-plus/icons-vue';

export default {
  components: {
    Location,
    Money,
    Guide,
    MessageBox,
  },
  setup() {
    const items = [
      {
        icon: 'Guide',
        index: '/login',
        title: 'Login',
      },
      {
        icon: 'MessageBox',
        index: '/board',
        title: '设置',
      },
      {
        icon: 'Location',
        index: '/mark',
        title: '标点服务',
        subs: [
          {
            icon: 'el-icon-lx-copy',
            index: '/mark',
            title: '标点服务',
          },
          {
            icon: 'el-icon-lx-copy',
            index: '/anchor',
            title: '锚点服务',
          },
        ],
      },
    ];

    const route = useRoute();

    const onRoutes = computed(() => {
      return route.path;
    });

    const store = useSettingStore();
    const collapse = computed(() => store.collapse);

    return {
      items,
      onRoutes,
      collapse,
    };
  },
};
</script>

<style scoped>
.logo {
  color: #fff;
  font-size: 16px;
  background-color: #1a273d;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.el-menu {
  background-color: #1a273d;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 230px;
}
.sidebar > ul {
  height: 100%;
}
</style>
