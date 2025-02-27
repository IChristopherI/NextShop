'use client'

import { Item } from '@prisma/client';
import React from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface Props {
    item: Item;
    className?: string;
}

const ArrayImage: React.FC<Props> = ({ item }) => {

    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const prevNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.imagePackage.length);
    };

    const prevPrevious = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + item.imagePackage.length) % item.imagePackage.length);
    };

    return (
        <div>
                <Image className='rounded-lg shadow-md' src={item.imagePackage[currentImageIndex] ?? ''} width={200} height={200} alt={item.name} />
                <div className='flex justify-between'>
                    <Button variant='ghost' onClick={prevPrevious}><ArrowLeft/></Button>
                    <Button variant='ghost' onClick={prevNext}><ArrowRight/></Button>
                </div>
        </div>
    );
};

export default ArrayImage;
