'use server'

import { CheckoutFormValues } from "@/components/shared/constants/form-checkout";
import { OrderStatus, PrismaClient } from "@prisma/client"
import { cookies } from "next/headers";
const prisma = new PrismaClient();

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
            include:{
                items:{
                    include:{
                        item:true
                    }
                }
            }
        })
        if(!userCart){
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
            where:{
                id: userCart.id
            },
            data:{
                totalAmount: 0,
            }
        })

        await prisma.cartItem.deleteMany({
            where:{
                cartId:userCart.id
            }
        })

        return 

    } catch (error) {
        console.log('CREATER_ORDER', error)
    }

}