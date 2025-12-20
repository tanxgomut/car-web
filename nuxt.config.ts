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

  // SEO Configuration
  site: {
    url: 'https://car-web-gamma.vercel.app',
    name: 'Car-Auto - ศูนย์บริการตกแต่งรถยนต์และดูแลรถครบวงจร',
    description: 'ศูนย์รวมของแต่งรถยนต์คุณภาพ บริการติดตั้งชุดแต่งรอบคัน ล้อแม็ก ยาง ช่วงล่าง และระบบเบรก โดยทีมช่างมืออาชีพ',
    defaultLocale: 'th',
  },

  sitemap: {
    sources: ['/api/__sitemap__/urls'],
  },

  robots: {
    allow: ['/'],
    disallow: ['/api/', '/_nuxt/'],
    sitemap: 'https://car-web-gamma.vercel.app/sitemap.xml',
  },

  schemaOrg: {
    identity: {
      type: 'LocalBusiness',
      name: 'Car-Auto',
      description: 'ศูนย์รวมของแต่งรถยนต์คุณภาพ บริการติดตั้งชุดแต่ง ล้อแม็ก ยาง ช่วงล่าง',
      url: 'https://car-web-gamma.vercel.app',
      logo: 'https://car-web-gamma.vercel.app/logo.png',
      telephone: '+66-81-234-5678',
      address: {
        streetAddress: '123 สุขุมวิท 101 ถนนสุขุมวิท',
        addressLocality: 'กรุงเทพมหานคร',
        addressRegion: 'กรุงเทพมหานคร',
        postalCode: '10110',
        addressCountry: 'TH',
      },
      openingHoursSpecification: [
        {
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
        {
          dayOfWeek: ['Sunday'],
          opens: '10:00',
          closes: '20:00',
        },
      ],
      sameAs: [
        'https://www.facebook.com',
        'https://www.instagram.com',
        'https://line.me/ti/p/@carauto',
      ],
    },
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