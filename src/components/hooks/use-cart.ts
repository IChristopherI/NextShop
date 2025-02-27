import React from "react";
import { useCartStore } from "../shared/store/cart";
import { CreateCartItem } from "../shared/services/Cart_dto";
import { CartStateItem } from "@/src/lib/get-cart-detail";

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
  const { fetchCartItems } = cartState;

  React.useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  return cartState;
};