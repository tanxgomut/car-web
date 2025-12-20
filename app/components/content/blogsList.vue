<script setup lang="ts">

useHead({
    title: 'Blogs',
})

const blocks = ref([
    {
        title: '5 สัญญาณเตือน! ช่วงล่างรถคุณกำลังมีปัญหา',
        description: 'เสียงกุกกัก พวงมาลัยสั่น หรือยางกินข้าง? รู้ทันอาการเหล่านี้ก่อนที่จะสายเกินแก้ พร้อมวิธีตรวจสอบเบื้องต้นด้วยตัวเอง',
        image: '/images/blogs/1.avif',
        to: '/blogs/suspension-check',
        date: 'Dec 12, 2024',
        badge: { label: 'Maintenance', color: 'neutral' },
        authors: [
            {
                name: 'ทีมช่างเทคนิค',
                avatar: { src: '/images/blogs/avatar.avif' },
            }
        ]
    },
    {
        title: 'เจาะลึกการจูน Stage 1 vs Stage 2 ต่างกันยังไง?',
        description: 'สายซิ่งต้องรู้! อธิบายความแตกต่างระหว่างการรีแมพแต่ละสเต็ป ต้องเปลี่ยนอะไหล่อะไรบ้าง และความแรงที่ได้คุ้มค่าไหม',
        image: '/images/blogs/2.avif',
        to: '/blogs/tuning-stage-guide',
        date: 'Dec 10, 2024',
        badge: { label: 'Tuning / Performance', color: 'neutral' },
        authors: [
            {
                name: 'ทีมช่างเทคนิค',
                avatar: { src: '/images/blogs/avatar.avif' },
            }
        ]
    },
    {
        title: 'วิธีดูแลสีรถให้เงางามเหมือนใหม่ตลอดปี',
        description: 'เคลือบแก้ว (Glass Coating) กับ ติดฟิล์มใส (PPF) แบบไหนเหมาะกับคุณ? เปรียบเทียบข้อดี-ข้อเสีย เพื่อการตัดสินใจที่คุ้มค่า',
        image: '/images/blogs/3.avif',
        to: '/blogs/car-detailing-guide',
        date: 'Dec 05, 2024',
        badge: { label: 'Detailing', color: 'neutral' },
        authors: [
            {
                name: 'ทีมช่างเทคนิค',
                avatar: { src: '/images/blogs/avatar.avif' },
            }
        ]
    },
    {
        title: 'เบรกดัง เบรกไม่อยู่! อาการนี้ต้องเจียรจานหรือเปลี่ยนผ้าเบรก?',
        description: 'เรื่องความปลอดภัยรอไม่ได้ สังเกตอาการผิดปกติของระบบเบรก พร้อมความรู้เรื่องเกรดผ้าเบรก Ceramic vs Metallic ต่างกันยังไง',
        image: '/images/blogs/3.avif',
        to: '/blogs/brake-system-maintenance',
        date: 'Nov 28, 2024',
        badge: { label: 'Safety', color: 'neutral' },
        authors: [
            {
                name: 'ทีมช่างเทคนิค',
                avatar: { src: '/images/blogs/avatar.avif' },
            }
        ]
    },
    {
        title: 'อ่านรหัสยางรถยนต์เป็น เลือกยางใหม่ได้ตรงใจ ไม่โดนหลอก',
        description: 'ตัวเลขบนแก้มยางบอกอะไรบ้าง? วิธีดูปีผลิตยาง ค่า Treadwear และการเลือกดอกยางให้เหมาะกับสไตล์การขับขี่ของคุณ',
        image: '/images/blogs/1.avif',
        to: '/blogs/tire-selection-guide',
        date: 'Nov 20, 2024',
        badge: { label: 'Knowledge', color: 'neutral' },
        authors: [
            {
                name: 'ทีมช่างเทคนิค',
                avatar: { src: '/images/blogs/avatar.avif' },
            }
        ]
    },
    {
        title: 'น้ำมันเครื่องสังเคราะห์ vs กึ่งสังเคราะห์ เลือกแบบไหนคุ้มสุด?',
        description: 'ไขข้อข้องใจเรื่องความหนืดและเกรดน้ำมันเครื่อง เปลี่ยนถ่ายตอนไหนดีที่สุดเพื่อยืดอายุการใช้งานเครื่องยนต์',
        image: '/images/blogs/2.avif',
        to: '/blogs/engine-oil-guide',
        date: 'Nov 15, 2024',
        badge: { label: 'Maintenance', color: 'neutral' },
        authors: [
            {
                name: 'ทีมช่างเทคนิค',
                avatar: { src: '/images/blogs/avatar.avif' },
            }
        ]
    }
])
</script>

<template>
    <UContainer id="blogs" class="lg:mt-(--ui-header-height)">

        <UPageHeader title="คลังความรู้และเทคนิคยานยนต์"
            description="รวมบทความเจาะลึก เคล็ดลับการดูแลรถ และอัปเดตเทรนด์ของแต่งล่าสุด จากประสบการณ์ตรงของทีมช่างมืออาชีพ"
            headline="AUTOMOTIVE INSIGHTS" class="mb-12" />

        <UBlogPosts :posts="blocks as any" />

    </UContainer>
</template>