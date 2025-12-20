// content.config.ts
import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        // ชื่อ collection 'blogs' ให้ตรงกับที่คุณเรียกใช้ใน queryCollection('blogs')
        blogs: defineCollection({
            type: 'page', // ใช้ 'page' เพราะเราต้องการ URL path
            source: 'blogs/*.md', // บอกว่าไฟล์อยู่ที่ content/blogs/
            schema: z.object({
                title: z.string(),
                description: z.string(),
                date: z.string(),
                image: z.string(),
                to: z.string(),
                badge: z.object({
                    label: z.string(),
                    color: z.string()
                }),
                authors: z.array(z.object({
                    name: z.string(),
                    avatar: z.object({
                        src: z.string()
                    })
                }))
            })
        })
    }
})