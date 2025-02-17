import { PrismaClient } from "@prisma/client"

export const findOrCreateCart =  async (token:string ) =>{
    const prisma = new PrismaClient();

    let userCart = await prisma.cart.findFirst({
      where: { token },
  });

  if (!userCart) {
      userCart = await prisma.cart.create({ data: { token } });
  }
    
      return userCart;
}