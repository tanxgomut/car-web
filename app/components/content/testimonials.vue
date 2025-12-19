<script setup lang="ts">
const testimonials = [
    {
        quote: '“บริการดีมากครับ จบปัญหาเรื่องช่วงล่างได้ตรงจุด ทีมช่างให้คำแนะนำดี ไม่ขายของเยอะเกินความจำเป็น ประทับใจมาก”',
        rating: 5, // ✨ เพิ่ม Rating
        user: {
            name: 'คุณนนท์',
            description: 'เจ้าของ Honda Civic FE',
            avatar: { src: 'https://i.pravatar.cc/150?u=1', alt: 'Non' }
        }
    },
    {
        quote: '“เอารถมาจูน Stage 2 วิ่งดีขึ้นคนละเรื่องเลยครับ กราฟเนียน เครื่องไม่ร้อน ดูแลหลังการขายดีมาก แนะนำเลยครับ”',
        rating: 5, // ✨ เพิ่ม Rating
        user: {
            name: 'K. Peter',
            description: 'เจ้าของ BMW G20 330e',
            avatar: { src: 'https://i.pravatar.cc/150?u=2', alt: 'Peter' }
        }
    },
    {
        quote: '“งานติดตั้งเบรกเนี๊ยบมาก ไม่มีเสียงดังรบกวน ร้านสะอาด เครื่องมือดูมาตรฐาน ไว้จะกลับมาใช้บริการอีกแน่นอนครับ”',
        rating: 5, // ✨ เพิ่ม Rating
        user: {
            name: 'คุณบอย',
            description: 'เจ้าของ Toyota Fortuner',
            avatar: { src: 'https://i.pravatar.cc/150?u=3', alt: 'Boy' }
        }
    },
    {
        quote: '“ประทับใจความเร็วในการให้บริการ นัดคิวแล้วได้ทำเลย ไม่ต้องรอนาน อะไหล่แท้แกะกล่องให้เห็น มั่นใจได้ครับ”',
        rating: 5, // ✨ เพิ่ม Rating
        user: {
            name: 'คุณแม็ค',
            description: 'เจ้าของ Ford Everest',
            avatar: { src: 'https://i.pravatar.cc/150?u=4', alt: 'Mac' }
        }
    }
]
</script>

<template>
    <UContainer class="relative mt-10 md:mt-16">
        <UPageHeader title="เสียงตอบรับจากลูกค้าจริง" description="ความประทับใจของผู้ใช้บริการ คือกำลังใจสำคัญของเรา"
            headline="TESTIMONIALS" class="mb-8 md:mb-12 flex flex-col  items-center text-center" />

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <UPageCard v-for="(item, index) in testimonials" :key="index"
                class="ring ring-default hover:ring-primary/30 transition-all duration-300 bg-gray-900 dark:bg-gray-950 flex flex-col">
                <div class="flex flex-col h-full">

                    <div class="flex items-center gap-1 mb-4">
                        <UIcon v-for="i in 5" :key="i" name="i-lucide-star" class="w-4 h-4"
                            :class="i <= item.rating ? 'text-primary fill-primary' : 'text-gray-700 fill-gray-700'" />
                    </div>

                    <p class="text-gray-300 italic leading-relaxed">
                        {{ item.quote }}
                    </p>
                </div>

                <template #footer>
                    <UUser v-bind="item.user" size="lg"
                        :ui="{ name: 'text-white', description: 'text-primary font-medium' }" />
                </template>
            </UPageCard>
        </div>

    </UContainer>
</template>