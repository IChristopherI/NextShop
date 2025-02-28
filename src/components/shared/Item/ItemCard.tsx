import React from 'react';
import { Button } from '../../ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ItemCardProps {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    count?: number;
    className?: string;
    loading?: boolean;
    onSubmit?: () => Promise<void>;
}

const ItemCard: React.FC<ItemCardProps> = ({ id, name, price, imageUrl, onSubmit }) => {
    return (
        <>
            <div className="flex flex-col p-2 border  rounded-2xl shadow-lg w-[300px]  hover:shadow-xl transition-shadow duration-300">
                <Link href={`/product/${id}`} className="block">
                    <div className="overflow-hidden rounded-lg mb-4">
                        <Image
                            className=" object-cover transition-transform duration-300 hover:scale-105"
                            src={imageUrl}
                            alt="ProductImage"
                            width={300} 
                            height={300}
                        />
                    </div>
                    <h1 className="text-md  mb-2 line-clamp-1">{name}</h1>
                </Link>
                <div className="flex justify-between items-center mt-auto">
                    <Button
                        variant={'secondary'}
                        onClick={onSubmit}
                        className="flex items-center gap-2   px-4 py-2 rounded-lg hover:bg-slate-400 transition duration-300" >
                        <Plus className="w-5 h-5" />
                        <p>Добавить</p>
                    </Button>
                    <span className="text-xl font-bold ">{price} $</span>
                </div>
            </div>
        </>
    );
};

export default ItemCard;