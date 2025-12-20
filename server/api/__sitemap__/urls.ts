import { defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async () => {
    const blogs = [
        { loc: '/blog/brake-system-maintenance', lastmod: '2025-12-11' },
        { loc: '/blog/car-detailing-guide', lastmod: '2025-12-18' },
        { loc: '/blog/engine-oil-guide', lastmod: '2025-12-20' },
        { loc: '/blog/suspension-check', lastmod: '2025-12-23' },
        { loc: '/blog/tire-selection-guide', lastmod: '2025-11-24' },
        { loc: '/blog/tuning', lastmod: '2025-12-24' },
    ]

    return blogs.map((blog) => ({
        loc: blog.loc,
        lastmod: blog.lastmod,
        changefreq: 'weekly',
        priority: 0.8,
    }))
})
