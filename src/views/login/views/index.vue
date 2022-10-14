<template>
  <div class="login-container">
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <el-form-item prop="username">
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="用户名"
          label="用户名"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>
      <el-form-item prop="username">
        <el-input
          ref="password"
          v-model="loginForm.password"
          placeholder="密码"
          label="密码"
          name="username"
          type="password"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>
      <el-button
        size="default"
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click.prevent="handleLogin"
      >登陆
      </el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, reactive,ref } from 'vue';
  import type { UserInfo } from "../../../types/biz/user"
  import { useLoginStore } from '../store';
  import { getUserInfo} from "@/api/user";

  const loginForm = reactive({
    username: 'admin',
    password: '123456',
  } as UserInfo)

  const loginRules = {
    username: [{ required: true, trigger: 'blur' }],
    password: [{ required: true, trigger: 'blur'}]
  }
  const loading = ref(false)

  const store = useLoginStore();

  onMounted(() => {
    // console.log('login Store: ', store.addCategories())
  });
  const handleLogin = ()=> {
    getUserInfo(loginForm).then(res => {

    }).catch(e => {

    })
  }

</script>

<style scoped lang="less">
.login-container {
  width: 30%;
  height: 400px;
}
</style>
