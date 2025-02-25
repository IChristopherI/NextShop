'use client'

import { Item } from '@prisma/client';
import React from 'react';
import { useCart } from '../hooks/use-cart';
import toast from 'react-hot-toast';
import { Button } from '../ui/button';

interface Props {
    item: Item;
    className?: string;
}

const AddCartItemF: React.FC<Props> = ({ className, item }) => {
    const { addOnclickCartItem } = useCart();
    const onSubmit = async (item: Item) => {
        try {
            await addOnclickCartItem({ itemId: item.id });
        } catch (error) {
            console.log('[ERROR-BUY]', error)
            toast.error('Не удалось перейти на страницу оформления заказа')
        }
    }
    return (
        <Button onClick={() => onSubmit(item)}>Добавить в корзину</Button>
    )
};

export default AddCartItemF;