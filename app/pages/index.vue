<script setup lang="ts">
const img = useImage()
const items = [
    'https://picsum.photos/640/640?random=1',
    // 'https://picsum.photos/640/640?random=2',
    // 'https://picsum.photos/640/640?random=3',
    // 'https://picsum.photos/640/640?random=4',
    // 'https://picsum.photos/640/640?random=5',
    // 'https://picsum.photos/640/640?random=6'
]
</script>

<template>

    <div class="relative">
        <NuxtImg src="images/car/1.jpg" class="w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] object-cover"
            alt="My image file description" :placeholder="img(`og-image.png`)" loading="lazy" />
        <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
            <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Car Modification Shop</h1>
            <p class="text-white text-lg sm:text-xl">Premium Services for Your Car</p>
        </div>
    </div>


    <!-- <UCarousel v-slot="{ item }" wheel-gestures :items="items" :ui="{
        item: 'basis-1/1 ps-0',
        prev: 'sm:start-8',
        next: 'sm:end-8',
        container: 'ms-0'
    }">

       

    </UCarousel> -->
</template>