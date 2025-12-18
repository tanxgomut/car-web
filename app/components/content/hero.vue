<script setup lang="ts">
const links = ref([
    {
        label: 'ปรึกษา/จองคิว',
        color: 'primary',
        to: '/',
        icon: 'i-lucide-square-play'
    },
    {
        label: 'ดูผลงาน',
        to: '/',
        color: 'neutral',
        variant: 'subtle',
        trailingIcon: 'i-lucide-arrow-right'
    }
])

const features = ref([
    {
        title: 'ประสบการณ์กว่า 10 ปี',
        description: 'ทีมช่างมืออาชีพที่ผ่านการอบรมและมีประสบการณ์จริงในการแต่งรถมากว่าทศวรรษ',
        icon: 'lucide:award', // ไอคอนรางวัล/ความเชี่ยวชาญ
        to: '/about'
    },
    {
        title: 'ดูแลรถมาแล้ว 5,000+ คัน',
        description: 'ได้รับความไว้วางใจจากลูกค้ามากมาย ทั้งรถบ้าน รถซิ่ง และ Supercar',
        icon: 'lucide:car-front', // ไอคอนรูปรถ
        to: '/portfolio'
    },
    {
        title: 'รับประกันงานติดตั้ง',
        description: 'อุ่นใจด้วยการรับประกันงานติดตั้งและสินค้าทุกชิ้น พร้อมบริการหลังการขาย',
        icon: 'lucide:shield-check', // ไอคอนโล่รับประกัน
        to: '/warranty'
    },
    {
        title: 'เครื่องมือมาตรฐานสากล',
        description: 'ใช้เครื่องมือทันสมัยและห้องปฏิบัติการที่สะอาด ปลอดภัย ต่อรถที่คุณรัก',
        icon: 'lucide:wrench', // ไอคอนเครื่องมือ
        to: '/services'
    }
])

</script>

<template>
    <UContainer>
        <UPageHero
            :ui="{ title: 'text-5xl sm:text-7xl text-pretty tracking-tight leading-14 sm:leading-21 font-bold text-highlighted' }"
            headline="Ultimate Performance & Style" title="ปลุกสัญชาตญาณความแรง ในสไตล์ที่เป็นคุณ"
            description="ยกระดับขีดจำกัดของรถคุณด้วยชุดแต่งเกรดพรีเมียม ช่วงล่างเซ็ตใหม่ และล้อแม็กดีไซน์ล้ำ พร้อมดูแลทุกรายละเอียดโดยทีมช่างมืออาชีพจาก DiveD Garage"
            orientation="horizontal" :links="links">
            <NuxtImg src="/images/car/2.jpg" alt="car auto" class="rounded-lg shadow-2xl ring ring-default"
                loading="lazy" placeholder="loading.png" />
        </UPageHero>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 mb-16 md:mb-24">
            <UPageFeature v-for="feature in features" :key="feature.title" :title="feature.title"
                :description="feature.description" :icon="feature.icon" :to="feature.to" target="_blank" />
        </div>

        <UPageLogos title="รองรับรถยนต์ชั้นนำทุกรุ่น" marquee :items="[
            'i-simple-icons-toyota',
            'i-simple-icons-honda',
            'i-simple-icons-bmw',
            'i-simple-icons-mercedes',
            'i-simple-icons-audi',
            'i-simple-icons-ford',
            'i-simple-icons-nissan',
            'i-simple-icons-mazda',
            'i-simple-icons-porsche',
            'i-simple-icons-tesla'
        ]" />
    </UContainer>
</template>
