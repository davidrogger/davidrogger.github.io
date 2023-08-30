/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './setupTests.ts',
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      provider: 'v8'
    }
  },
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      '@/components': resolve(__dirname, './src/components'),
    }
  }
});
