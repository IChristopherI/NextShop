'use client'

import React from 'react';
import { ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import InputSearch from './input-type-search';
import CartDrawer from '../cart-item-details/CartDrawer/cart-drawer';

import { useSession } from 'next-auth/react';
import { ModeToggle } from '../ThemeButton';
import { useCart } from '@/src/components/hooks/use-cart';
import { cn } from '@/src/lib/utils';
import AuthModal from '@/src/components/auth/auth-modal/auth-modal';
import { Button } from '@/src/components/ui/button';


interface HeaderProps {
    className?: string;

}

export const Header: React.FC<HeaderProps> = ({ className }) => {
    const { data: session } = useSession()
    const { items, totalAmount } = useCart();
    const [openModal, setOpenModal] = React.useState(false)

    return (
        <>
            <header className={cn('border border-b ', className)}>
                <div className='flex items-center justify-between py-5 mr-auto ml-auto max-w-7xl'>
                    {/*Logo */}
                    <Link href="/">
                        <div className='flex items-center gap-2'>
                            <div>
                                <h1>Logo</h1>
                            </div>
                        </div>
                    </Link>
                    <div>
                        <InputSearch />

                    </div>
                    <AuthModal open={openModal} onClose={() => setOpenModal(false)} />
                    <div className='flex items-center  gap-2'>
                        {!session ? (
                            <Button onClick={() => setOpenModal(true)} variant='default' className='flex items-center '>
                                <User size={16} />
                                <p>Войти</p>
                            </Button>
                        ) : (
                            <Button>
                                <Link href='/profile'>
                                    <p>Профиль | {session.user?.name}</p>
                                </Link>
                            </Button>
                        )}
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
                          <ModeToggle />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;