import React from 'react';
import { CartItemProps } from './cart-item-details/cart-item-types';
import CartItemImage from './cart-item-details/cart-item-image';
import CartItemInfo from './cart-item-details/cart-item-info';
import { CartItemPrice } from './cart-item-details/cart-item-price';
import CountButton from './quantity-count-button';
import { Trash2 } from 'lucide-react';

interface Props extends CartItemProps {
  onClickCountButton?: (type: 'plus' | 'minus') => void;
  onClickRemove?: () => void;
}

const CartDrawerItem: React.FC<Props> = ({value, name, imageUrl,quantity, onClickCountButton,onClickRemove }) => {
    return (
        <div className={`flex w-auto gap-2  items-center p-2 border-b  `}>

          <CartItemImage imageUrl={imageUrl} />
          <div className='flex flex-col w-full'>
            <div className=' flex-1'>
                <CartItemInfo name = {name}/>
            </div>
            <div className=' flex items-center justify-between text-lg font-bold'>
               <CountButton onClick={onClickCountButton} value={quantity} />
                <CartItemPrice value={value}/>
                <div>
                  <Trash2 size={20} onClick={onClickRemove}/>
                </div>
            </div>
          </div>
        </div>
    );
};

export default CartDrawerItem;