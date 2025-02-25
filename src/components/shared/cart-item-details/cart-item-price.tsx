import { cn } from "@/src/lib/utils";

interface Props {
  value: number;
  className?: string;
}

export const CartItemPrice: React.FC<Props> = ({ value, className }) => {
  return <h2 className={cn('font-bold', className)}>{value} $</h2>;
};