import { cn } from '@/lib/utils';
import React from 'react';

interface Props {

    name: string;
    details?: string;
    className?: string;
}

const CartItemInfo: React.FC<Props> = ({ name, className }) => {
    return (<h2 className=''>{name}</h2>);
};

export default CartItemInfo;