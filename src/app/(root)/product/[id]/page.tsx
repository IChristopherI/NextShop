import { PrismaClient } from '@prisma/client';
import React from 'react';


export default async function Page({ params: { id } }: { params: { id: string } }) {
    const prisma = new PrismaClient();
    const product = await prisma.item.findFirst({
        where: { id: Number(id), },

    })

    if (!product) {
        return <div className='text-center text-red-500'>Product not found</div>
    }


    return (
        <>
            <div className='flex flex-col md:flex-row items-center md:items-start p-5 '>
            <div className='w-[1280px] mx-auto flex'>
                <div className=''>
                    <img className='w-[300px] h-auto rounded-lg shadow-md' src={product.imageUrl ?? ''} alt={product.name} />
                </div>
                <div className='w-[800px] md:ml-10 mt-5 md:mt-0'>
                    <h1 className='text-3xl font-bold mb-4'>{product.name}</h1>
                    <p className='text-xl text-green-700 mb-4'>{product.price} $</p>
                    <div className='mb-4'>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse illo molestiae, dolores delectus nobis.
                            Labore quibusdam ea voluptatibus nemo aliquam maiores ad magni et, debitis odit sint illum iure!</p>
                    </div>
                    <div className='mb-4'>
                        <p className='text-gray-500'>Category ID: {product.categoryId}</p>
                    </div>
                    <div>
                        <button className=' w-[100px] px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300'>Buy</button>
                    </div>
                </div>

            </div>
            </div>
        </>
    );
    
}