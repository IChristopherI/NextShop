'use client';

import React from 'react';
import ItemCard from './ItemCard';
import { Item } from '@prisma/client';
import toast from 'react-hot-toast';
import { useCart } from '@/src/components/hooks/use-cart';

interface ProductListProps  {
    items: Item[],
    className?: string;
}

const ProductList: React.FC<ProductListProps> = ({  items }) => {
    const { addOnclickCartItem, loading } = useCart();
    const onSubmit =  async (item:Item) => {
      try{
          await addOnclickCartItem({itemId: item.id})
          toast.success('Товар успешно добавлен')
      }catch(error){
          console.log('AddCartItem', error)
          toast.error('Товар не удалось добавить в корзину')
      }
    }

    return (
        <div>
            <div className='responsive-grid gap-5 mt-5 mb-5  '> 
                {items.map((item) => (
                    <ItemCard
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    imageUrl={item.imageUrl ?? ''}
                    price={item.price}
                    onSubmit={() => onSubmit(item)}
                    loading={loading}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;