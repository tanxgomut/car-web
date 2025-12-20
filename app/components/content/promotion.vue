<script setup lang="ts">
const promotions = ref([
    {
        title: 'แพ็กเกจเปลี่ยนถ่ายน้ำมันเครื่องสังเคราะห์แท้ 100%',
        subTitle: 'สำหรับรถ Eco Car / City Car (ไม่เกิน 4 ลิตร)',
        price: '1,290.-',
        originalPrice: '2,500.-',
        features: [
            'น้ำมันเครื่องสังเคราะห์แท้ 100% (เลือกเบอร์ได้)',
            'ฟรี! ไส้กรองน้ำมันเครื่องตรงรุ่น',
            'ฟรี! ค่าแรงเปลี่ยนถ่าย',
            'แถมฟรี! ตรวจเช็คสภาพรถ 30 รายการ'
        ],
        image: '/images/promotion/1.avif',
        tag: 'BEST SELLER',
    },
    {
        title: 'โปรโมชั่นช่วงล่าง จัดทรงซิ่ง / ยกสูง',
        subTitle: 'โช๊คอัพ สปริงโหลด หรือชุดยก ลดทันทีทั้งร้าน',
        price: 'ลด 10%',
        originalPrice: 'ฟรีค่าติดตั้ง',
        features: [
            'ส่วนลดค่าอะไหล่ 10% เมื่อเปลี่ยนครบชุด',
            'ฟรี! ค่าแรงติดตั้งและตั้งศูนย์ล้อ (มูลค่า 800.-)',
            'รับประกันงานติดตั้ง 1 ปี หรือ 20,000 กม.',
            'ผ่อน 0% นานสูงสุด 6 เดือน'
        ],
        image: '/images/promotion/2.avif',
        tag: 'LIMITED TIME',
    },
    {
        title: 'ล้างแอร์ระบบส่องกล้อง + อบโอโซนฆ่าเชื้อ',
        subTitle: 'หายใจสดชื่น กำจัดกลิ่นอับ แอร์เย็นฉ่ำไม่ต้องรื้อคอนโซล',
        price: '990.-',
        originalPrice: '1,500.-',
        features: [
            'ส่องกล้องล้างตู้แอร์ (เห็นหน้างานจริง)',
            'น้ำยาล้างเกรด Premium ไม่กัดกร่อนคอยล์',
            'ฟรี! อบโอโซนฆ่าเชื้อโรคภายในรถ',
            'ฟรี! ตรวจเช็คกรองแอร์'
        ],
        image: '/images/promotion/3.avif',
        tag: 'HEALTH CARE',
        tagColor: 'emerald'
    },
    {
        title: 'อัปเกรดระบบเบรก / เปลี่ยนผ้าเบรก Performance',
        subTitle: 'ระยะเบรกสั้นลง มั่นใจทุกการขับขี่ หยุดสั่งได้ดั่งใจ',
        price: 'เริ่ม 2,500.-',
        originalPrice: 'ฟรีไล่น้ำมันเบรก',
        features: [
            'มีผ้าเบรกให้เลือกหลายเกรด (Ceramic / Metallic)',
            'ฟรี! บริการเจียรจานเบรกแบบประชิด',
            'ฟรี! น้ำมันเบรก ATE DOT 4',
            'ทำความสะอาดดุมล้อและทาจารบีกันเสียง'
        ],
        image: '/images/promotion/4.jpg',
        tag: 'SAFETY FIRST',
        tagColor: 'blue'
    }
])
</script>

<template>
    <div id="promotion" class="scroll-mt-16 py-8 relative overflow-hidden">

        <div class="absolute inset-0 bg-gray-950">
            <div
                class="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]">
            </div>
            <div class="absolute top-0 right-0 w-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none">
            </div>
        </div>

        <UContainer class="relative">

            <UPageHeader title="โปรโมชั่นสุดคุ้มประจำเดือน"
                description="ดีลพิเศษที่เราคัดสรรมาเพื่อรถคนโปรดของคุณ รีบจองก่อนหมดเขต" headline="SPECIAL OFFERS"
                class="mb-8 md:mb-12"
                :ui="{ title: 'text-white', description: 'text-white', headline: 'text-amber-500 font-bold' }" />

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <div v-for="(promo, index) in promotions" :key="index"
                    class="group relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-900/20">
                    <div
                        class="absolute inset-0 rounded-3xl p-[2px] bg-linear-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10">
                    </div>

                    <div class="flex flex-col md:flex-row h-full">

                        <div class="relative w-full md:w-2/5 h-48 sm:h-56 md:h-auto overflow-hidden">
                            <NuxtImg :src="promo.image" :alt="promo.title" loading="lazy" placeholder="loading.png"
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div
                                class="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-gray-900 via-gray-900/50 to-transparent">
                            </div>

                            <div class="absolute top-3 left-3 md:top-4 md:left-4">
                                <div class="font-bold text-white">
                                    {{ promo.tag }}
                                </div>
                            </div>
                        </div>

                        <div
                            class="p-5 md:p-8 flex flex-col justify-between flex-1 relative z-10 bg-gray-900 md:bg-transparent">
                            <div>
                                <h3
                                    class="text-xl md:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-cyan-400 transition-colors">
                                    {{ promo.title }}
                                </h3>
                                <p class="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">
                                    {{ promo.subTitle }}
                                </p>

                                <ul class="space-y-2 md:space-y-3 mb-6 md:mb-8">
                                    <li v-for="(feature, i) in promo.features" :key="i"
                                        class="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-gray-300">
                                        <UIcon name="i-lucide-check-circle-2"
                                            class="w-4 h-4 md:w-5 md:h-5 text-cyan-500 shrink-0" />
                                        <span>{{ feature }}</span>
                                    </li>
                                </ul>
                            </div>

                            <div class="flex items-end justify-between border-t border-gray-800 pt-4 md:pt-6 mt-auto">
                                <div>
                                    <div class="text-gray-500 text-xs md:text-sm line-through decoration-red-500 mb-1">
                                        ปกติ {{ promo.originalPrice }}
                                    </div>
                                    <div
                                        class="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-yellow-200">
                                        {{ promo.price }}
                                    </div>
                                </div>

                                <UButton size="md" color="primary" variant="solid" icon="i-lucide-calendar-check-2"
                                    class="font-bold hover:scale-105 transition-transform">
                                    จองเลย
                                </UButton>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <p class="text-center text-gray-500 text-[10px] md:text-xs mt-6 md:mt-8">
                *เงื่อนไขเป็นไปตามที่บริษัทกำหนด โปรโมชั่นอาจมีการเปลี่ยนแปลงโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
            </p>

        </UContainer>
    </div>
</template>