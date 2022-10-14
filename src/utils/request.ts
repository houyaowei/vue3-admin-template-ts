/**
 * 1、可以在config中增加hideAlert=true，隐藏某次请求的toast提示
 */
import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
//@ts-ignore
import { isObject } from "javascript-validate-utils";
import { ElMessage } from "element-plus";

let loaddingCounter = 0;
// cancel request
const controller = new AbortController();

interface standardConfig extends  AxiosRequestConfig {
  noLoading?: boolean
}

const defaultConfig: standardConfig = {
  baseURL: import.meta.env.VITE_APP_BASE_API,
  withCredentials: false,
  timeout: 30000,
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh_CN'
  }
}

const _axios = axios.create(defaultConfig)
//  请求拦截器
_axios.interceptors.request.use(
  (config: standardConfig) => {
    ++loaddingCounter;
    if (!config.noLoading) {
      // useLoadingStore().setLoadingInfo(true);
    }
    return {
      ...config,
      signal: controller.signal
    };
  },
  (error) => {
    return Promise.error(error);
  }
);

_axios.interceptors.response.use(res => {
    --loaddingCounter;
    if (loaddingCounter == 0) {
      // useLoadingStore().setLoadingInfo(false);
    }
    if (!isObject(res.data)) {
      ElMessage('服务端异常！')
      return Promise.reject(res)
    }
    if (res.status != 200) {
      if (res.config.hideAlert == true) {
        return Promise.reject(res.data.msg)
      } else {
        if (res.data.msg){
          ElMessage(res.data.msg)
        }
        return Promise.reject(res.data)
      }
    }
    return Promise.resolve(res.data)
  },
  (err) => {
    --loaddingCounter;
    if (loaddingCounter == 0) {
      // useLoadingStore().setLoadingInfo(false);
    }
    if (err.message && !axios.isCancel(err)) {
      ElMessage(err.message);
    } else {
      ElMessage.closeAll();
    }
    return Promise.reject(err.data);
  }
)

export default _axios
