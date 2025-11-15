import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // 'react-jsx-key': 'warn', - поки не використовую .map
      'no-undef': 'error',
      'no-unused-vars': ['warn', { 
        args: 'after-used',
        ignoreRestSiblings: true ,
        'gsIgnorePattern': '^_'
        }], //перечитати пояснення
      'eqeqeq': ['error', 'always'], //суворе прирівнення ( ==, != ...)
      'no-var': 'error',
      'prefer-const': 'warn',
      'no-console': ['warn', { 'allow': ['warn', 'error'] }],

      // стилістичні правила
      'react/jsx-curly-brace-presence': ['warn', 'never'],
      'no-extra-semi': 'error',
    },
    prettierConfig
  },
])
