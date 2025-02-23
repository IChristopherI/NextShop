'use client'
import { useFormContext } from 'react-hook-form';
import React from 'react';
import { Input } from '../ui/input';
import { X } from 'lucide-react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  name: string;
}

const FormInput: React.FC<Props> = ({ className, name, ...props }) => {

  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();
  
const onClickClear = () => {
  setValue( name, '');
}
  const errorText = errors[name]?.message as string;
  return (
    <>
      <div>
        <div className='relative '>
          <Input className="h-12 text-md"  {...register(name)} {...props}  />
          <X className='absolute right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer' onClick={onClickClear} />
        </div>
         {errorText && <div className='text-red-500'>{errorText}</div>}
      </div>
    </>
  );
};

export default FormInput;