// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxt/scripts',
  ],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  content: {
    experimental: { nativeSqlite: true },
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://car-web-gamma.vercel.app',
    }
  },
})