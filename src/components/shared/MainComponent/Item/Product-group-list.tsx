'use client';

import React from 'react';
import ItemCard from './ItemCard';

interface ProductListProps {
    items: any[],
    className?: string;
}

const ProductList: React.FC<ProductListProps> = ({  items }) => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-[40px] mt-5 mb-5'> 
                {items.map((item) => (
                    <ItemCard
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    imageUrl={item.imageUrl}
                    price={item.price}
                    />
                ))}


            </div>
        </div>
    );
};

export default ProductList;