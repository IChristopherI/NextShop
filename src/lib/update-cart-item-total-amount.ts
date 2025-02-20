import { PrismaClient } from "@prisma/client";
import { CalcTotalCart } from "./calculate-cart-totalprice";

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

    const totalAmount = userCart.items.reduce((acc, item) => {
        return acc + CalcTotalCart(item);
      }, 0);

      return await prisma.cart.update({
        where:{
        id: userCart.id
        },
        data: { totalAmount },
        include: {
            items: {
                include: {
                    item: true,
                }
            }
        }
      })
}