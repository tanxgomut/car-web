<script setup lang="ts">

const { data: blocks } = await useAsyncData('/blogs/ggdd', () =>
    queryCollection('blogs')
        .select('title', 'date', 'description', 'image', 'authors', 'to')
        .order('date', 'DESC')
        .limit(3)
        .all()
)

const links = ref([
    {
        label: 'ดูบทความทั้งหมด',
        icon: 'i-lucide-arrow-right',
        variant: 'soft',
        trailing: true,
        to: '/blogs',
    }
])

// const blocks = ref([
//     {
//         title: '5 สัญญาณเตือน! ช่วงล่างรถคุณกำลังมีปัญหา',
//         description: 'เสียงกุกกัก พวงมาลัยสั่น หรือยางกินข้าง? รู้ทันอาการเหล่านี้ก่อนที่จะสายเกินแก้ พร้อมวิธีตรวจสอบเบื้องต้นด้วยตัวเอง',
//         image: '/images/blogs/1.avif',
//         to: '/blogs/suspension-check',
//         date: 'Dec 12, 2024',
//         badge: { label: 'Maintenance', color: 'neutral' },
//         authors: [
//             {
//                 name: 'ทีมช่างเทคนิค',
//                 avatar: {
//                     src: '/images/blogs/avatar.avif'
//                 },
//             }
//         ]
//     },
//     {
//         title: 'เจาะลึกการจูน Stage 1 vs Stage 2 ต่างกันยังไง?',
//         description: 'สายซิ่งต้องรู้! อธิบายความแตกต่างระหว่างการรีแมพแต่ละสเต็ป ต้องเปลี่ยนอะไหล่อะไรบ้าง และความแรงที่ได้คุ้มค่าไหม',
//         image: '/images/blogs/2.avif',
//         to: '/blogs/tuning-stage-guide',
//         date: 'Dec 10, 2024',
//         badge: { label: 'Tuning / Performance', color: 'neutral' },
//         authors: [
//             {
//                 name: 'ทีมช่างเทคนิค',
//                 avatar: {
//                     src: '/images/blogs/avatar.avif'
//                 },
//             }
//         ]
//     },
//     {
//         title: 'วิธีดูแลสีรถให้เงางามเหมือนใหม่ตลอดปี',
//         description: 'เคลือบแก้ว (Glass Coating) กับ ติดฟิล์มใส (PPF) แบบไหนเหมาะกับคุณ? เปรียบเทียบข้อดี-ข้อเสีย เพื่อการตัดสินใจที่คุ้มค่า',
//         image: '/images/blogs/3.avif',
//         to: '/blogs/car-detailing-guide',
//         date: 'Dec 05, 2024',
//         badge: { label: 'Detailing', color: 'neutral' },
//         authors: [
//             {
//                 name: 'ทีมช่างเทคนิค',
//                 avatar: {
//                     src: '/images/blogs/avatar.avif'
//                 },
//             }
//         ]
//     },

// ])

</script>

<template>
    <UContainer id="blogs" class="scroll-mt-24 mt-24 mb-24">
        <UPageHeader title="บทความและสาระน่ารู้"
            description="อัปเดตเทรนด์การแต่งรถ เทคนิคการดูแลรักษา และข่าวสารโปรโมชั่นล่าสุด" headline="LATEST NEWS"
            :links="links as any" class="mb-12" :ui="{ headline: 'text-cyan-400' }" />

        <!-- <UBlogPosts :posts="blocks as any" orientation="vertical" /> -->

        <UBlogPosts>
            <UBlogPost v-for="(post, index) in blocks" :key="index" v-bind="post" :title="post.title"
                :description="post.description" :image="post.image" :to="post.to" :date="useFormatDate(post.date)"
                :authors="[post?.authors]" />
        </UBlogPosts>

    </UContainer>
</template>