'use client'

import React from 'react';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import CartDrawerItem from './cart-drawer-item';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { useCart } from '../hooks/use-cart';
import Link from 'next/link';

const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {

    const { items, totalAmount, updateCartItemQuantity, removeCartItem,loading } = useCart();

    const onClickCountButton = (id: number, quantity: number, type: 'minus' | 'plus') => {
        const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
        updateCartItemQuantity(id, newQuantity);
        console.log(id, quantity, type)
    }


    return (
        <>
            <Sheet>
                <SheetTrigger asChild>{children}</SheetTrigger>
                <SheetContent>
                    <div className='h-full flex flex-col'>
                        <SheetHeader>
                            <SheetTitle> В корзине {items.length} товара </SheetTitle>
                        </SheetHeader>
                        <div className='flex flex-col gap-4 flex-1 overflow-auto'>
                            {items.map((item) => (
                                <CartDrawerItem
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    imageUrl={item.imageUrl ?? ""}
                                    quantity={item.quantity}
                                    value={item.price}
                                    onClickCountButton={(type) =>{onClickCountButton(item.id, item.quantity, type)}}
                                    onClickRemove={() => removeCartItem(item.id)}
                                    loading={loading}
                                />
                            ))}
                        </div>
                        <SheetFooter className='p-3'>
                            <div className="w-full">
                                <div className="flex mb-4">
                                    <span className="flex flex-1 text-lg text-neutral-500">
                                        Итого
                                        <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                                    </span>
                                    <span className="font-bold text-lg">{totalAmount}</span>
                                </div>
                                <Link href='/checkout'>
                                <Button type='submit' className=' w-full'>
                                    Оформить заказ
                                    <ArrowRight />
                                </Button>
                                </Link>
                            </div>
                        </SheetFooter>
                    </div>
                </SheetContent>
            </Sheet>

        </>
    );
};

export default CartDrawer;