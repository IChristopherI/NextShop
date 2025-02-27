import React from 'react';
import ArrayImage from '@/src/components/shared/ListImage';
import { prisma } from '@/prisma/prisma-client';
import AddCartItemF from '@/src/components/shared/AddCartItem';
import { notFound } from 'next/navigation';

export default async function Page({ params: { id } }: { params: { id: string } }) {
    const item = await prisma.item.findFirst({
        where: { id: Number(id) },

    });

    if (!item) {
        return notFound();
    }

    return (
        <div className='mx-auto mt-6 px-4 max-w-6xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                <div className='flex justify-center'>
                    <div className='w-full max-w-lg'>
                        <ArrayImage item={item} />
                    </div>
                </div>

                <div className='flex flex-col '>
                    <div>
                        <h1 className='text-4xl font-bold mb-4'>{item.name}</h1>
                        <p className=' text-sm mb-2'>
                            Category ID: {item.categoryId} | Article: {item.articule}
                        </p>
                        <p className='text-lg'>{item.detail}</p>

                        <div className='mt-4 p-4  rounded-lg'>
                            <h2 className='text-xl font-semibold mb-2'>Shipping</h2>
                            <p>
                                Cost: <span className='font-bold'>$250</span>
                            </p>
                            <p>Delivery: 10-20 days</p>
                            <p>Courier: Nova, Meest, etc.</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-between mb-10 p-2 border rounded-lg shadow-sm'>
                            <p className='text-4xl font-bold '>{item.price} $</p>
                            <AddCartItemF item={item} />
                        </div>
                </div>
            </div>

            <div className='mt-10 p-6  rounded-lg shadow'>
                <h2 className='text-2xl font-semibold mb-4'>Details</h2>
                <p>
                    <span className='font-semibold'>Product Size:</span> {item.productSize}
                </p>
                <p>
                    <span className='font-semibold'>Brand:</span> {item.brand}
                </p>
                <p>
                    <span className='font-semibold'>Character:</span> {item.character}
                </p>
            </div>
        </div>
    );
}
