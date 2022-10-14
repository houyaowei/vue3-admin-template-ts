<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChage">
      <el-icon v-if="!collapse"><Fold color="#1A273D" /></el-icon>
      <el-icon v-else><expand color="#1A273D" /></el-icon>
    </div>
    <div class="header-right">
      <div class="header-user-con">
        <el-dropdown>
          <span class="el-dropdown-link">
            {{ username }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>用户信息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useSettingStore } from '../stores/modules/setting';
import { Expand, Fold, ArrowDown } from '@element-plus/icons-vue';

export default {
  components: {
    Expand,
    Fold,
    ArrowDown,
  },
  setup() {
    const username = ref('admin');
    const store = useSettingStore();
    const collapse = computed(() => store.collapse);
    // 侧边栏折叠
    const collapseChage = () => {
      store.handleCollapse(!collapse.value);
    };

    onMounted(() => {
      if (document.body.clientWidth < 1500) {
        collapseChage();
      }
    });
    return {
      username,
      collapse,
      collapseChage,
    };
  },
};
</script>
<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
  background-color: #fff;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  font-size: 22px;
  color: #fff;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 56px;
}
.el-icon-s-unfold:before {
  content: '\E7BC';
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}
.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}
</style>
