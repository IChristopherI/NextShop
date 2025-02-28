import { prisma } from "@/prisma/prisma-client";
import { updateCartItemTotal } from "@/src/lib/update-cart-item-total-amount";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        const cartItemId = Number(id);
        const data = (await req.json()) as { quantity: number };
        const token =  req.cookies.get('cartToken')?.value;

        if (!token) {
            return NextResponse.json({ error: 'Не удалось найти токен' });
        }

        const cartItem = await prisma.cartItem.findFirst({
            where: {
                id:cartItemId
            },

        })

        if (!cartItem) {
            return NextResponse.json({ error: 'Товары в корзине не найдены' })
        }

          await prisma.cartItem.update({
            where: {
                id:cartItemId
            },
            data: {
                quantity: data.quantity,
            }
                
        })
        const updatedCartPrice = await updateCartItemTotal(token);
        return NextResponse.json(updatedCartPrice);
    } catch (e) {
        console.log('[CART_PATCH] Server error', e);
        return NextResponse.json({ message: 'Не удалось обновить корзину' }, { status: 500 });
    }
}


export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        const cartItemId = Number(id);
        const token = req.cookies.get('cartToken')?.value;
        
        if (!token) {
            return NextResponse.json({ error: 'Не удалось найти токен' });
        }
        const cartItem = await prisma.cartItem.findFirst({
            where: {id:cartItemId}
        })
        if (!cartItem) {
            return NextResponse.json({ error: 'Товары в корзине не найдены' })
        }

       await prisma.cartItem.delete({
            where: {id:cartItemId}
        })

           const updatedCartPrice = await updateCartItemTotal(token);

        return NextResponse.json(updatedCartPrice);
    } catch (e) {
        console.log('[CART_PATCH] Server error', e);
        return NextResponse.json({ message: 'Не удалось удалить товар' }, { status: 500 });
    }
}