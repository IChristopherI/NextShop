import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import crypto from 'crypto'
import { CreateCartItem } from "@/components/shared/services/Cart_dto";
import { findOrCreateCart } from "../../../lib/find-or-create-cart";
import { updateCartItemTotal } from "@/lib/update-cart-item-total-amount";

export async function GET(req: NextRequest) {
    const prisma = new PrismaClient();
    try {
        const userId = 1;
        const token = req.cookies.get('cartToken')?.value;
        if (!token) {
            return NextResponse.json({ items: [], total: 0 });
        }

        const userCart = await prisma.cart.findFirst({
            where: {
                OR: [
                    { token },
                    { userId },
                ]
            },
            include: {
                items: {
                    include: {
                        item: true,
                    }
                }
            }
        });
        if (!userCart) {
            return NextResponse.json({ items: [], total: 0 });
        }
        
        return NextResponse.json(userCart);

    } catch (e) {
        console.log(e);
        return NextResponse.json({ error: 'An error occurred while fetching the cart.' });
    }
}


export async function POST(req: NextRequest) {
    const prisma = new PrismaClient();
    try {
        let token = req.cookies.get('cartToken')?.value;

        if (!token) {
            token = crypto.randomUUID();
        }

        // Найти или создать корзину
        const userCart = await findOrCreateCart(token);
        const data = (await req.json()) as CreateCartItem;

        let cartItem = await prisma.cartItem.findFirst({
            where: {
                cartId: userCart.id,
                itemId: data.itemId,
            }
        });

        if (cartItem) {
            cartItem = await prisma.cartItem.update({
                where: { id: cartItem.id },
                data: { quantity: cartItem.quantity + 1 },
            });
        } else {
            cartItem = await prisma.cartItem.create({
                data: {
                    cartId: userCart.id,
                    itemId: data.itemId,
                    quantity: 1,
                },
            });
        }
        const updatedCartPrice = await updateCartItemTotal(token);

        const response = NextResponse.json(updatedCartPrice);
        response.cookies.set('cartToken', token);
        return response;

    } catch (error) {
        console.log('[CART-POST]EROR', error)
        return NextResponse.json({ message: 'Не удалось создать корзину' }, { status: 500 });
    }



}