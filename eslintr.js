module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    "plugin:prettier/recommended",
    'prettier/@typescript-eslint',
    "prettier",
    "prettier/react"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    plugins: [
      "react",
      "@typescript-eslint",
      "prettier"
    ],
    rules: {
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
}