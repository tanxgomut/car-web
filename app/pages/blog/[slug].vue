<script setup>
import copy from 'copy-to-clipboard';
const route = useRoute()
const router = useRouter()
const toast = useToast()
const contact = useContact()

const { data: page } = await useAsyncData(`/blog/${route.params.slug}`, () => {
    return queryCollection('blogs').path(`/blogs/${route.params.slug}`).first()
})

const { data: posts } = await useAsyncData('random-posts', async () => {
    const allPosts = await queryCollection('blogs')
        .all()

    const shuffled = [...allPosts].sort(() => 0.5 - Math.random())

    return shuffled.slice(0, 2)
})

const articleUrl = `/blog/${route.params.slug}`

useSeoMeta({
    title: page.value?.title,
    description: page.value?.description,
    ogTitle: page.value?.title,
    ogDescription: page.value?.description,
    ogImage: page.value?.image,
    ogUrl: articleUrl,
})


const socialLinks = [
    { icon: 'i-simple-icons-facebook', color: '#1877F2', to: contact.value.facebook },
    { icon: 'i-simple-icons-instagram', color: '#E4405F', to: contact.value.instagram },
    { icon: 'i-simple-icons-youtube', color: '#FF0000', to: contact.value.youtube },
    { icon: 'i-simple-icons-tiktok', color: '#FFFFFF', to: contact.value.tiktok },
]

const links = ref([
    {
        icon: 'i-simple-icons-facebook',
        variant: 'ghost',
        color: 'neutral',
        to: `https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`,
        target: '_blank'
    },
    {
        icon: 'i-simple-icons-line',
        variant: 'ghost',
        color: 'neutral',
        to: `https://social-plugins.line.me/lineit/share?url=${articleUrl}`,
        target: '_blank'
    },
    {
        icon: 'i-lucide-link',
        variant: 'ghost',
        color: 'neutral',
    }
])

</script>

