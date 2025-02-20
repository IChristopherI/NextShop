import React from 'react';
import { CloseModal } from './CloseModal';
import Link from 'next/link';

interface Props {
  id:string;
    imageUrl: string;
    name: string;
    price: number;
    onSubmit?: VoidFunction;
}

const ProductForm: React.FC<Props> = ({ id,imageUrl,name,price,onSubmit }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
    <div className='bg-white rounded-lg p-6 w-full max-w-3xl shadow-lg flex'>
      <div className='w-1/2 flex justify-center items-center'>
        <img className='w-[300px] h-auto rounded' src={imageUrl || ''} alt={name} />
      </div>
      <div className='w-[600px] p-4 flex flex-col justify-between'>
        <div>
          <div className='flex justify-between  items-center gap-5 mb-4'>
            <h1 className='text-xl  font-bold'>{name}</h1>
            <CloseModal />
          </div>
          <div className='mb-4'>
            <p className='text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, amet ut pariatur, eius doloremque ullam repellat inventore quas consequuntur ducimus quod dolore nobis illo consectetur vel neque labore, ea harum.</p>
          </div>
        </div>
        <div className='flex justify-end items-center mt-auto'>
          <button   className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 '>Перейти к товару</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProductForm;