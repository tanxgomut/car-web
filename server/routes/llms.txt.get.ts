export default defineEventHandler((event) => {
    setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
    return `# Car-Auto - Car Modification & Maintenance Center
# Car-Auto - ศูนย์บริการตกแต่งรถยนต์และดูแลรถครบวงจร

> Car-Auto is a premium car modification and maintenance center in Bangkok, Thailand. We specialize in body kits, wheels, tires, suspension systems, and general automotive services.
> 
> Car-Auto เป็นศูนย์รวมของแต่งรถยนต์คุณภาพ บริการติดตั้งชุดแต่งรอบคัน ล้อแม็ก ยาง ช่วงล่าง และระบบเบรก โดยทีมช่างมืออาชีพ

## Website Structure

- /: Homepage - Services, promotions, and portfolio (หน้าแรก - แนะนำบริการ โปรโมชั่น และผลงาน)
- /blogs: Blog articles about automotive knowledge (รวมบทความความรู้เรื่องรถยนต์)
- /blog/[slug]: Full blog article (อ่านบทความเต็ม)

## Services (บริการ)

- Body Kits (ชุดแต่งรอบคัน): Installation of premium body kits from famous brands
- Wheels & Tires (ล้อแม็ก & ยาง): Sales and installation of all wheel styles
- Suspension (ระบบช่วงล่าง): Suspension tuning, shock absorbers, springs
- Maintenance (เซอร์วิสทั่วไป): Oil change, vehicle checkups, general repairs

## Blog Articles (บทความ)

- /blog/brake-system-maintenance: Brake system maintenance guide (เบรกดัง เบรกไม่อยู่! อาการนี้ต้องเจียรจานหรือเปลี่ยนผ้าเบรก?)
- /blog/car-detailing-guide: Car detailing and paint care tips (วิธีดูแลสีรถให้เงางามเหมือนใหม่ตลอดปี)
- /blog/engine-oil-guide: Synthetic vs Semi-synthetic oil comparison (น้ำมันเครื่องสังเคราะห์ vs กึ่งสังเคราะห์ เลือกแบบไหนคุ้มสุด?)
- /blog/suspension-check: 5 warning signs of suspension problems (5 สัญญาณเตือน! ช่วงล่างรถคุณกำลังมีปัญหา)
- /blog/tire-selection-guide: How to read tire codes and select the right tires (อ่านรหัสยางรถยนต์เป็น เลือกยางใหม่ได้ตรงใจ)
- /blog/tuning: Stage 1 vs Stage 2 tuning comparison (เจาะลึกการจูน Stage 1 vs Stage 2 ต่างกันยังไง?)

## Contact Information (ข้อมูลติดต่อ)

- Phone (โทรศัพท์): 081-234-5678
- LINE: @carauto
- Facebook: https://www.facebook.com
- Address (ที่อยู่): 123 Sukhumvit 101, Bangkok, Thailand 10110 (123 สุขุมวิท 101 ถนนสุขุมวิท กรุงเทพมหานคร 10110)
- Opening Hours (เวลาทำการ): Mon-Sat 09:00-18:00, Sun 10:00-20:00 (จันทร์-เสาร์ 09:00-18:00, อาทิตย์ 10:00-20:00)

## Technical Stack

- Framework: Nuxt 4
- UI Library: Nuxt UI 4
- Content: Nuxt Content 3
- SEO: @nuxtjs/seo
`
})

