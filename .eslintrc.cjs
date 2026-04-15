module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'prettier', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // 可以在这里自定义规则，比如：
    'react/react-in-jsx-scope': 'off', // React 17+ 不需要手动引入 React
    '@typescript-eslint/no-explicit-any': 'warn', // 尽量不使用 any，用警告提示
  },
  settings: {
    react: {
      version: '19.2',
    },
  },
};
