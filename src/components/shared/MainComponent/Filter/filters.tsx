import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '../../../ui/input';
import FilterCheckBox from './filter-checkbox';

interface FiltersProps {
    className?: string;
}

const Filters: React.FC<FiltersProps> = ({ className }) => {
    return (
        <div className={cn('p-1   rounded-lg', className)}>
            <div className='relative mb-5 gap-5'>
                <h1 className='text-center font-bold text-xl mb-4'>Фильтры</h1>
                <div className='flex flex-col gap-1'>
                <FilterCheckBox text='Text 1' value='1' />
                <FilterCheckBox text='Text 2' value='2' />
                <FilterCheckBox text='Text 3' value='3' />
                </div>
            </div>
            <div>
                <p className='text-center font-bold mb-2'>Цена от и до:</p>
                <div className='flex gap-3 mb-5'>
                    <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0} className='w-full p-2 border rounded' />
                    <Input type='number' placeholder='1000' min={100} max={1000} className='w-full p-2 border rounded' />
                </div>
            </div>
        </div>
    );
};

export default Filters;