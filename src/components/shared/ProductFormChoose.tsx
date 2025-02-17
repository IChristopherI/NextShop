"use client"

import React from 'react';
import ProductForm from './ProductForm';
import { Item } from '@prisma/client';
import { useCart } from '../hooks/use-cart';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface Props {
    className?: string;
    item: Item;
    onClick?: VoidFunction;
}

const ProductFormChoose: React.FC<Props> = ({item}) => {
     const router = useRouter()
  const { addOnclickCartItem } = useCart();
    
  const onSubmitItem =  async () => {
    try{
        await addOnclickCartItem({
           itemId: item.id
        })
        toast.success('Товар успешно добавлен')
        router.back()
    }catch(error){
        console.log('AddCartItem', error)
        toast.error('Товар не удалось добавить в корзину')
    }
  }
    return (
        <ProductForm
            imageUrl={item.imageUrl ?? ''}
            name={item.name}
            price={item.price}
            onSubmit={onSubmitItem}

        />
    );
};

export default ProductFormChoose;