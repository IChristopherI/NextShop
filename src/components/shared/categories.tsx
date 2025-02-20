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
            <div className='inline-flex items-center gap-3  p-1    '>
                {categories.map((name, index) => (
                    <Link href={`/#${name.name}`} key={index} className={cn('flex items-center font-bold h-8  px-5',
                        activeIndex === index ? ' text-primary' : ' text-black')}>
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