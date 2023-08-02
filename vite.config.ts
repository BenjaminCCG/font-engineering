import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import { resolve } from 'path';
import checker from 'vite-plugin-checker';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    checker({
      // vueTsc: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx,vue,js,jsx}"'
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
