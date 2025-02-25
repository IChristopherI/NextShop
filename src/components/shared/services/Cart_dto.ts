import { Cart, CartItem, Item } from "@prisma/client";

export type CartItemDTO = CartItem & {
    item: Item;
};

export interface CartDTO extends Cart {
    items: CartItemDTO[];
};


export interface CreateCartItem {
    itemId:number;
}