<script setup lang="ts">
const links = ref([
    {
        label: 'Get started',
        color: 'neutral'
    },
    {
        label: 'Learn more',
        color: 'neutral',
        variant: 'subtle',
        trailingIcon: 'i-lucide-arrow-right'
    }
])

const ctaLinks = ref([
    {
        label: 'แอดไลน์คุยกับเรา',
        icon: 'i-simple-icons-line',
        color: 'success',
        size: 'lg',
        to: 'https://line.me/ti/p/yourid'
    }
])
</script>

<template>
    <div class="relative">
        <NuxtImg src="images/car/1.jpg" class="w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-[800px] object-cover"
            alt="My image file description" placeholder="loading.png" loading="lazy" />
        <div class="absolute inset-0 flex flex-col items-center justify-end pb-6 md:pb-12 bg-black/30">
            <p class="text-sm font-bold tracking-widest text-slate-400 mb-2 uppercase">One Stop Service</p>
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-8">Repair & Modify</h1>

            <div class="flex justify-center gap-8 text-lg md:text-xl font-medium text-white">
                <span class="border-b-2 border-transparent hover:border-red-500 transition-all">Maintenance</span>
                <span class="border-b-2 border-transparent hover:border-red-500 transition-all">Customization</span>
            </div>
        </div>
    </div>

    <ContentHero />
    <ContentPromotion />
    <ContentServices />
    <ContentPortfolio />
    <UContainer>
        <UPageCTA title="พร้อมให้ 'CAR AUTO' ดูแลรถคันโปรดของคุณหรือยัง?"
            description="ไม่ว่าจะเป็นงานเช็คระยะ ปรับแต่งช่วงล่าง หรือแก้ไขปัญหาจุกจิก เราพร้อมดูแลด้วยความใส่ใจมาตรฐานเดียวกับรถของเราเอง ปรึกษาเราได้เลยครับ จริงใจ จบจริง ไม่ทิ้งงาน"
            variant="solid" :links="ctaLinks as any" />
    </UContainer>

    <ContentTestimonials />
    <ContentBlogs />


</template>