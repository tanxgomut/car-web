<script setup lang="ts">
const links = ref([
    {
        label: 'จองคิว / ประเมินราคาฟรี',
        to: 'https://line.me/ti/p/yourid',
        target: '_blank',
        icon: 'i-lucide-calendar-days',
        size: 'xl',
        color: 'gray',
        variant: 'solid',
        class: `
            relative overflow-hidden border-0 ring-0 text-white font-extrabold rounded-full tracking-wider
            shadow-md shadow-primary-500/50 
            before:absolute before:inset-[-500%] before:content-[''] 
            before:animate-[spin_3s_linear_infinite] 
            before:bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#0ea5e9_10%,#ef4444_20%,#a855f7_25%,transparent_50%)]
            before:z-[-2]
            after:absolute after:inset-[2px] after:bg-gray-900 after:content-[''] 
            after:rounded-full after:z-[-1]
            hover:scale-105 transition-all duration-300
        `
    },
    {
        label: 'ดูผลงาน',
        // to: '/#portfolio',
        to: '/blog/tuning',
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
