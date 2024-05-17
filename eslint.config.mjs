import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    files: ["src/**/*.js"],
    ignores: ["**/*.config.js", "**/*.config.mjs"],
    rules: {
      // "no-unused-vars": "warn",
      "prettier/prettier": [
        "error",
        {
          printWidth: 80,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: "all",
          arrowParens: "always",
          semi: false,
          endOfLine: "auto",
        },
      ],
    },
  },
];
