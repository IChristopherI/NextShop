import { create } from "zustand";
import { CartStateItem, getCartDetail } from "@/lib/get-cart-detail";
import { deleteCartItem, getCart, updateCartItemQuantity } from "../services/cart";

export interface CartState {
    loading: boolean;
    error: boolean;
    totalAmount: number;
    items: CartStateItem[];
    fetchCartItems: () => Promise<void>;
    updateCartItemQuantity:(id:number, quantity:number) => Promise<void>
    removeCartItem: (id:number) => Promise<void>;
}

export const useCartStore = create<CartState>((set) => ({
    items: [],
    error: false,
    loading: true,
    totalAmount: 0,

    fetchCartItems: async () => {
        try {
            set({ loading: true, error: false });
            const data = await getCart();
            console.log('Cart items fetched:', data);
            set(getCartDetail(data));
        } catch (e) {
            console.log('Error fetching cart items:', e);
            set({ loading: false, error: true });
        } finally {
            set({ loading: false });
        }
    },
    updateCartItemQuantity: async (id:number, quantity:number) => {
        try {
            set({ loading: true, error: false });
            const data = await updateCartItemQuantity(id, quantity);
            set(getCartDetail(data));
        } catch (e) {
            console.log('Error :', e);
            set({ loading: false, error: true });
        } finally {
            set({ loading: false });
        }
    },
    removeCartItem: async (id:number) => {
        try {
            set({ loading: true, error: false });
            const data = await deleteCartItem(id);
            set(getCartDetail(data));
        } catch (e) {
            console.log('Error :', e);
            set({ loading: false, error: true });
        } finally {
            set({ loading: false });
        }
    }

}));
