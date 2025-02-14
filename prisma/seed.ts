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
            },
            {
                id: 62,
                name: 'Фігурка FuRyu Overlord - Albedo - BiCute Bunnies - Black ver',
                price: 1510,
                imageUrl: 'https://murasaki.store/image/cache/catalog/figures/furyu/fur-145-1-742x1000.jpg',
                categoryId: 1,
            },
            {
                id: 63,
                name: 'Акриловий стенд Ван Піс 2 One Piece',
                price: 210,
                imageUrl: 'https://murasaki.store/image/cache/catalog/stands/ast336-742x1000.jpg',
                categoryId: 2,
            },
            {
                id: 64,
                name: 'Акриловий стенд Ґриффіт Berserk',
                price: 310,
                imageUrl: 'https://murasaki.store/image/cache/catalog/stands/ast287-742x1000.jpg',
                categoryId: 2,
            },
            {
                id: 65,
                name: 'Фігурка SEGA Kusuriya no Hitorigoto - Maomao - Premium Chokonose Figure',
                price: 1200,
                imageUrl: 'https://murasaki.store/image/cache/catalog/figures/sega/sega-237-1-742x1000.jpg',
                categoryId: 1,
            },
            {
                id: 66,
                name: 'Акриловий стенд Зошит смерті 3 (Death Note)',
                price: 270,
                imageUrl: 'https://murasaki.store/image/cache/catalog/stands/ast340-742x1000.jpg',
                categoryId: 2,
            }
        ]
    })
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
                
                itemId: 61,
                cartId: 1,
                quantity: 1,
            },
            {
                itemId: 62,
                cartId: 1,
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