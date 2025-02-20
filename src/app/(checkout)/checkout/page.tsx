'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCart } from '@/components/hooks/use-cart';
import CheckoutAddress from '@/components/shared/Checkout/checkout-address';
import CheckoutItem from '@/components/shared/Checkout/Checkout-item';
import CheckoutPersonal from '@/components/shared/Checkout/checkout-personal';
import CheckoutTotal from '@/components/shared/Checkout/ckeckout-total';
import WhiteBlock from '@/components/shared/Checkout/white-block';
import { checkoutFormSchema, CheckoutFormValues } from '@/components/shared/constants/form-checkout';
import { cn } from '@/lib/utils';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { createOrder } from '@/app/actions';

interface Props {
    className?: string;
}

const CheckoutMain: React.FC<Props> = ({ className }) => {
    const { items, updateCartItemQuantity, removeCartItem } = useCart()
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