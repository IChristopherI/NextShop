import { cn } from '@/src/lib/utils';
import React from 'react';

interface Props {
    title: string;
    endAdornment?: React.ReactNode;
    className?: string;
    
}

const WhiteBlock: React.FC<React.PropsWithChildren<Props>> = ({ className, title, endAdornment,children}) => {
    return (
        <div className={cn(' bg-white rounded-2xl shadow-md', className)}>
            <div className='flex items-center justify-between p-2 px-3 border-gray-100 '>
                <h1 className=' font-bold'>{title}</h1>
                {endAdornment}
            </div>
           <div className='p-3'>{children}</div>
           
        </div>
    );
};

export default WhiteBlock;