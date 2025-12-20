interface Contact {
    name: string;
    tel: string;
    tel2: string;
    userFirst: { name: string; tel: string };
    userSecond: { name: string; tel: string };
    email: string;
    address: string;
    googleMap: string;
    line: string;
    facebook: string;
    instagram: string;
    twitter: string;
    youtube: string;
    tiktok: string;
}

export const useContact = () => {
    const contact = ref<Contact>({
        name: 'Car-Auto',
        tel: '081-234-5678',
        tel2: '081-234-5678',
        userFirst: { name: 'คุณ ชาลี', tel: '081-234-5678' },
        userSecond: { name: 'คุณ ชิลลี่', tel: '081-234-5678' },
        email: 'car-auto@example.com',
        address: '123 สุขุมวิท 101 ถนนสุขุมวิท แขวงสุขุมวิท เขตสุขุมวิท กรุงเทพมหานคร 10110',
        googleMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.613627725927!2d100.56053331483036!3d13.736717590357328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f0000000001%3A0x0!2zMTPCsDQ0JzEyLjIiTiAxMDDCsDMzJzQ1LjgiRQ!5e0!3m2!1sen!2sth!4v1630000000000!5m2!1sen!2sth',
        line: 'https://line.me/ti/p/@carauto',
        facebook: 'https://www.facebook.com',
        instagram: 'https://www.instagram.com',
        twitter: 'https://twitter.com',
        youtube: 'https://www.youtube.com',
        tiktok: 'https://www.tiktok.com',
    })
    return contact
}