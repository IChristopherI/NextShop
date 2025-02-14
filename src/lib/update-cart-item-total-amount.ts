import { PrismaClient } from "@prisma/client";

export const updateCartItemTotal = async (token:string) =>{
    const prisma = new PrismaClient();

    const userCart = await prisma.cart.findFirst({
        where:{
            token,
        },
        include: {
            items: {
                include: {
                    item: true,
                }
            }
        }
    })

    if(!userCart){
        return;
    }

    // const totalAmount = userCart.items.reduce()

}