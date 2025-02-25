import { Checkbox } from '@/src/components/ui/checkbox';
import React from 'react';

interface FilterCheckBoxProps {
    text: string;
    value: string;
    endAdornment?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
}

const FilterCheckBox: React.FC<FilterCheckBoxProps> = ({ text, value, endAdornment, onCheckedChange, checked }) => {
    return (
        <div className='flex items-center gap-2'>
            <Checkbox 
            value={value} 
            onCheckedChange={onCheckedChange} 
            checked={checked}
            id={`checkbox-${String(value)}`} />

            <label>
                {text}
            </label>
            
            {endAdornment}
        </div>
    );
};

export default FilterCheckBox;