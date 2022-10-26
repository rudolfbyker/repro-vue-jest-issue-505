/**
 * Jest config for unit tests.
 */

const preset = require("@vue/cli-plugin-unit-jest/presets/typescript-and-babel/jest-preset");

module.exports = {
  ...preset,
  globals: {
    ...preset.globals,
    "vue-jest": {
      pug: { doctype: "html" },
    },
  },

  testMatch: ["**/__tests__/**/*.test.(js|jsx|ts|tsx)"],

  transformIgnorePatterns: [],
};
