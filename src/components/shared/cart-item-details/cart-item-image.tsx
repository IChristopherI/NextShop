import { cn } from '@/src/lib/utils';
import React from 'react';
import Image from 'next/image';

interface Props {
  imageUrl: string;
  className?: string;
}

const CartItemImage: React.FC<Props> = ({ imageUrl, className }) => {
  return (
      <div className={cn('max-w-[100px]', className)}>
         {imageUrl && (
        <Image
          className="rounded-lg"
          src={imageUrl}
          alt="Cart item"
          width={100} 
          height={100} 
          objectFit="cover" 
        />
      )}
      </div>
  );
};

export default CartItemImage;