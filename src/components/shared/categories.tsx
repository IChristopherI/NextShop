'use client';
import { cn } from '@/lib/utils';
import { Category } from '@prisma/client';
import Link from 'next/link';
import React, { useState } from 'react';



interface CategoriesProps {
    categories: Category[];
}


const Categories: React.FC<CategoriesProps> = ({ categories }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (name: string, index: number) => {
        const element = document.getElementById(name);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveIndex(index);
        }

    }
    return (
        <>
            <div className='inline-flex items-center gap-3 bg-gray-10 p-1 rounded-2xl '>
                {categories.map((name, index) => (
                    <Link href={`/#${name.name}`} key={index} className={cn('flex items-center font-bold h-8 rounded-2xl px-5',
                        activeIndex === index ? 'bg-primary text-white' : 'bg-gray-100 text-black')}>
                        <button onClick={() => handleScroll(name.name, index)}>
                            <p>{name.name}</p>
                        </button>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Categories;