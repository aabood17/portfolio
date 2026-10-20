import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  { ignores: ["dist/", ".astro/", ".vercel/", "node_modules/", "playwright-report/", "test-results/"] },
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  // Accessibility is checked with Lighthouse in CI: eslint-plugin-jsx-a11y doesn't support ESLint 10 yet.
];
