import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/common/assets', import.meta.url)),
      '@apis': fileURLToPath(new URL('./src/apis', import.meta.url)),
      '@controls': fileURLToPath(
        new URL('./src/common/components/controls/', import.meta.url),
      ),
      '@layouts': fileURLToPath(
        new URL('./src/common/components/layouts/', import.meta.url),
      ),
      '@others': fileURLToPath(
        new URL('./src/common/components/others/', import.meta.url),
      ),
      '@constants': fileURLToPath(
        new URL('./src/common/constants', import.meta.url),
      ),
      '@modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
      '@slices': fileURLToPath(new URL('./src/redux/slices', import.meta.url)),
      '@redux': fileURLToPath(new URL('./src/redux', import.meta.url)),
      '@routes': fileURLToPath(new URL('./src/routes', import.meta.url)),
      '@theme': fileURLToPath(new URL('./src/theme', import.meta.url)),
      '@func': fileURLToPath(new URL('./src/utils/func/', import.meta.url)),
      '@axios': fileURLToPath(new URL('./src/utils/axios', import.meta.url)),
      '@react-query': fileURLToPath(
        new URL('./src/utils/react-query', import.meta.url),
      ),
      '@hooks': fileURLToPath(new URL('./src/utils/hooks/', import.meta.url)),
      '@confirm': fileURLToPath(
        new URL('./src/utils/confirm/', import.meta.url),
      ),
    },
  },
  build: {
    assetsDir: 'static',
    rollupOptions: {
      output: {
        chunkFileNames: 'static/[hash].chunk.js',
        assetFileNames: 'static/[hash].chunk.[ext]',
      },
    },
    // manifest: true,
  },
});
