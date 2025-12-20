<!-- <template>
    <ContentBlogsList />
</template> -->


<!-- <script setup lang="ts">
// เพิ่ม error เพื่อดูว่ามีปัญหาไหม
const { data: posts, error } = await useAsyncData('latest-blogs', () => {
    return queryCollection('blogs').order('date', 'DESC').limit(3).all()
})
</script>

<template>
    <section class="py-16">
        <UContainer>

            <div class="bg-black text-green-400 p-4 rounded mb-4 font-mono text-xs">
                สถานะ Error: {{ error }} <br>
                จำนวนบทความ: {{ posts?.length }}
            </div>

        </UContainer>
    </section>
</template> -->

<!-- <script setup lang="ts">
// ใช้ queryCollection ของ v3
const { data: posts } = await useAsyncData('latest-blogs', () => {
  return queryCollection('blogs')
    .order('date', 'DESC') // เรียงจากใหม่ไปเก่า
    .limit(3)              // เอาแค่ 3 บทความ
    .all()
})
</script>

<template>
  <section class="py-16 bg-gray-50 dark:bg-gray-900">
    <UContainer>
      <div class="flex justify-between items-end mb-8">
        <div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">บทความและสาระน่ารู้</h2>
          <p class="text-gray-600 dark:text-gray-400">อัปเดตเทคนิคการดูแลรถและผลงานล่าสุด</p>
        </div>
        <UButton to="/blogs" variant="ghost" color="primary" trailing-icon="i-lucide-arrow-right">
          ดูทั้งหมด
        </UButton>
      </div>

      <div v-if="posts?.length" class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <UCard 
          v-for="post in posts" 
          :key="post.path" 
          class="group cursor-pointer ring-1 ring-gray-200 dark:ring-gray-800 hover:ring-primary-500 transition-all duration-300"
          
        >
          <NuxtLink :to="post.path" class="block h-full">
            
            <div class="aspect-video overflow-hidden rounded-t-lg">
              <NuxtImg 
                v-if="post.image"
                :src="post.image" 
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div v-else class="w-full h-full bg-gray-200 flex items-center justify-center">
                <UIcon name="i-lucide-image" class="w-12 h-12 text-gray-400" />
              </div>
            </div>

            <div class="p-4">
              <div class="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <UIcon name="i-lucide-calendar" class="w-4 h-4" />
                <span>{{ post.date }}</span>
              </div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-500 transition-colors">
                {{ post.title }}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {{ post.description }}
              </p>
            </div>
          </NuxtLink>
        </UCard>
      </div>

      <div v-else class="text-center py-10 text-gray-500">
        ยังไม่มีบทความในขณะนี้
      </div>

    </UContainer>
  </section>
</template> -->


<script setup lang="ts">

const route = useRoute()
const { data: posts } = await useAsyncData(route.path, () =>
  queryCollection('blogs')
    .order('date', 'DESC').all()
)

const { data: page } = await useAsyncData('/blogs/tuning', () => {
  return queryCollection('blogs').path('/blogs/tuning').first()
})

useHead({
  title: 'Blogs',
})

onMounted(() => {
  console.log(route.path)
  console.log(posts.value)
  console.log(page.value)
})

</script>

<template>

  <UContainer id="blogs" class="lg:mt-(--ui-header-height)">

    <UPageHeader title="คลังความรู้และเทคนิคยานยนต์"
      description="รวมบทความเจาะลึก เคล็ดลับการดูแลรถ และอัปเดตเทรนด์ของแต่งล่าสุด จากประสบการณ์ตรงของทีมช่างมืออาชีพ"
      headline="AUTOMOTIVE INSIGHTS" class="mb-12" />

    <UBlogPosts v-if="posts" :posts="posts as any || []" />



  </UContainer>
</template>