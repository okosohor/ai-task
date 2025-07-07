import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals', 
    'next/typescript',   
  ),
  {
    rules: {
      'eslintIgnore': 0,
      'indent': ['error', 2], 
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'no-var': 'error',
      'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
      'react/prop-types': 1,
      'react/jsx-filename-extension': [1, { 'extensions': ['.jsx', '.tsx'] }],
      'no-console': ['warn', { 'allow': ['warn', 'error'] }],
      'no-return-await': 'error', 
      'no-throw-literal': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'no-redeclare': 'error',
      'no-useless-constructor': 'error',
      'prefer-arrow-callback': 'error', 
      'func-names': ['error', 'always'],
      'prefer-const': 'error',
      'no-else-return': 'error', 
      '@typescript-eslint/explicit-module-boundary-types': 0,
      'no-unused-expressions': 'error',
      'array-callback-return': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-magic-numbers': ['warn', { 'ignore': [0, 1, -1] }],
      'react/jsx-max-props-per-line': ['error', { 'maximum': 3 }],
      'semi': ['error', 'always'],
      'react/jsx-wrap-multilines': [
        'error',
        {
          'declaration': true,
          'assignment': true,
          'return': true,
        },
      ],
    },
  },
];

export default eslintConfig;
