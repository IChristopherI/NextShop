import { cn } from '@/src/lib/utils';
import React from 'react';

interface Props {
  imageUrl: string;
  className?: string;
}

const CartItemImage: React.FC<Props> = ({ imageUrl, className }) => {
  return (
      <div className={cn('max-w-[100px]', className)}>
        {imageUrl && <img className='rounded-lg' src={imageUrl} alt="" />}
      </div>
  );
};

export default CartItemImage;