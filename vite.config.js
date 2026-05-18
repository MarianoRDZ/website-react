import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { portfolioConfig } from './portfolio.config';

export default defineConfig({
  plugins: [react()],
  base: '/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'src/test/', '**/*.config.js', 'dist/'],
    },
  },
});
