'use client'

import React from 'react';
import CartItemImage from '../cart-item-details/cart-item-image';
import { CartItemProps } from '../cart-item-details/cart-item-types';
import { Trash2 } from 'lucide-react';
import { CartItemPrice } from '../cart-item-details/cart-item-price';
import CartItemInfo from '../cart-item-details/cart-item-info';
import CountButton from '../quantity-count-button';

interface Props extends CartItemProps {
    onClickCountButton?: (type: 'plus' | 'minus') => void;
    onClickRemove?: () => void;
    className?: string;
}

const CheckoutItem: React.FC<Props> = ({ imageUrl, value, quantity, name, onClickCountButton, onClickRemove }) => {
    return (
        <div className={`flex w-auto gap-2  items-center p-2   `}>
            <CartItemImage imageUrl={imageUrl}  className='w-[50px]'/>
            <div className='flex  w-full'>
                <div className=' flex-1 font-bold w-[400px] '>
                    <CartItemInfo name={name} />
                </div>
                <div className=' flex items-center justify-between text-lg font-bold'>
                    <CountButton onClick={onClickCountButton} value={quantity} />
                    <div>
                    <CartItemPrice value={value} />
                    </div>
                    <div>
                        <Trash2 size={20} onClick={onClickRemove}/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CheckoutItem;