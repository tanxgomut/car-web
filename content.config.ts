// content.config.ts
import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blogs: defineCollection({
            type: 'page',
            source: 'blogs/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                date: z.string(),
                image: z.string(),
                to: z.string(),
                tags: z.array(z.string()),
                badge: z.object({
                    label: z.string(),
                    color: z.string()
                }),
                authors: z.array(z.object({
                    name: z.string(),
                    tel: z.string(),
                    avatar: z.object({
                        src: z.string()
                    })
                }))
            })
        })
    }
})