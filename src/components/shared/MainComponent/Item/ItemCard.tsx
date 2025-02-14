import React from 'react';
import { Button } from '../../../ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';


interface ItemCardProps {
    id:string,
    name: string,
    price: number,
    imageUrl: string,
    count?: number,
    className?: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ id,name, price, imageUrl, className }) => {
    return (
        <>

            <div className={`w-[300px]  p-4 border rounded-lg shadow-lg ${className}`}>
                <Link href={`/product/${id}`} >
                    <div className='mb-4 '>
                        <img className='rounded-lg' src={imageUrl} alt='ProductImage' />
                    </div>
                </Link>
                <h1 className='font-bold text-xl mb-2 h-[110px]'>{name}</h1>
                <p className='text-gray-600 mb-4 break-words'></p>
                <div className='flex justify-between items-center'>
                    <span className='text-lg font-semibold'>
                        от <b>{price} $</b>
                    </span>
                    <Button className='flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-fuchsia-700'>
                        <Plus />
                        <p>Добавить</p>
                    </Button>
                </div>
            </div>


        </>
    );
};

export default ItemCard;