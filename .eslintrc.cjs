module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-nested-ternary": "off",
    "consistent-return": "off",
    "react/destructuring-assignment": [0, "always"],
    "no-shadow": "off",
    "default-param-last": 0,
    "no-restricted-syntax": [
      "error",
      "WithStatement",
      "BinaryExpression[operator='in']",
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["function-declaration", "arrow-function"],
        unnamedComponents: "arrow-function",
      },
    ],
  },
};
