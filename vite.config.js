import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { portfolioConfig } from './portfolio.config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use basePath from portfolio config, fallback to environment variable or default
  base: '/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.stories.jsx',
        '**/*.config.js',
        'dist/',
        '.storybook/',
      ],
    },
  },
});
