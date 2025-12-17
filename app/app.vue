<script setup lang="ts">
import CookieConsent from '~/components/CookieConsent.vue';


const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl
const route = useRoute()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - CAR-AUTO` : 'CAR-AUTO - ศูนย์บริการตกแต่งรถยนต์และดูแลรถครบวงจร';
  },
  htmlAttrs: {
    lang: 'th'
  },
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'canonical', href: `${siteUrl}${route.path}` }
  ]
})

useSeoMeta({
  title: 'ร้านแต่งรถครบวงจร จำหน่ายชุดแต่ง ล้อแม็ก ยาง และช่วงล่าง',
  ogTitle: 'CAR-AUTO - เปลี่ยนรถคุณให้โดดเด่น ในสไตล์ที่เป็นคุณ',
  description: 'ศูนย์รวมของแต่งรถยนต์คุณภาพ บริการติดตั้งชุดแต่งรอบคัน ล้อแม็ก ยาง ช่วงล่าง และระบบเบรก โดยทีมช่างมืออาชีพ พร้อมบริการดูแลรักษารถยนต์มาตรฐานสากล',
  ogDescription: 'ยกระดับความเท่ให้รถคันโปรด ปรึกษาเรื่องแต่งรถ จัดทรง หรือซ่อมบำรุง ได้ที่ CAR-AUTO',
  ogImage: `${siteUrl}/og-image.png`,
  twitterCard: 'summary_large_image',
  twitterImage: `${siteUrl}/og-image.png`,
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
})

</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <CookieConsent />
  </UApp>
</template>
