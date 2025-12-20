<script setup>
const route = useRoute()
const { data: page } = await useAsyncData(`/blog/${route.params.slug}`, () => {
    return queryCollection('blogs').path(`/blogs/${route.params.slug}`).first()
})


useSeoMeta({
    title: page.value?.title,
    description: page.value?.description,
    ogTitle: page.value?.title,
    ogDescription: page.value?.description,
    ogImage: page.value?.image
})

const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}


</script>

<template>
    <UContainer class="md:mt-[calc(var(--ui-header-height)-1rem)] lg:mt-[calc(var(--ui-header-height)+2rem)]">
        <UPage v-if="page">
            <UBreadcrumb :items="[
                { label: 'blogs', to: '/blogs', icon: 'i-lucide-book-open' },
                { label: page?.title, to: `/blog/${route.params.slug}`, icon: 'i-lucide-box', },
            ]" />
            <UPageHeader :title="page.title" :description="page.description">
                <template #headline>
                    <UBadge v-if="page.date" variant="soft">
                        {{ formatDate(page.date) }}
                    </UBadge>
                </template>
                <template #description>
                    <p>{{ page.description }}</p>
                    <UUser :name="page.authors.name" :avatar="page.authors.avatar" size="xl" class="mt-12" />
                </template>
            </UPageHeader>

            <UPageBody>
                <ContentRenderer :value="page" />

                <USeparator />

                <UContentSurround :surround="page.to" />
            </UPageBody>
        </UPage>
    </UContainer>

    <!-- <UContainer v-if="page" class="py-10 lg:py-16">

        <div class="max-w-3xl mx-auto text-center mb-10">

            <div class="flex justify-center items-center gap-4 mb-6">
                <UButton to="/blogs" icon="i-heroicons-arrow-left" variant="ghost" color="gray">
                    Back
                </UButton>
                <span class="text-gray-300">|</span>
                <UBadge v-if="page.badge" :color="page.badge.color" variant="subtle">
                    {{ page.badge.label }}
                </UBadge>
                <span class="text-gray-500 text-sm">{{ formatDate(page.date) }}</span>
            </div>

            <h1 class="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
                {{ page.title }}
            </h1>

            <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {{ page.description }}
            </p>

            <div class="flex justify-center items-center gap-4">
                <div v-for="(author, index) in page.authors" :key="index" class="flex items-center gap-2">
                    <UAvatar :src="author.avatar.src" :alt="author.name" size="sm" />
                    <span class="text-sm font-medium text-gray-900 dark:text-white">
                        {{ author.name }}
                    </span>
                </div>
            </div>
        </div>

        <div class="max-w-4xl mx-auto mb-12">
            <img :src="page.image" :alt="page.title"
                class="w-full h-auto rounded-xl shadow-lg aspect-video object-cover" />
        </div>

        <article class="max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-primary">
            <ContentRenderer :value="page" />
        </article>

        <UDivider class="my-12 max-w-3xl mx-auto" />

        <div class="flex justify-center gap-4">
            <UButton to="/blogs" variant="outline" size="lg">
                อ่านบทความอื่นๆ
            </UButton>
        </div>

    </UContainer> -->
</template>