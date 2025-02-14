'use client';


import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import React, { useRef } from 'react';
import {useClickAway} from 'react-use';

interface InputSearchProps {
    className?: string;
}

const InputSearch: React.FC<InputSearchProps> = ({ className }) => {
const ref = useRef(null);
const [focused, setFocused] = React.useState(false);

useClickAway(ref, () => {
setFocused(false);
});


    return (
        <>
        { focused && <div className='fixed top-0 left-0 bottom-0 right-0 bg-black/20 z-20'></div>}

        <div ref={ref} className=' relative flex items-center gap-2 z-30'> 
            <Search className='absolute z-40 left-[10px]'/>
            <input  onFocus={() => setFocused(true)} type='text' placeholder='Search' className='w-[300px] h-10 rounded-md p-2  z-30 px-11'  />
        </div>

        <div className={cn('absolute top-24 left-0 right-0 bg-white z-40 shadow-md rounded-md p-4 transition-opacity duration-300  ', focused ? 'opacity-100 visible' : 'opacity-0 invisible')}>
           <div className='flex justify-center'>
            <p className="text-gray-700">Search results will appear here...</p>
           </div>
        </div>
        </>
    );
};

export default InputSearch;