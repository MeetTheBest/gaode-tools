import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts'

export default defineConfig({
    base: './',
    plugins: [
        vue(),
        dts({
            exclude: ['./demo']
        })
    ],
    server: {
        open: true
    },
    build: {
        lib: {
            entry: './src/main.ts',
            name: 'gaode-tools',
            fileName: (format) => `gaode-tools.${format}.js`
        }
    }
});
