<script setup lang="ts">
const services = ref([
    {
        title: 'Maintenance Service (ซ่อมบำรุงทั่วไป)',
        description: 'บริการเปลี่ยนถ่ายน้ำมันเครื่อง ตรวจเช็คระยะ ซ่อมเครื่องยนต์ เกียร์ และระบบแอร์ ด้วยเครื่องมือวิเคราะห์มาตรฐานศูนย์',
        icon: 'i-lucide-wrench', // ไอคอนประแจ (งานซ่อม)
    },
    {
        title: 'Suspension & Safety (ช่วงล่าง & เบรก)',
        description: 'แก้ไขเสียงดัง แก้ช่วงล่างย้วย อัปเกรดโช้คอัพ เบรก และยาง เพื่อความนุ่มนวลและปลอดภัยสูงสุดในการขับขี่',
        icon: 'i-lucide-shield-check', // ไอคอนโล่ (ความปลอดภัย)
    },
    {
        title: 'Custom & Modification (ตกแต่ง & โมดิฟาย)',
        description: 'จัดทรงรถสวย ติดตั้งชุดแต่งรอบคัน ท่อไอเสีย และจูนนิ่งเพิ่มความแรง ตอบโจทย์ทุกสไตล์ที่เป็นคุณ',
        icon: 'i-lucide-rocket', // ไอคอนจรวด (ความแรง/แต่งซิ่ง)
    }
])

const links = ref([
    {
        label: 'จองคิวซ่อม / ประเมินราคาแต่งรถ',
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
])

const items = ref([
    '/images/car/1.jpg',
    '/images/car/2.jpg',
    '/images/car/3.jpg',
    '/images/car/4.jpg',
])


const serviceItems = ref([
    {
        image: '/images/car/1.jpg',
        tt: 'ซ่อมบำรุงทั่วไป',
        alt: 'Maintenance & Service'
    },
    {
        image: '/images/car/2.jpg',
        tt: 'ช่วงล่าง & เบรก',
        alt: 'Suspension & Safety'
    },
    {
        image: '/images/car/3.jpg',
        tt: 'จูนนิ่ง & รีแมพ',
        alt: 'Engine Tuning'
    },
    {
        image: '/images/car/4.jpg',
        tt: 'ชุดแต่งรอบคัน',
        alt: 'Body Parts & Aero'
    },
])




const steps = [
    {
        step: '01',
        title: 'นัดหมาย / ประเมิน',
        description: 'ปรึกษาปัญหา จองคิว หรือส่งรูปเพื่อประเมินราคาเบื้องต้นได้ทันที',
        icon: 'i-lucide-calendar-clock',
        image: '/images/services/1.avif'
    },
    {
        step: '02',
        title: 'ตรวจเช็คละเอียด',
        description: 'ทีมช่างตรวจสอบสภาพรถจริง เพื่อยืนยันอะไหล่และค่าใช้จ่ายที่ชัดเจน',
        icon: 'i-lucide-search-check',
        image: '/images/services/2.jpg'
    },
    {
        step: '03',
        title: 'ดำเนินการซ่อม/แต่ง',
        description: 'ลงมือปฏิบัติงานด้วยความระมัดระวัง รายงานผลเป็นระยะ ไม่ดองงาน',
        icon: 'i-lucide-wrench',
        image: '/images/services/3.png'
    },
    {
        step: '04',
        title: 'ส่งมอบรถ',
        description: 'ตรวจสอบ QC ครั้งสุดท้าย ล้างทำความสะอาด พร้อมส่งรถคืนสู่มือคุณ',
        icon: 'i-lucide-key',
        image: '/images/services/4.png'
    }
]

</script>

<template>
    <UPageSection id="services" title="One Stop Service for Your Car"
        description="ไม่ว่าจะ 'ซ่อม' เพื่อให้วิ่งดี หรือ 'แต่ง' เพื่อให้ดูดี... ที่ CAR-AUTO เราดูแลให้คุณได้ครบ จบในที่เดียว"
        orientation="horizontal" reverse :features="services" :links="links as any">

        <UCarousel v-slot="{ item }" dots :autoplay="{ delay: 3000 }" :items="items">
            <NuxtImg :src="item" alt="Car Modification Service" loading="lazy"
                class="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-2xl" />
        </UCarousel>
    </UPageSection>

    <div class="relative pb-20">
        <UCarousel v-slot="{ item }" loop :autoplay="{ delay: 3000 }" :items="serviceItems" class="w-full relative">
            <div class="relative overflow-hidden rounded-lg ">
                <NuxtImg :src="item.image" :alt="item.alt" loading="lazy"
                    class="w-full h-[250px] md:h-[550px] object-cover rounded-lg" />
                <div class="absolute inset-0 flex flex-col items-center justify-end pb-2">
                    <h2 class="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-8">{{ item.tt }}</h2>
                </div>
            </div>
        </UCarousel>
    </div>

    <div class="relative py-16 overflow-hidden">

        <div class="absolute inset-0">
            <NuxtImg src="/images/services/image.png" alt="Car Workshop Background" class="w-full h-full object-cover"
                loading="lazy" />
            <div class="absolute inset-0 bg-gray-900/65 backdrop-blur"></div>
        </div>

        <UContainer class="relative">
            <UPageHeader title="Service Process" description="ขั้นตอนง่ายๆ สู่ความสมบูรณ์แบบของรถคุณ"
                headline="HOW IT WORKS" class="mb-8 md:mb-12"
                :ui="{ title: 'text-white', description: 'text-white' }" />

            <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <div v-for="(item, index) in steps" :key="index"
                    class="group relative bg-gray-900/60 border border-gray-700/50 rounded-2xl 
               p-4 md:p-6 
               hover:border-cyan-400/50 hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">

                    <div class="absolute top-2 right-4 font-black text-gray-200 md:text-slate-600 group-hover:text-gray-200 transition-colors select-none
                    text-4xl md:text-6xl">
                        {{ item.step }}
                    </div>

                    <div class="relative rounded-lg bg-cyan-500 md:bg-gray-800 flex items-center justify-center  group-hover:bg-cyan-500 transition-colors duration-300 shadow-lg shadow-cyan-500/20
                    w-10 h-10 md:w-12 md:h-12 
                    mb-4 md:mb-6">

                        <UIcon :name="item.icon" class="text-black md:text-gray-300 group-hover:text-black transition-colors
                     text-xl md:text-2xl" />
                    </div>

                    <h3 class="font-bold text-white relative group-hover:text-cyan-400 transition-colors
                   text-lg md:text-xl 
                   mb-2 md:mb-3">
                        <!-- <UIcon :name="item.icon" />  -->
                        {{ item.title }}
                    </h3>

                    <p class="text-gray-400 leading-relaxed relative
                  text-sm ">
                        {{ item.description }}
                    </p>

                </div>
            </div>
        </UContainer>
    </div>


</template>
