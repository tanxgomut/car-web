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
        description: 'สั่งสมประสบการณ์กว่า 10 ปี รู้ลึก รู้จริง ทุกระบบรถยนต์',
        icon: 'i-lucide-medal',
    },
    {
        title: 'ลูกค้าวางใจกว่า 5,000 คัน',
        description: 'เสียงตอบรับจากลูกค้ากว่า 5,000 ราย คือเครื่องยืนยันคุณภาพของเรา',
        icon: 'i-lucide-thumbs-up',
    },
    {
        title: 'รับประกันทุกงานบริการ',
        description: 'ดูแลหลังการขายอย่างดีที่สุด มีปัญหาเคลมได้ ไม่ทิ้งลูกค้า',
        icon: 'i-lucide-heart-handshake',
    },
    {
        title: 'เครื่องมือมาตรฐานสากล',
        description: 'เครื่องมือทันสมัย ถนอมรถคุณทุกขั้นตอนเหมือนรถ Supercar',
        icon: 'i-lucide-wrench',
    }
])

</script>

<template>
    <UContainer>
        <UPageHero
            :ui="{ title: 'text-4xl sm:text-6xl text-pretty tracking-tight leading-14 sm:leading-21 font-bold text-highlighted' }"
            headline="Trusted Auto Service" title="ดูแลรถคุณด้วยความจริงใจ ใส่ใจทุกรายละเอียดเหมือนรถของเราเอง"
            description="มั่นใจได้ในทุกงานซ่อมและงานแต่ง ด้วยมาตรฐานการดูแลที่เหนือกว่า ไม่ว่าจะเป็นการตรวจเช็คสภาพ แก้ไขปัญหาเครื่องยนต์ หรือตกแต่งเพิ่มสมรรถนะ เราพร้อมดูแลรถคันโปรดของคุณให้ดีที่สุด"
            orientation="horizontal" :links="links as any">
            <NuxtImg src="/images/car/2.jpg" alt="Car Auto Service" class="rounded-lg shadow-2xl ring ring-default"
                loading="lazy" placeholder="loading.png" />
        </UPageHero>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 mb-16 md:mb-24">
            <UPageFeature v-for="feature in features" :key="feature.title" :title="feature.title"
                :description="feature.description" :icon="feature.icon" target="_blank" />
        </div>

        <UPageLogos class="mb-16 md:mb-24" title="รองรับรถยนต์ชั้นนำทุกรุ่น" marquee :items="[
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
