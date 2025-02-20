import React from 'react';
import WhiteBlock from './white-block';
import { Textarea } from '@/components/ui/textarea';
import FormInput from '../form-input';

interface Props {
  className?: string;
}

const CheckoutAddress: React.FC<Props> = ({ className }) => {
  return (
    <div>
     <WhiteBlock title='3. Адрес доставки'>
            <FormInput name='address' placeholder='Адрес доставки' />
            <Textarea name='comment' placeholder='Дополнительная информация' />

      </WhiteBlock>
    </div>
  );
};

export default CheckoutAddress;