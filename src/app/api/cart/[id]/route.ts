import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const id = Number(params.id);
        const token = req.cookies.get('cartToken')?.value;
        const data = (await req.json()) as { quantity: number };

        if (!token) {
            return NextResponse.json({ error: 'Не удалось найти токен' });
        }

        const cartItem = await prisma.cartItem.findFirst({
            where: {
                id
            },

        })

        if (!cartItem) {
            return NextResponse.json({ error: 'Товары в корзине не найдены' })
        }

        const updatedCartItem =  await prisma.cartItem.update({
            where: {
                id
            },
            data: {
                quantity: data.quantity,
            }
                
        })
        return NextResponse.json(updatedCartItem);
    } catch (e) {
        console.log('[CART_PATCH] Server error', e);
        return NextResponse.json({ message: 'Не удалось обновить корзину' }, { status: 500 });
    }
}


export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const id = Number(params.id);
        const token = req.cookies.get('cartToken')?.value;

        if (!token) {
            return NextResponse.json({ error: 'Не удалось найти токен' });
        }
        const cartItem = await prisma.cartItem.findFirst({
            where: {
                id: Number(params.id)
            }
        })
        if (!cartItem) {
            return NextResponse.json({ error: 'Товары в корзине не найдены' })
        }

       const deletIt =  await prisma.cartItem.delete({
            where: {
                id: Number(params.id)
            }
        })
        return NextResponse.json(deletIt)


    } catch (e) {
        console.log('[CART_PATCH] Server error', e);
        return NextResponse.json({ message: 'Не удалось удалить товар' }, { status: 500 });
    }
}