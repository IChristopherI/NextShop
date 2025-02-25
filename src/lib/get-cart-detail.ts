import { CartDTO } from "../components/shared/services/Cart_dto";

export type CartStateItem = {
    disabled?: boolean | undefined;
    name: string;
    id: number;
    imageUrl: string | null;
    price: number;
    quantity: number;
}

interface ReturnProps {
    items: CartStateItem[];
    totalAmount: number;
}

export const getCartDetail = (data: CartDTO): ReturnProps => {
    const items = data.items.map((item) => ({
        id: item.id,
        name: item.item.name,
        imageUrl: item.item.imageUrl,
        price: item.item.price,
        quantity:item.quantity,
    }));
    return {items, totalAmount:data.totalAmount}
}

