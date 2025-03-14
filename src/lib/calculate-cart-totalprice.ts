import { CartItemDTO } from "../components/shared/services/Cart_dto";

export const CalcTotalCart = (items: CartItemDTO): number => {
    if (!items.item || !items.item.price || !items.quantity) {
        return 0;
    }
    return  items.item.price * items.quantity;
}