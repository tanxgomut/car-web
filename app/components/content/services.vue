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

const stepss = ref([
    {
        icon: 'i-lucide-calendar-plus',
        title: 'นัดหมายและประเมินเบื้องต้น',
        description: 'โทรศัพท์หรือจองคิวออนไลน์ เพื่อปรึกษาปัญหา/ความต้องการ พร้อมประเมินค่าใช้จ่ายเบื้องต้น',
        image: 'https://images.unsplash.com/photo-1627916607065-a86847c1b5a5?q=80&w=600&h=400&auto=format&fit=crop', // รูปคนคุยโทรศัพท์ / จองคิว
    },
    {
        icon: 'i-lucide-car-front',
        title: 'นำรถเข้าบริการ',
        description: 'นำรถเข้ามาที่ศูนย์ของเรา ทีมช่างจะทำการตรวจเช็คอย่างละเอียด เพื่อยืนยันขอบเขตงานและราคา',
        image: 'https://images.unsplash.com/photo-1549887552-cb1071f4b55c?q=80&w=600&h=400&auto=format&fit=crop', // รูปรถเข้าอู่ / ช่างตรวจสอบ
    },
    {
        icon: 'i-lucide-hammer',
        title: 'ดำเนินการซ่อม/ติดตั้ง',
        description: 'ช่างผู้เชี่ยวชาญลงมือปฏิบัติงานด้วยเครื่องมือมาตรฐาน พร้อมอัปเดตความคืบหน้าเป็นระยะ',
        image: 'https://images.unsplash.com/photo-1607869689252-a548b2610d48?q=80&w=600&h=400&auto=format&fit=crop', // รูปช่างกำลังทำงาน / ติดตั้ง
    },
    {
        icon: 'i-lucide-key-round',
        title: 'ตรวจสอบและส่งมอบ',
        description: 'ทดสอบงานอย่างละเอียด และตรวจสอบคุณภาพก่อนส่งมอบ พร้อมคำแนะนำการใช้งานและดูแลรักษา',
        image: 'https://images.unsplash.com/photo-1558980394-ee26467366a7?q=80&w=600&h=400&auto=format&fit=crop', // รูปกุญแจรถ / ลูกค้าขับออกไป
    }
]);

const steps = [
    {
        step: '01',
        title: 'นัดหมาย / ประเมิน',
        description: 'ปรึกษาปัญหา จองคิว หรือส่งรูปเพื่อประเมินราคาเบื้องต้นได้ทันที',
        icon: 'i-lucide-calendar-clock'
    },
    {
        step: '02',
        title: 'ตรวจเช็คละเอียด',
        description: 'ทีมช่างตรวจสอบสภาพรถจริง เพื่อยืนยันอะไหล่และค่าใช้จ่ายที่ชัดเจน',
        icon: 'i-lucide-search-check'
    },
    {
        step: '03',
        title: 'ดำเนินการซ่อม/แต่ง',
        description: 'ลงมือปฏิบัติงานด้วยความระมัดระวัง รายงานผลเป็นระยะ ไม่ดองงาน',
        icon: 'i-lucide-wrench'
    },
    {
        step: '04',
        title: 'ส่งมอบรถ',
        description: 'ตรวจสอบ QC ครั้งสุดท้าย ล้างทำความสะอาด พร้อมส่งรถคืนสู่มือคุณ',
        icon: 'i-lucide-key'
    }
]

</script>

<template>
    <UPageSection id="services" title="One Stop Service for Your Car"
        description="ไม่ว่าจะ 'ซ่อม' เพื่อให้วิ่งดี หรือ 'แต่ง' เพื่อให้ดูดี... ที่ CAR-AUTO เราดูแลให้คุณได้ครบ จบในที่เดียว"
        icon="i-lucide-wrench" orientation="horizontal" reverse :features="services" :links="links as any">

        <UCarousel v-slot="{ item }" dots :items="items">
            <NuxtImg :src="item" alt="Car Modification Service" loading="lazy" placeholder="loading.png"
                class="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-2xl" />
        </UCarousel>
    </UPageSection>

    <div class="relative py-16 overflow-hidden">

        <div class="absolute inset-0">
            <NuxtImg src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=2000&auto=format&fit=crop"
                alt="Car Workshop Background" class="w-full h-full object-cover" loading="lazy"
                placeholder="loading.png" />
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