import { defineConfig } from 'rolldown';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
  input: 'src/index.tsx',
  output: {
    file: 'dist/main.js',
    format: 'iife',
  },
  checks: {
    emptyImportMeta: false,
    moduleLevelDirective: false,
  },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },
  moduleTypes: {
    '.css': 'js',
  },
  plugins: [
    postcss({
      modules: true,
      inject: true,
    }),
  ],
});
