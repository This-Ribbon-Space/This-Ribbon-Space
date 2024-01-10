// Importing required modules
// import { defineNuxtConfig } from 'nuxt3';
import { resolve } from 'path';

export default defineNuxtConfig({
  // Setting up aliases for path shortcuts
  alias: {
    '@': resolve(__dirname, './'),
  },
  
  // Enabling Vue.js devtools for development
  devtools: { enabled: true },

  // Including CSS files in the project
  css: ['~/assets/css/main.css'],

  // Configuring PostCSS plugins
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
