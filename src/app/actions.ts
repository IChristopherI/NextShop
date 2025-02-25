'use server'

import { OrderStatus, Prisma } from "@prisma/client"
import { hashSync } from "bcrypt";
import { cookies } from "next/headers";
import { CheckoutFormValues } from "../components/shared/constants/form-checkout";
import { getUserSession } from "../components/shared/ProfileForm/get-user";
import { prisma } from "@/prisma/prisma-client";

export async function createOrder(data: CheckoutFormValues) {
    try {
        const cookie = await cookies(); //функция next для получения токена(только в некст js)
        const cartToken = cookie.get('cartToken')?.value;

        if (!cartToken) {
            return 'Cart token a not a found';
        }

        //ищем корзину
        const userCart = await prisma.cart.findFirst({
            where: {
                token: cartToken,
            },
            include: {
                items: {
                    include: {
                        item: true
                    }
                }
            }
        })
        if (!userCart) {
            throw Error('Корзина не найдена');
        }

        const order = await prisma.order.create({
            data: {
                token: cartToken,
                fullName: data.firstName + ' ' + data.lastName,
                email: data.email,
                phone: data.phone,
                address: data.address,
                comment: data.comment,
                totalAmount: 123,
                status: OrderStatus.PENDING,
                items: JSON.stringify(userCart.items),

            }
        })

        await prisma.cart.update({
            where: {
                id: userCart.id
            },
            data: {
                totalAmount: 0,
            }
        })

        await prisma.cartItem.deleteMany({
            where: {
                cartId: userCart.id
            }
        })


    } catch (error) {
        console.log('CREATER_ORDER', error)
    }

}


export async function updateUserInfo(body: Prisma.UserUpdateInput) {
    try {
        const currentUser = await getUserSession();

        if (!currentUser) {
            return 'Пользователь не найден';
        }

        const findUser = prisma.user.findFirst({
            where: {
                email: currentUser.email as string 
            }
        })

        await prisma.user.update({
            where: {
                email: currentUser.email as string
            },
            data: {
                name: body.name,
                email: body.email,
                password: body.password ? hashSync(body.password as string, 10) : '',
            }
        })
    } catch (error) {
        console.log('[UPDATE-USER]', error)
    }
}


export async function registerUser(body: Prisma.UserCreateInput) {
    try {

        const user =  await prisma.user.findFirst({
            where: {
                email: body.email,
            },
        });

        if (user) {
            throw new Error('Пользователь уже существует');
          }

       await prisma.user.create({
            data:{
                name: body.name,
                email: body.email,
                password: hashSync(body.password, 10),
            }
        })

    } catch (error) {
        console.log('[REGISTER]-USER', error)
    }

}