const sharedConfig = require("@radiant/config/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: [
    "./src/**/*.{ts,tsx}",
  ],
};
