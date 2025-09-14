// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['webpack.config.mjs'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  }
);