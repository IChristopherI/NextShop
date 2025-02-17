import React from "react";
import { CartStateItem } from "@/lib/get-cart-detail";
import { useCartStore } from "../shared/store/cart";
import { CreateCartItem } from "../shared/services/Cart_dto";

type ReturnProps = {
    loading: boolean;
    totalAmount: number;
    items: CartStateItem[];
    fetchCartItems: () => void;
    updateCartItemQuantity:(id:number, quantity:number) => void;
    removeCartItem: (id:number) => void;
    addOnclickCartItem:(values:CreateCartItem) => void;
}

export const useCart = (): ReturnProps => {
  const cartState = useCartStore((state) => state)

React.useEffect(() => {
    cartState.fetchCartItems();
  }, []);

  return cartState;
};