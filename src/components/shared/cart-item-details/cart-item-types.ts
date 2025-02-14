export interface CartItemProps {
    id:number;
    name: string;
    imageUrl: string;
    value: number;
    quantity:number;
    details?: string;
}