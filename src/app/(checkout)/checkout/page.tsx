'use client';


import { useCart } from '@/src/components/hooks/use-cart';
import { checkoutFormSchema, CheckoutFormValues } from '@/src/components/shared/constants/form-checkout';
import { zodResolver } from '@hookform/resolvers/zod';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { createOrder } from '../../actions';
import CheckoutAddress from '@/src/components/shared/Checkout/checkout-address';
import WhiteBlock from '@/src/components/shared/Checkout/white-block';
import CheckoutPersonal from '@/src/components/shared/Checkout/checkout-personal';
import CheckoutTotal from '@/src/components/shared/Checkout/ckeckout-total';
import CheckoutItem from '@/src/components/shared/Checkout/Checkout-item';
import { cn } from '@/src/lib/utils';

interface Props {
    className?: string;
}

const CheckoutMain: React.FC<Props> = ({ className }) => {
    const { items, updateCartItemQuantity, removeCartItem } = useCart();

    const onClickCountButton = (id: number, quantity: number, type: 'minus' | 'plus') => {
        const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
        updateCartItemQuantity(id, newQuantity);
        console.log(id, quantity, type)
    }
    const form = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            comment: '',
        },
    })
    const onSubmit = (data: CheckoutFormValues) => {
        console.log(data)
        createOrder(data);
    }

    return (
        <div className={cn('mt-5  flex justify-center', className)}>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className='flex gap-3'>
                        <div className='flex flex-col gap-2'>
                            <WhiteBlock title='1. Корзина'>
                                {items.map((item) => (
                                    <CheckoutItem
                                        key={item.id}
                                        id={item.id}
                                        imageUrl={item.imageUrl ?? ''}
                                        name={item.name}
                                        quantity={item.quantity}
                                        value={item.price}
                                        onClickCountButton={(type) =>{onClickCountButton(item.id, item.quantity, type)}}
                                        onClickRemove={() => removeCartItem(item.id)}
                                    />
                                ))}
                            </WhiteBlock>
                            <CheckoutPersonal />
                            <CheckoutAddress />
                        </div>
                        <div className='w-[450px]'>
                            <CheckoutTotal />
                        </div>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default CheckoutMain;