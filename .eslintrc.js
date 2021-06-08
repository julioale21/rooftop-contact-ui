module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 100,
        singleQuote: false,
        trailingComma: "all",
        semi: true,
        endOfLine: "auto",
        bracketSpacing: true,
        arrowParens: "always",
      },
    ],
  },
};
