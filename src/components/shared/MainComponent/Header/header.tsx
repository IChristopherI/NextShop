'use client'

import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import React from 'react';
import { ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import InputSearch from './input-type-search';
import CartDrawer from '../../cart-drawer';
import { useCart } from '@/components/hooks/use-cart';
import AuthModal from '@/components/auth/auth-modal/auth-modal';


interface HeaderProps {
    className?: string;
    
}

export const Header: React.FC<HeaderProps> = ({ className}) => {
    const { items, totalAmount } = useCart();
    const [openModal, setOpenModal] = React.useState(false)
    return (
        <>
            <header className={cn('border border-b', className)}>
                <div className='flex items-center justify-between py-5 mr-auto ml-auto max-w-7xl'>

                    {/*Logo */}
                    <Link href="/">
                        <div className='flex items-center gap-2'>
                            <div>
                                <h1 className='font-bold'>Logo</h1>
                                <p className=''>Title</p>
                            </div>
                        </div>
                    </Link>
                    <div>
                        <InputSearch />

                    </div>
                        <AuthModal open={openModal} onClose={() => setOpenModal(false)}/>
                    <div className='flex items-center  gap-2'>
                        <Button onClick={() => setOpenModal(true)} variant='default' className='flex items-center '>
                            <User size={16} />
                            <p>Войти</p>
                        </Button>
                        <div>
                            <CartDrawer>
                                <Button className='group relative'>
                                    <b>{totalAmount} $</b>
                                    <span className='h-full w-[1px] bg-white'></span>
                                    <div className='flex  items-center relative gap-2 '>
                                        <ShoppingCart size={16} />
                                        <b>{items.length}</b>
                                    </div>
                                </Button>
                            </CartDrawer>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;