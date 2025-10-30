import { defineConfig } from "eslint/config";
import json from "eslint-plugin-json";
import jsonc from "eslint-plugin-jsonc";
import markdown from "eslint-plugin-markdown";
import css from "eslint-plugin-css";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends(
        "eslint:recommended",
        "plugin:json/recommended",
        "plugin:markdown/recommended",
        "plugin:css/recommended",
    ),

    plugins: {
        json,
        jsonc,
        markdown,
        css,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },
    },

    rules: {
        indent: ["error", 2],
        quotes: ["error", "single"],
        semi: ["error", "always"],
    },
}]);