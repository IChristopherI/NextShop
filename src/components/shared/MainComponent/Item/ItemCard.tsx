import React from 'react';
import { Button } from '../../../ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

interface ItemCardProps {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    count?: number;
    className?: string;
    loading?: boolean;
    onSubmit?: () => Promise<void>;
}

const ItemCard: React.FC<ItemCardProps> = ({ id, name, price, imageUrl, className, onSubmit, loading }) => {
    return (
        <>
            <div className="flex flex-col p-2 border border-gray-200 rounded-2xl shadow-lg w-[300px] bg-white hover:shadow-xl transition-shadow duration-300">
                <Link href={`/product/${id}`} className="block">
                    <div className="overflow-hidden rounded-lg mb-4">
                        <img
                            className=" object-cover transition-transform duration-300 hover:scale-105"
                            src={imageUrl}
                            alt="ProductImage"
                        />
                    </div>
                    <h1 className="text-md  text-gray-700 mb-2 line-clamp-1">{name}</h1>
                </Link>
                <div className="flex justify-between items-center mt-auto">
                    <Button
                        loading={loading}
                        onClick={onSubmit}
                        className="flex items-center gap-2  text-white px-4 py-2 rounded-lg hover:bg-fuchsia-700 transition duration-300" >
                        <Plus className="w-5 h-5" />
                        <p>Добавить</p>
                    </Button>
                    <span className="text-xl font-bold text-gray-900">{price} $</span>
                </div>
            </div>
        </>
    );
};

export default ItemCard;