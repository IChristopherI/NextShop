import React from 'react';
import { Button } from '../ui/button';
import { Minus, Plus } from 'lucide-react';

interface Props {
    value?: number;
    onClick?: (type: 'plus' | 'minus') => void;
    type?: 'plus' | 'minus';
    size?: 'sm' | 'lg';
  className?: string;
}

const CountButton: React.FC<Props> = ({ value = 1, onClick ,size = 'sm'}) => {
  return (
    <div className='flex  text-center items-center gap-1 '>
        <Button  onClick={() => onClick?.('minus')} disabled={value === 1} size={size} > <Minus/> </Button>
        <b>{value}</b>
        <Button onClick={() => onClick?.('plus')}  size={size}> <Plus/> </Button>

    </div>
  );
};

export default CountButton;