<template>
    <UContainer class="mt-[calc(var(--ui-header-height)-1rem)] lg:mt-[calc(var(--ui-header-height)+2rem)]">
        <UPage v-if="page">
            <UBreadcrumb :items="[
                { label: 'blogs', to: '/blogs', icon: 'i-lucide-book-open' },
                { label: page?.title, to: `/blog/${route.params.slug}`, icon: 'i-lucide-box', },
            ]" />
            <UPageHeader :title="page.title" :description="page.description">
                <template #headline>
                    <UBadge v-if="page.date" variant="soft">
                        {{ page?.badge?.label }}
                    </UBadge><span class="ml-2"> 🏀 {{ useFormatDate(page?.date) }}</span>
                </template>
                <template #description>
                    <p>{{ page?.description }}</p>
                    <UUser :name="page?.authors?.name" :avatar="page?.authors?.avatar" :description="page?.authors?.tel"
                        size="xl" class="mt-12" />
                </template>
            </UPageHeader>

            <UPageBody>
                <ContentRenderer :value="page" />

                <USeparator label="บทความ" />

                <div class="mt-10 mb-12">
                    <div class=" w-full bg-gray-200 dark:bg-gray-800 mb-6"></div>
                    <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div class="flex items-center gap-2 text-gray-500 dark:text-gray-400 min-w-fit">
                            <UIcon name="i-lucide-tags" class="w-4 h-4" />
                            <span class="text-sm font-bold uppercase tracking-wide">Related Topics:</span>
                        </div>

                        <div class="flex flex-wrap gap-2">
                            <UButton v-for="tag in page.tags" :key="tag" size="sm" color="gray" variant="ghost"
                                class="rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 border border-transparent hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-200">
                                # {{ tag }}
                            </UButton>
                        </div>
                    </div>

                </div>

                <div
                    class="mt-16 relative bg-gray-900 rounded-[32px] overflow-hidden border border-white/10 text-center px-6 py-12 shadow-2xl shadow-black/50">

                    <div
                        class="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary-500/50 to-transparent">
                    </div>

                    <div
                        class="absolute inset-0 bg-linear-to-b from-primary-500/3 via-transparent to-transparent pointer-events-none">
                    </div>

                    <div class="relative z-10 max-w-2xl mx-auto">

                        <div class="mb-8">
                            <h3 class="text-3xl font-bold text-white mb-3 tracking-tight">
                                ต้องการสอบถามข้อมูลเพิ่มเติม?
                            </h3>
                            <p class="text-gray-400 text-lg">
                                ทีมงาน {{ contact.name }} ยินดีให้คำปรึกษาและตอบทุกข้อสงสัย <br class="hidden md:block">
                                สามารถโทรหาเรา หรือติดต่อผ่านอีเมล <NuxtLink href="mailto:{{ contact.email }}"
                                    class="text-white hover:underline">{{ contact.email }}</NuxtLink> ได้เลยครับ
                            </p>
                        </div>

                        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                            <UButton :to="`tel:${contact.tel}`" icon="i-lucide-phone-call" size="xl" color="primary"
                                variant="solid"
                                class="w-full sm:w-auto px-8 rounded-full shadow-[0_0_20px_rgba(var(--color-primary-500),0.3)] hover:scale-105 transition-transform duration-200"
                                :ui="{ font: 'font-bold' }">
                                {{ contact.tel }}
                            </UButton>

                            <UButton :to="contact.googleMap" target="_blank" icon="i-simple-icons-line" size="xl"
                                color="success" variant="solid"
                                class="w-full sm:w-auto rounded-full border border-white/5">
                                แอดไลน์คุยกับเรา
                            </UButton>
                        </div>

                        <div class="relative mb-10">
                            <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                <div class="w-full border-t border-white/10"></div>
                            </div>
                            <div class="relative flex justify-center">
                                <span
                                    class="bg-gray-900 px-4 text-sm text-gray-500 uppercase tracking-widest font-medium">
                                    ช่องทางอื่นๆ
                                </span>
                            </div>
                        </div>

                        <div class="flex flex-col items-center gap-10">
                            <div class="flex flex-wrap justify-center gap-3">
                                <UButton v-for="social in socialLinks" :key="social.to" :to="social.to" target="_blank"
                                    :icon="social.icon" variant="ghost" color="gray" size="lg"
                                    class="rounded-full transition-all duration-300 hover:scale-110 bg-white/5 border border-white/10"
                                    :style="{ '--hover-color': social.color }" :ui="{
                                        base: 'text-[var(--hover-color)] shadow-[0_0_15px_var(--hover-color)]'
                                    }" />
                            </div>

                            <div
                                class="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400 bg-white/5 px-6 py-3 rounded-2xl border border-white/5">
                                <span v-for="person in [contact.userFirst, contact.userSecond]" :key="person.name"
                                    class="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                                    <span
                                        class="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                                    <span class="font-medium text-gray-300">{{ person.name }}</span>
                                    <span class="opacity-50">|</span>
                                    <NuxtLink :to="`tel:${person.tel}`" class="hover:underline hover:text-primary-400">
                                        {{
                                            person.tel
                                        }}</NuxtLink>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>


                <UPageHeader class="flex justify-between items-center">
                    <template #headline>
                        <UButton to="/blogs" icon="i-lucide-arrow-left" variant="ghost" color="neutral">Back to blogs
                        </UButton>
                    </template>
                    <template #links>
                        <p>แชร์ : </p>
                        <UButton v-for="link in links" :key="link.icon" :icon="link.icon" variant="soft" color="neutral"
                            :to="link.icon !== 'i-lucide-link' ? link.to : ''" target="_blank" @click="() => {
                                if (link.icon === 'i-lucide-link') {
                                    copy(articleUrl);
                                    toast.add({
                                        title: 'Copied',
                                        icon: 'i-lucide-link'
                                    })
                                }

                            }"> </UButton>
                    </template>
                </UPageHeader>

                <UBlogPosts class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:hidden ">
                    <UBlogPost v-for="(post, index) in posts" :key="index" v-bind="post"
                        :date="useFormatDate(post.date)" :authors="[post?.authors]" />
                </UBlogPosts>

            </UPageBody>

            <template #right>
                <UPageAside>
                    <div v-if="posts" class=" flex flex-col gap-4">
                        <p class="mb-2">อ่านเพิ่มเติม</p>
                        <UBlogPost v-for="post in posts" :key="post.id" :title="post.title"
                            :description="post.description" :date="useFormatDate(post.date)" :image="post.image"
                            :to="post.to" :ui="{
                                title: 'text-sm',
                                description: 'text-xs line-clamp-2',
                                date: 'text-xs',
                                authors: 'text-xs',
                                avatar: 'w-6 h-6',
                            }" />
                    </div>
                </UPageAside>
            </template>

        </UPage>
    </UContainer>

</template>