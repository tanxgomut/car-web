<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import type { NavigationMenuItem } from '@nuxt/ui'
import type { FooterColumn } from '@nuxt/ui'
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

        label: 'โปรโมชั่น',
        to: '/#promotion',
        icon: 'i-lucide-tag',
        active: route.hash === '#promotion'
    },
    {
        label: 'บริการ',
        to: '/#services',
        icon: 'i-lucide-layers',
        active: route.hash === '#services'
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

        label: 'โปรโมชั่น',
        to: '/#promotion',
        icon: 'i-lucide-tag',
        active: route.hash === '#promotion'
    },
    {
        label: 'บริการ',
        to: '/#services',
        icon: 'i-lucide-layers',
        active: route.hash === '#services'
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


const columns: FooterColumn[] = [
    {
        label: 'Contact',
        children: [
            {
                label: 'คุณ ไมเคิล',
                icon: 'i-lucide-user',
            },
            {
                label: 'โทร: 081-234-5678',
                icon: 'i-lucide-phone',
                to: 'tel:0812345678',
                target: '_self'
            },
            {
                label: 'LINE: @car-auto',
                icon: 'i-simple-icons-line',
                to: 'https://line.me/ti/p/@car-auto',
                target: '_blank'
            },
            {
                label: 'Facebook Fanpage',
                icon: 'i-simple-icons-facebook',
                to: 'https://facebook.com/car-auto-shop',
                target: '_blank'
            },
            {
                label: 'แผนที่ร้าน (Google Maps)',
                icon: 'i-lucide-map-pin',
                to: 'https://maps.google.com/?q=พิกัดร้านของคุณ',
                target: '_blank'
            },

        ]
    },
    {
        label: 'Services',
        children: [
            {
                label: 'ชุดแต่งรอบคัน (Body Kits)',
                to: '/services/body-kits',
                target: '_self'
            },
            {
                label: 'ล้อแม็ก & ยาง (Wheels & Tires)',
                to: '/services/wheels',
                target: '_self'
            },
            {
                label: 'ระบบช่วงล่าง (Suspension)',
                to: '/services/suspension',
                target: '_self'
            },
            {
                label: 'เซอร์วิสทั่วไป (Maintenance)',
                to: '/services/maintenance',
                target: '_self'
            }
        ]
    }
]
const isScrolled = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
<template>

    <UBanner icon="i-lucide-sparkles" title="🔥 โปรแรง! แพ็คเกจแต่งรถครบเซ็ต ล้อแม็ก+ยาง+ช่วงล่าง ราคาพิเศษ ฟรีค่าแรง!"
        :actions="[{ label: 'นัดหมายเลย', to: '/#contact', variant: 'outline', size: 'xs' }]" close
        close-icon="i-lucide-x" />


    <UHeader title="Car-Auto" :toggle="false" :ui="{
        root: isScrolled
            ? 'sticky bg-default/85'
            : 'sticky lg:fixed w-full bg-default/85 ',

    }">

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

    <nav class="sticky top-(--ui-header-height) backdrop-blur z-50"
        :class="isScrolled ? 'bg-default/85' : 'bg-default/50'">
        <UNavigationMenu highlight highlight-color="primary" orientation="horizontal" :items="isMobile ? itemss : items"
            class="lg:hidden justify-center border-b border-default w-full" :ui="{
                label: 'w-full flex items-center gap-1.5 font-semibold text-md text-highlighted px-2.5 py-1.5',
                link: 'gap-[4px]  sm:gap-1.5 font-normal sm:font-medium text-[12px] sm:text-sm',
                linkLeadingIcon: 'shrink-0 size-3 sm:size-5',
            }" />
    </nav>

    <UMain>
        <slot />
    </UMain>

    <USeparator icon="i-token-branded-cwar" class="mt-16" />

    <UFooter id="contact" class="scroll-mt-24" :ui="{ top: 'pt-6 pb-0 lg:pt-8 lg:pb-2', }">
        <template #top>
            <UContainer class="mb-6">
                <UFooterColumns :columns="columns">
                    <template #right>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.613627725927!2d100.56053331483036!3d13.736717590357328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f0000000001%3A0x0!2zMTPCsDQ0JzEyLjIiTiAxMDDCsDMzJzQ1LjgiRQ!5e0!3m2!1sen!2sth!4v1630000000000!5m2!1sen!2sth"
                            width="100%" height="100%" style="border:0;" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            class="w-full h-full group-hover:grayscale-0 transition-all duration-500"></iframe>
                    </template>
                </UFooterColumns>
            </UContainer>
            <USeparator />
        </template>

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

</template>