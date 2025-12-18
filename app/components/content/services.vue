<script setup lang="ts">
const features = ref([
    {
        title: 'ช่วงล่าง & เบรก (Suspension & Brake)',
        description: 'จบปัญหาช่วงล่างกระด้าง ด้วยโช้คอัพและสปริงโหลดแบรนด์ดัง พร้อมอัปเกรดระบบเบรกให้หยุดสั่งได้ดั่งใจ',
        icon: 'i-lucide-disc-3', // ไอคอนคล้ายจานเบรก/ล้อ
    },
    {
        title: 'ชุดแต่งคาร์บอน (Carbon & Bodykits)',
        description: 'เสริมลุคสปอร์ตด้วยพาร์ท Carbon Fiber แท้ และชุดแต่งรอบคัน งานเข้ารูป เนียนสนิททุกจุด',
        icon: 'i-lucide-layers', // สื่อถึงชิ้นงาน/เลเยอร์คาร์บอน
    },
    {
        title: 'จูนนิ่ง & ท่อไอเสีย (Performance)',
        description: 'เรียกพละกำลังที่ซ่อนอยู่ด้วยชุดท่อไอเสียสูตรพิเศษ และการปรับจูนกล่อง ECU ให้ขับสนุกยิ่งขึ้น',
        icon: 'i-lucide-zap', // สื่อถึงความแรง/พลังงาน
    }
])

const links = ref([
    {
        label: 'ดูรายละเอียดบริการทั้งหมด',
        to: '/services',
        variant: 'solid',
        trailingIcon: 'i-lucide-arrow-right'
    }
])

const items = ref([
    '/images/car/1.jpg',
    '/images/car/2.jpg',
    '/images/car/3.jpg',
    '/images/car/4.jpg',
])
</script>

<template>
    <UPageSection title="ดูแลรถคุณ...ครบวงจร"
        description="CAR-AUTO พร้อมยกระดับรถคันโปรดของคุณ ด้วยทีมช่างมืออาชีพและอุปกรณ์ตกแต่งมาตรฐานสากล มั่นใจได้ในทุกขั้นตอนการติดตั้ง"
        icon="i-lucide-wrench" orientation="horizontal" reverse :features="features" :links="links">

        <UCarousel v-slot="{ item }" dots :items="items" class="">
            <NuxtImg :src="item" alt="Car Modification Service" loading="lazy" placeholder="loading.png"
                class="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-2xl" />
        </UCarousel>
    </UPageSection>
</template>