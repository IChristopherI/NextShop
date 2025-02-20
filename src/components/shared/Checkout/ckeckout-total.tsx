import React from 'react';
import WhiteBlock from './white-block';
import { Button } from '@/components/ui/button';
import { useCart } from '@/components/hooks/use-cart';
import { Package, Truck } from 'lucide-react';

interface Props {
  className?: string;
}

const Delivery: number = 150;


const CheckoutTotal: React.FC<Props> = ({ className }) => {
  const { totalAmount } = useCart()
  const totalPrice = Delivery + totalAmount;
  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
    <WhiteBlock title="4. Общая информация">
      <div className="space-y-4">
        <h1 className="font-bold text-3xl text-center">Итого - {totalPrice}$ </h1>
        <div className="bg-gray-100 p-4 rounded-xl shadow-md space-y-3">
          <div className="flex items-center justify-between text-gray-600">
            <div className="flex items-center gap-2">
              <Truck size={20} className="text-gray-500" />
              <span>Стоимость доставки:</span>
            </div>
            <b className="text-gray-900">{Delivery} $</b>
          </div>

          <div className="flex items-center justify-between text-gray-600">
            <div className="flex items-center gap-2">
              <Package size={20} className="text-gray-500" />
              <span>Стоимость товаров:</span>
            </div>
            <b className="text-gray-900">{totalAmount} $</b>
          </div>
        </div>

        <div className="flex justify-center">
          <Button type="submit" className="w-full py-3 text-lg">Перейти к оплате</Button>
        </div>
      </div>
    </WhiteBlock>
  </div>
  );
};

export default CheckoutTotal;