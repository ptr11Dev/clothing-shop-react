/* eslint-disable no-undef */
module.exports = {
  globals: {
    process: true,
    require: true,
    exports: true,
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "react/no-unescaped-entities": "off",
  },
};
