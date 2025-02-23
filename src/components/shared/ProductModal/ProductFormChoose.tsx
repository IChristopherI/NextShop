import React from 'react';
import ProductForm from './ProductForm';
import { Item } from '@prisma/client';

interface Props {
    className?: string;
    item: Item;
}

const ProductFormChoose: React.FC<Props> = ({item}) => {
    return (
        <ProductForm
            id={item.id.toString()}
            imageUrl={item.imageUrl ?? ''}
            name={item.name}
            price={item.price}
        />
    );
};

export default ProductFormChoose;