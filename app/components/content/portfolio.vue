<script setup lang="ts">
const portfolios = [
    {
        src: '/images/car/1.jpg',
        car: 'Honda Civic FE',
        service: 'จัดทรง Load เตี้ย + ล้อ TC105N ขอบ 18"'
    },
    {
        src: '/images/car/2.jpg',
        car: 'BMW Series 3 G20',
        service: 'Service เช็คระยะ + เปลี่ยนผ้าเบรก Brembo'
    },
    {
        src: '/images/car/3.jpg',
        car: 'Toyota Fortuner',
        service: 'Set ช่วงล่าง Profender ยก 2 นิ้ว'
    },
    {
        src: '/images/car/4.jpg',
        car: 'Nissan GTR R35',
        service: 'Tuning Stage 2 + ท่อ Titanium'
    }
]
</script>

<template>
    <UContainer class="pt-10 pb-16 md:pb-24">
        <UPageHeader id="portfolio" class="scroll-mt-24" title="ผลงานของเรา"
            description="รวมผลงานการซ่อมบำรุงและตกแต่งรถยนต์จากลูกค้าจริง ที่ไว้วางใจให้เราดูแล" headline="PORTFOLIO" />

        <UCarousel v-slot="{ item }" loop dots auto-scroll :items="portfolios" class="mt-2"
            :ui="{ item: 'basis-1/1 md:basis-1/3 ', dot: 'w-6 h-1' }">
            <div class="relative group w-full">
                <div class="relative overflow-hidden rounded-lg ">
                    <NuxtImg :src="item.src" alt="Portfolio" loading="lazy" placeholder="loading.png"
                        class="w-full h-[250px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110" />

                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 flex flex-col justify-end p-6">
                        <p class="text-red-500 text-xs font-bold uppercase tracking-wider mb-1">
                            {{ item.car }}
                        </p>
                        <h3 class="text-white text-lg font-semibold leading-tight">
                            {{ item.service }}
                        </h3>
                    </div>
                </div>
            </div>
        </UCarousel>
    </UContainer>
</template>
