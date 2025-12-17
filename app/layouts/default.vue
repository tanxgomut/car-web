<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import type { NavigationMenuItem } from '@nuxt/ui'
import Logo from '~/components/Logo.vue'

const route = useRoute()

const breakpoints = useBreakpoints(breakpointsTailwind)
const isSmAndUp = breakpoints.greaterOrEqual('sm')
const isMobile = breakpoints.smaller('sm')

const sectionTitles: Record<string, string> = {
    '#services': 'บริการ',
    '#promotion': 'โปรโมชั่น',
    '#portfolio': 'ผลงาน',
    '#blogs': 'Blogs',
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
        label: 'Blogs',
        to: '/#blogs',
        icon: 'i-lucide-file-text',
        active: route.path.startsWith('/blogs') || route.hash === '#blogs',
        children: [
            {
                label: 'เทคนิคแต่งรถ',
                icon: 'i-lucide-wrench',
                description: 'เคล็ดลับและเทคนิคการแต่งรถให้สวยโดนใจ',
                // to: '/blogs/car-modification-tips'
            },
            {
                label: 'รีวิวอุปกรณ์',
                icon: 'i-lucide-star',
                description: 'รีวิวอุปกรณ์แต่งรถและอะไหล่คุณภาพ',
                // to: '/blogs/equipment-reviews'
            },
            {
                label: 'ข่าวสารวงการรถ',
                icon: 'i-lucide-newspaper',
                description: 'อัปเดตข่าวสารล่าสุดในวงการรถยนต์',
                // to: '/blogs/car-news'
            },
            {
                label: 'การดูแลรักษารถ',
                icon: 'i-lucide-shield-check',
                description: 'วิธีดูแลรักษารถให้อยู่ในสภาพดีเสมอ',
                // to: '/blogs/car-maintenance'
            },
            {
                label: 'แกลเลอรี่ผลงาน',
                icon: 'i-lucide-image',
                description: 'ชมผลงานการแต่งรถจากทีมช่างมืออาชีพ',
                // to: '/blogs/gallery'
            },
            {
                label: 'คำถามที่พบบ่อย',
                icon: 'i-lucide-help-circle',
                description: 'คำตอบสำหรับคำถามยอดนิยมเกี่ยวกับการแต่งรถ',
                // to: '/blogs/faq'
            }
        ]

    },
    {
        label: 'ติดต่อเรา',
        icon: 'i-lucide-phone',
        to: '/#contact',
        active: route.hash === '#contact'
    }])

const itemss = computed<NavigationMenuItem[]>(() => [
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
        label: 'Blogs',
        to: '/#blogs',
        icon: 'i-lucide-file-text',
        active: route.path.startsWith('/blogs') || route.hash === '#blogs',
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

        <UHeader title="Car-Auto" :toggle="false">

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

        </UHeader>

        <nav class="sticky top-(--ui-header-height) bg-default/75 z-[2]">
            <UNavigationMenu highlight highlight-color="primary" orientation="horizontal"
                :items="isMobile ? itemss : items" class="lg:hidden justify-center border-b border-default w-full" :ui="{
                    label: 'w-full flex items-center gap-1.5 font-semibold text-md text-highlighted px-2.5 py-1.5',
                    link: 'gap-[4px]  sm:gap-1.5 font-normal sm:font-medium text-[12px] sm:text-sm',
                    linkLeadingIcon: 'shrink-0 size-3 sm:size-5',
                }" />
        </nav>

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