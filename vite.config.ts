import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

export default defineConfig({
  alias: {
    '@': path.resolve(__dirname, './src')
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://h5.maocanhua.cn',
        changeOrigin: true,
        secure: false,
        ws: true,
      }
    }
  },
  plugins: [reactRefresh()]
})
