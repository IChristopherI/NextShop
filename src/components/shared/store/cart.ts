import { create } from "zustand";
import { addCartItem, deleteCartItem, getCart, updateCartItemQuantity } from "../services/cart";
import { CreateCartItem } from "../services/Cart_dto";
import { CartStateItem, getCartDetail } from "@/src/lib/get-cart-detail";

export interface CartState {
    loading: boolean;
    error: boolean;
    totalAmount: number;
    items: CartStateItem[];
    
    fetchCartItems: () => Promise<void>;
    updateCartItemQuantity:(id:number, quantity:number) => Promise<void>
    removeCartItem: (id:number) => Promise<void>;
    addOnclickCartItem:(values: CreateCartItem) => Promise<void>;

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
        } catch (error) {
            console.log('Error fetching cart items:', error);
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
        } catch (error) {
            console.log('Error :', error);
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
        } catch (error) {
            console.log('Error :', error);
            set({ loading: false, error: true });
        } finally {
            set({ loading: false });
        }
    },

    addOnclickCartItem: async (values:CreateCartItem) => {
        try {
            set({loading: true, error: false});
            const data = await addCartItem(values);
            set(getCartDetail(data));

        } catch(error) {
            console.log('Error:', error);
            set({ loading: false, error: true });
        }
        finally {
            set({ loading: false });
        }
    }
}));
