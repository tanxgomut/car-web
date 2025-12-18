<script setup lang="ts">
const items = [
    '/images/car/1.jpg',
    '/images/car/2.jpg',
    '/images/car/3.jpg',
    '/images/car/4.jpg',
]
</script>

<template>
    <UContainer>
        <UPageHeader title="ผลงานของเรา car-auto" headline="portfolio" />
        <UCarousel v-slot="{ item }" loop dots auto-scroll :items="items"
            :ui="{ item: 'basis-1/1 md:basis-1/3', dot: 'w-6 h-1' }">
            <NuxtImg :src="item" loading="lazy" placeholder="loading.png"
                class="w-full h-[250px] md:h-[400px] object-cover rounded-lg" />
        </UCarousel>
    </UContainer>
</template>
