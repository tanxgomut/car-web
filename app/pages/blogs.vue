<script setup lang="ts">

const route = useRoute()
const { data: posts } = await useAsyncData('/blogs/ggll', () =>
  queryCollection('blogs')
    .order('date', 'DESC').all()
)

useHead({
  title: 'Blogs',
})

useSeoMeta({
  title: 'บทความความรู้ยานยนต์ | เคล็ดลับดูแลรถและเทรนด์แต่งรถล่าสุด',
  description: 'รวมบทความเจาะลึก เคล็ดลับการดูแลรถ อัปเดตเทรนด์ของแต่งล่าสุด จากประสบการณ์ตรงของทีมช่างมืออาชีพ Car-Auto',
  ogTitle: 'คลังความรู้และเทคนิคยานยนต์ | Car-Auto',
  ogDescription: 'อ่านบทความเจาะลึกเรื่องรถยนต์ ช่วงล่าง น้ำมันเครื่อง ยาง และการแต่งรถ',
})


</script>

<template>

  <UContainer id="blogs" class="lg:mt-(--ui-header-height)">

    <UPageHeader title="คลังความรู้และเทคนิคยานยนต์"
      description="รวมบทความเจาะลึก เคล็ดลับการดูแลรถ และอัปเดตเทรนด์ของแต่งล่าสุด จากประสบการณ์ตรงของทีมช่างมืออาชีพ"
      headline="AUTOMOTIVE INSIGHTS" class="mb-12" />

    <UBlogPosts>
      <UBlogPost v-for="(post, index) in posts" :key="index" v-bind="post" :date="useFormatDate(post.date)"
        :authors="[post?.authors as any]" />
    </UBlogPosts>

  </UContainer>
</template>