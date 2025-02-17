
import React from 'react';
import { PrismaClient } from '@prisma/client';
import ProductFormChoose from '@/components/shared/ProductFormChoose';


export default async function ModalProduct({ params: { id } }: { params: { id: string } }) {
  const prisma = new PrismaClient();

  const item = await prisma.item.findFirst({
    where: {
      id: Number(id),
    }
  })

  // const  async function getItem(id: string) {

  //   return await prisma.item.findFirst({
  //     where: { id: Number(id) }
  //   });
  // }
  // const item = await getItem(id);
  // console.log(item);

if(!item){
  return <>Not found</>;
}
  return <>
    <ProductFormChoose item={item} />
  </>
}