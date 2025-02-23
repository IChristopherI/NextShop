import { PrismaClient } from '@prisma/client'
import { hashSync } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    await prisma.cartItem.deleteMany({});
    await prisma.cart.deleteMany({});
    await prisma.item.deleteMany({});
    await prisma.category.deleteMany({});
    await prisma.user.deleteMany({});

    await prisma.user.createMany({
        data: [
            {
                id: 1,
                name: 'test user',
                email: 'test@gmail.com',
                password: hashSync("12345", 10),
                role: 'USER',
            },
            {
                id: 2,
                name: 'test admin',
                email: 'testAdmin@gmail.com',
                password: hashSync("ADMINPASS", 10),
                role: 'ADMIN',
            },
        ]
    })

    await prisma.category.createMany({
        data: [
            {
                id: 1,
                name: 'Action Figures',
            },
            {
                id: 2,
                name: 'For Home',
            },
            {
                id: 3,
                name: 'Statues',
            },
        ]
    })

    await prisma.item.createMany({
        data: [
            {
                id: 61,
                name: 'SEGA Project Sekai',
                price: 1450,
                imageUrl: 'https://murasaki.store/image/cache/catalog/figures/sega/sega-234-1-742x1000.jpg',
                categoryId: 1,
                detail: 'High quality SEGA Project Sekai figure.This collectible figure features intricate detailing and a dynamic pose, making it a must have for fans',
                articule: 20240201,
                productSize: '15cm x 10cm x 8cm',
                imagePackage: [
                    'https://murasaki.store/image/cache/catalog/figures/sega/sega-234-2-742x1000.jpg',
                    'https://murasaki.store/image/cache/catalog/figures/sega/sega-234-3-742x1000.jpg',
                    'https://murasaki.store/image/cache/catalog/figures/sega/sega-234-4-742x1000.jpg',
                ],
                brand: 'SEGA',
                character: 'Hatsune Miku',
            },
            {
                id: 62,
                name: 'FuRyu Overlord - Albedo - BiCute Bunnies - Black ver',
                price: 1510,
                imageUrl: 'https://murasaki.store/image/cache/catalog/figures/furyu/fur-145-1-742x1000.jpg',
                categoryId: 1,
                detail: 'FuRyu Overlord Albedo figure in BiCute Bunnies series. This elegant black version highlights Albedos charm with fine craftsmanship and detailed sculpting.',
                articule: 20240202,
                 productSize: '18cm x 12cm x 10cm',
                imagePackage: [
                    'https://murasaki.store/image/cache/catalog/figures/furyu/fur-145-2-742x1000.jpg',
                    'https://murasaki.store/image/cache/catalog/figures/furyu/fur-145-3-742x1000.jpg',
                    'https://murasaki.store/image/cache/catalog/figures/furyu/fur-145-4-742x1000.jpg',
                    'https://murasaki.store/image/cache/catalog/figures/furyu/fur-145-5-742x1000.jpg',
                ],
                brand: 'FuRyu',
                character: 'Albedo',
            },
            {
                id: 63,
                name: 'Акриловий стенд Ван Піс 2 One Piece',
                price: 210,
                imageUrl: 'https://murasaki.store/image/cache/catalog/stands/ast336-742x1000.jpg',
                categoryId: 2,
                detail: 'Актриловий стенд по всесвіту One Piece. Якісний друк і міцний матеріал роблять його чудовим подарунком для шанувальників.',
                articule: 20240203,
                productSize: '14cm x 9cm x 0.5cm',
                imagePackage: [],
                brand: 'Murasaki',
                character: 'Monkey D. Luffy',
            },
            {
                id: 64,
                name: 'Акриловий стенд Ґриффіт Berserk',
                price: 310,
                imageUrl: 'https://murasaki.store/image/cache/catalog/stands/ast287-742x1000.jpg',
                categoryId: 2,
                detail: 'Актриловий стенд Ґриффіт з аніме Berserk. Яскравий і деталізований дизайн чудово передає образ персонажа.',
                articule: 20240204,
                productSize: '13cm x 8cm x 0.5cm',
                imagePackage: [],
                brand: 'Murasaki',
                character: 'Griffith',
            },
            {
                id: 65,
                name: 'SEGA Kusuriya no Hitorigoto - Maomao - Premium Chokonose Figure',
                price: 1200,
                imageUrl: 'https://murasaki.store/image/cache/catalog/figures/sega/sega-237-1-742x1000.jpg',
                categoryId: 1,
                detail: 'SEGA figure of Maomao from Kusuriya no Hitorigoto. Високоякісна модель з чудовою деталізацією для колекціонерів.',
                articule: 20240205,
                imagePackage: [
                    'https://murasaki.store/image/cache/catalog/figures/sega/sega-237-2-742x1000.jpg',
                    'https://murasaki.store/image/cache/catalog/figures/sega/sega-237-3-742x1000.jpg',
                    'https://murasaki.store/image/cache/catalog/figures/sega/sega-237-4-742x1000.jpg',
                ],
                brand: 'SEGA',
                productSize: '43cm x 23cm x 3.5cm',
                character: 'Maomao',
            },
            {
                id: 66,
                name: 'Акриловий стенд Зошит смерті 3 (Death Note)',
                price: 270,
                imageUrl: 'https://murasaki.store/image/cache/catalog/stands/ast340-742x1000.jpg',
                categoryId: 2,
                detail: 'Актриловий стенд за мотивами Death Note. Ідеально підходить для шанувальників аніме та манґи',
                articule:20240206,
                productSize: '13cm x 8cm x 0.5cm',
                imagePackage: [],
                brand: 'Murasaki',
                character: 'Light Yagami',
            },
            {
                name: 'Nier Automata Figures YoRHa Type A No.2',
                price: 2248,
                imageUrl: 'https://ae01.alicdn.com/kf/S8b5edb04316a40b593c17c98fbf99482M.jpg',
                categoryId: 3,
                detail: 'Figure of YoRHa Type A No.2 from Nier Automata.',
                articule: 131101,
                productSize: '24cm x 23cm x 4.5cm',
                imagePackage: [
                    'https://ae01.alicdn.com/kf/Sa4e236141e57414f87638314837f8851h.jpg?width=800&height=800&hash=1600',
                    'https://ae01.alicdn.com/kf/S0170ae83dc454b29bf6c5e3e30698f14p.jpg',
                    'https://ae01.alicdn.com/kf/S9b3f7067ae49428a8c816148aa2a6833g.jpg?width=800&height=800&hash=1600',
                    'https://ae01.alicdn.com/kf/S7a59c01543c44d2e8a0c57ebe20d517ae.jpg?width=800&height=800&hash=1600',
                ],
                brand: 'Square Enix',
                character: 'YoRHa Type A No.2',
            },
            {
                name: 'Anime The King of Fighters 98',
                price: 4857,
                imageUrl: 'https://ae01.alicdn.com/kf/S79b93fc56dcb46d99318ea5fe88d8b27V.jpg?width=800&height=800&hash=1600',
                categoryId: 3,
                detail: 'Collectible figure from The King of Fighters 98.',
                articule: 3211,
                productSize: '23cm x 12cm x 3.5cm',
                imagePackage: [
                    'https://ae01.alicdn.com/kf/Sed6998d16ac74370884929c837f35538F.jpg?width=800&height=800&hash=1600',
                    'https://ae01.alicdn.com/kf/S83abadacbd1d4b6095da63a59bbbc525O.jpg?width=800&height=800&hash=1600',
                    'https://ae01.alicdn.com/kf/Sab45786f70aa44cba80bb0c1fb54379cW.jpg?width=800&height=800&hash=1600',
                    'https://ae01.alicdn.com/kf/S9a1b8388469449869e0413a63f40913aS.jpg?width=800&height=800&hash=1600',
                ],
                brand: 'SNK',
                character: 'Kyo Kusanagi',
            },
            {
                name: 'Monkey D. Luffy (Gear Five)',
                price: 8743,
                imageUrl: 'https://www.sideshow.com/storage/product-images/912654/monkey-d-luffy-gear-five_one-piece_silo_sm.png',
                categoryId: 3,
                detail: 'Premium figure of Monkey D. Luffy in Gear Five form.',
                articule: 12332,
                productSize: '33cm x 23cm x 5.5cm',
                imagePackage: [
                    'https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/912654/monkey-d-luffy-gear-five_one-piece_gallery_64d3db64e9f5d.jpg',
                    'https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/912654/monkey-d-luffy-gear-five_one-piece_gallery_64d3db65422be.jpg',
                    'https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/912654/monkey-d-luffy-gear-five_one-piece_gallery_64d3db658e7f6.jpg',
                    'https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/912654/monkey-d-luffy-gear-five_one-piece_gallery_64d3db6682685.jpg',

                ],
                brand: 'Bandai',
                character: 'Monkey D. Luffy',
            },
            {
                name: 'Sadako Bishoujo',
                price: 4532,
                imageUrl: 'https://www.sideshow.com/storage/product-images/913536/sadako-bishoujo_sadako_silo_sm.png',
                categoryId: 3,
                detail: 'Horror-themed Bishoujo figure of Sadako.',
                articule: 123323,
                productSize: '23cm x 13cm x 3.5cm',
                imagePackage: [
                    'https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/913536/sadako-bishoujo_sadako_gallery_6682fd6a3100e.jpg',
                    'https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/913536/sadako-bishoujo_sadako_gallery_6682fd6f2c886.jpg',
                    'https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/913536/sadako-bishoujo_sadako_gallery_6682fd6f7e620.jpg',
                    'https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/913536/sadako-bishoujo_sadako_gallery_6682fd8482743.jpg',

                ],
                brand: 'Kotobukiya',
                character: 'Sadako',
            },
            {
                name: 'Uchiha Itachi',
                price: 9632,
                imageUrl: 'https://www.sideshow.com/storage/product-images/913041/uchiha-itachi_naruto-shippuden_silo_sm.png',
                categoryId: 3,
                detail: 'Figure of Uchiha Itachi from Naruto Shippuden.',
                articule: 123324,
                productSize: '43cm x 23cm x 12.5cm',
                imagePackage: [
                    'https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/913041/uchiha-itachi_naruto-shippuden_gallery_65a08177957b3.jpg',
                    'https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/913041/uchiha-itachi_naruto-shippuden_gallery_65a081796fc4f.jpg',
                    'https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/913041/uchiha-itachi_naruto-shippuden_gallery_65a0817c1563e.jpg',
                    'https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/913041/uchiha-itachi_naruto-shippuden_gallery_65a08180a5824.jpg',
                ],
                brand: 'Bandai',
                character: 'Itachi Uchiha',
            },
            {
                name: 'Guts & Casca',
                price: 7421,
                imageUrl: 'https://www.sideshow.com/storage/product-images/913588/prime-1-studio-berserk-guts-casca-quarter-scale-statue-silo_sm.png',
                categoryId: 3,
                detail: 'Premium quarter-scale statue of Guts and Casca.',
                articule: 123325,
                productSize: '42cm x 31cm x 12.5cm',
                imagePackage: [
                    'https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/913588/guts-casca_berserk_gallery_669177ba732e1.jpg',
                    'https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/913588/guts-casca_berserk_gallery_669177baed24b.jpg',
                    'https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/913588/guts-casca_berserk_gallery_669177ce12a49.jpg',
                ],
                brand: 'Prime 1 Studio',
                character: 'Guts, Casca',
            }
            
        ]
    });
    
    await prisma.cart.createMany({
        data: [
            {
                id: 1,
                userId: 1,
                totalAmount: 0,
                token: '11111',
            },

            {
                id: 2,
                userId: 2,
                totalAmount: 0,
                token: '222222',
            },
        ]
    })
    await prisma.cartItem.createMany({
        data: [
            {
                
                cartId: 1,
                itemId: 61,
                quantity: 1,
            },
            {
                cartId: 1,
                itemId: 62,
                quantity: 1,
            },

        ]
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })