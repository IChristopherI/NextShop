import React from 'react';
import { PrismaClient } from '@prisma/client';

import { CloseModal } from '@/components/shared/CloseModal';

const prisma = new PrismaClient();


export default async function ModalProduct({ params: { id } }: { params: { id: string } }) {
  
  async function getItem(id: string) {
    return await prisma.item.findFirst({
      where: { id: Number(id) }
    });
  }
  const item = await getItem(id);
  console.log(item);

  return <>
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='bg-white rounded-lg p-6 w-full max-w-3xl shadow-lg flex'>
        <div className='w-1/2 flex justify-center items-center'>
          <img className='w-[300px] h-auto rounded' src={item?.imageUrl || ''} alt={item?.name} />
        </div>
        <div className='w-[600px] p-4 flex flex-col justify-between'>
          <div>
            <div className='flex justify-between  items-center gap-5 mb-4'>
              <h1 className='text-xl  font-bold'>{item?.name}</h1>
              <CloseModal/>
            </div>
            <div className='mb-4'>
              <p className='text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, amet ut pariatur, eius doloremque ullam repellat inventore quas consequuntur ducimus quod dolore nobis illo consectetur vel neque labore, ea harum.</p>
            </div>
          </div>
          <div className='flex justify-between items-center mt-auto'>
            <span className='text-lg font-semibold'>${item?.price}</span>
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </>
}