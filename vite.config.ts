import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import type { ConfigEnv,UserConfig } from "vite"
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv):UserConfig => {
  // console.log("mode:", mode)
  const env=loadEnv(mode, process.cwd());

  return {
    base: env.VITE_APP_BASE_URL,
    plugins: [vue(), vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      })
    ],
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "./src/assets/style/base.less";',
        }
      }
    },
    resolve: {
      extensions: [".mjs", ".js", ".jsx", ".json", ".vue",".ts"],
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 5173,
      host: "0.0.0.0",
      open: true,
      proxy: {
        "^/api": {
          target: "http://123.139.88.13:8092/",   //测试环境
          changeOrigin: true,
        }
      }
    }
  }
}

