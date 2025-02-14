import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const prisma = new PrismaClient();
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