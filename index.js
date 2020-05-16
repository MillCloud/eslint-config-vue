module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: ["eslint:recommended", "standard", "plugin:vue/recommended"],
  env: {
    browser: true,
    es2020: true,
    jest: true,
    mocha: true,
    node: true,
  },
  globals: {
    plus: "readonly",
    uni: "readonly",
    weex: "readonly",
  },
  rules: {
    // override eslint-config-standard and follow prettier default options
    "comma-dangle": ["error", "always-multiline"],
    // for projects developing
    "no-console":
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "pre-production" ||
      process.env.NODE_ENV === "staging"
        ? "warn"
        : "off",
    // for projects developing
    "no-debugger":
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "pre-production" ||
      process.env.NODE_ENV === "staging"
        ? "warn"
        : "off",
    // for projects developing
    "no-unused-vars":
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "pre-production" ||
      process.env.NODE_ENV === "staging"
        ? "warn"
        : "off",
    // override eslint-config-standard and follow prettier default options
    quotes: [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    // override eslint-config-standard and follow prettier default options
    semi: ["error", "always"],
    // override eslint-config-standard and follow prettier default options
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
  },
};
