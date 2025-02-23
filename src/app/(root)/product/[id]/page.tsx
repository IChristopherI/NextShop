
import ArrayImage from '@/components/shared/ArrayImage';
import { Button } from '@/components/ui/button';
import { PrismaClient } from '@prisma/client';
import React from 'react';


export default async function Page({ params: { id } }: { params: { id: string } }) {
    const prisma = new PrismaClient();
    const item = await prisma.item.findFirst({
        where: { id: Number(id), },
    })

    if (!item) {
        return <div className='text-center text-2xl mt-10'>Product not found</div>;
    }


    return (
        <>
            <div className='mx-auto mt-6 px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='lg:col-span-1'>
                    <ArrayImage item={item} />
                </div>
                <div className='lg:col-span-1 flex flex-col justify-between'>
                    <div>
                        <h1 className='text-4xl font-bold mb-4'>{item.name}</h1>
                        <p className='text-gray-500 text-sm mb-2'>Category ID: {item.categoryId} | Article: {item.articule}</p>
                        <p className='text-gray-700'>{item.detail}</p>
                        <p className='text-3xl font-semibold text-gray-900 mt-4'>{item.price} $</p>
                    </div>
                </div>
                <div className='lg:col-span-1 bg-white p-6 rounded-lg shadow-md'>
                    <h2 className='text-xl font-semibold mb-2'>Shipping</h2>
                    <p className='text-gray-700'>Cost: <span className='font-bold'>$250</span></p>
                    <p className='text-gray-700'>Delivery: 10-20 days</p>
                    <p className='text-gray-700'>Courier: Nova, Meest, etc.</p>
                    <div>
                        <h2>Security & Privacy</h2>
                        <p>We protect your privacy and keep your personal details safe and secure.</p>
                        </div>
                    <div className='mt-4'>
                        <h3 className='text-lg font-semibold mb-2'>Quantity</h3>
                        <input type='number' min='1' defaultValue='1' className='w-full p-2 border rounded-lg'/>
                    </div>
                    <div className='mt-6 flex flex-col gap-3'>
                        <Button>Buy</Button>
                        <Button>Add to cart</Button>
                    </div>
                </div>
            </div>
            <div className='mt-10 p-6 bg-white rounded-lg shadow-md'>
                <h2 className='text-2xl font-semibold mb-4'>Details</h2>
                <p className='text-gray-700'><span className='font-semibold'>Product Size:</span> {item.productSize}</p>
                <p className='text-gray-700'><span className='font-semibold'>Brand:</span> {item.brand}</p>
                <p className='text-gray-700'><span className='font-semibold'>Character:</span> {item.character}</p>
            </div>
        </div>
        </>
    );

}