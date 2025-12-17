<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import type { NavigationMenuItem } from '@nuxt/ui'
import Logo from '~/components/Logo.vue'
const route = useRoute()

const sectionTitles: Record<string, string> = {
    '#services': 'บริการ',
    '#promotion': 'โปรโมชั่น',
    '#portfolio': 'ผลงาน',
    '#blog': 'Blog',
    '#contact': 'ติดต่อเรา'
}

const pageTitle = computed(() => {
    if (route.hash && sectionTitles[route.hash]) {
        return sectionTitles[route.hash]
    }
    return null
})

useHead({
    title: pageTitle
})

const socialLinks = ref([
    {
        label: 'แอดไลน์คุยกับเรา',
        to: 'https://line.me/ti/p/',
        icon: 'i-simple-icons-line',
        color: 'neutral'
    },
    {
        label: 'Facebook',
        to: 'https://www.facebook.com/ชื่อเพจของคุณ',
        icon: 'i-simple-icons-facebook',
        color: 'neutral'
    },
    {
        label: 'Instagram',
        to: 'https://www.instagram.com/ชื่อเพจของคุณ',
        icon: 'i-simple-icons-instagram',
        color: 'neutral'
    },
    {
        label: 'Youtube',
        to: 'https://www.youtube.com/ชื่อเพจของคุณ',
        icon: 'i-simple-icons-youtube',
        color: 'neutral'
    },
    {
        label: 'Tiktok',
        to: 'https://www.tiktok.com/@ชื่อเพจของคุณ',
        icon: 'i-simple-icons-tiktok',
        color: 'neutral'
    },
])

const items = computed<NavigationMenuItem[]>(() => [
    {
        label: 'บริการ',
        to: '/#services',
        icon: 'i-lucide-layers',
        active: route.hash === '#services'
    }, {

        label: 'โปรโมชั่น',
        to: '/#promotion',
        icon: 'i-lucide-tag',
        active: route.hash === '#promotion'
    },
    {
        label: 'ผลงาน',
        to: '/#portfolio',
        icon: 'i-lucide-proportions',
        active: route.hash === '#portfolio'
    },
    {
        label: 'Blog',
        to: '/#blog',
        icon: 'i-lucide-file-text',
        active: route.hash === '#blog'
    },
    {
        label: 'ติดต่อเรา',
        icon: 'i-lucide-phone',
        to: '/#contact',
        active: route.hash === '#contact'
    }])

</script>
<template>
    <div>
        <UBanner icon="i-lucide-sparkles"
            title="🔥 โปรแรง! แพ็คเกจแต่งรถครบเซ็ต ล้อแม็ก+ยาง+ช่วงล่าง ราคาพิเศษ ฟรีค่าแรง!"
            :actions="[{ label: 'นัดหมายเลย', to: '/#contact', variant: 'outline', size: 'xs' }]" close
            close-icon="i-lucide-x" />

        <UHeader title="R.S.R Tech Group">

            <template #left>
                <NuxtLink to="/">
                    <Logo />
                </NuxtLink>
            </template>

            <UNavigationMenu :items="items" />

            <template #right>

                <UTooltip v-for="link in socialLinks" :key="link.label" :text="link.label">
                    <UButton color="neutral" variant="ghost" :to="link.to" target="_blank" :icon="link.icon"
                        :aria-label="link.label" :size="'xs'" />
                </UTooltip>
                <UColorModeButton />
            </template>

            <template #body>
                <UNavigationMenu :items="items" orientation="vertical" />
            </template>

        </UHeader>

        <UMain>
            <slot />
        </UMain>

        <USeparator icon="i-token-branded-cwar" class="mt-16" />

        <UFooter>

            <template #left>
                <p class="text-muted text-xs md:text-sm">
                    Copyright © {{ new Date().getFullYear() }} CAR-AUTO. All rights reserved.
                </p>
            </template>

            <template #right>
                <UTooltip v-for="link in socialLinks" :key="link.label" :text="link.label">
                    <UButton color="neutral" variant="ghost" :to="link.to" target="_blank" :icon="link.icon"
                        :aria-label="link.label" size="xs" />
                </UTooltip>
            </template>

        </UFooter>
    </div>
</template>