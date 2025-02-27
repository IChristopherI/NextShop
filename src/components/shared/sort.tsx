import { ArrowDownUp } from 'lucide-react';
import React from 'react';

interface SortProps {
    className?: string;
}

const Sort: React.FC<SortProps> = () => {
    return (
        <div className='flex gap-2'>
            <ArrowDownUp />
            <b>Сортировка по:</b>
            <p className='text-primary'>Рейтингу</p>
        </div>
    );
};

export default Sort;