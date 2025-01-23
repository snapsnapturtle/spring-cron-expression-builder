import { fixupConfigRules } from "@eslint/compat";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["**/dist", "**/coverage", "**/eslint.config.mjs"],
  },
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "prettier",
    ),
  ),
  ...tseslint.configs.recommended,
  {
    plugins: {
      "react-refresh": reactRefresh,
      "@typescript-eslint": tseslint.plugin,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        project: [
          "./tsconfig.json",
          "./tsconfig.node.json",
          "./tsconfig.app.json",
        ],
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "react/react-in-jsx-scope": "off",
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],
    },
  },
];
