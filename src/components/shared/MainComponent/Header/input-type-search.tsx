'use client';

import { cn } from '@/lib/utils';
import { Item } from '@prisma/client';
import { Search } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { useClickAway, useDebounce } from 'react-use';
import { search } from '../../services/search';

interface InputSearchProps {
    className?: string;
}

const InputSearch: React.FC<InputSearchProps> = ({ className }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [items, setItems] = useState<Item[]>([]);

    const ref = useRef(null);
    const [focused, setFocused] = React.useState(false);

    useClickAway(ref, () => { setFocused(false); });

    useDebounce(async () => {
        try {
            const responce = await search(searchQuery);
            setItems(responce);
        } catch (error) {
            console.log('Error-[Search]', error)
        }
    }, 250, [searchQuery])

    return (
        <>
            {focused && <div className='fixed top-0 left-0 bottom-0 right-0 bg-black/20 z-20'>



            </div>}
            <div ref={ref} className=' relative flex items-center gap-2 z-30'>
                <Search className='absolute z-40 left-[10px]' />
                <input
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    onFocus={() => setFocused(true)}
                    type='text' placeholder='Search' className='w-[300px] h-10 rounded-md p-2  z-30 px-11' />
            </div>

            <div className={cn(
                    "absolute top-24 left-0 right-0 z-40 bg-white shadow-lg rounded-md border border-gray-200",
                    "p-4  max-w-lg mx-auto transition-opacity duration-300",
                    "max-h-110 overflow-y-auto",
                    focused ? "opacity-100 visible" : "opacity-0 invisible"
                )}>
                {items.map((item) => (
                    <div key={item.id} className='flex  items-center gap-5 mb-5'>
                        <img className='w-[50px]' src={item.imageUrl ?? ''} />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default InputSearch;