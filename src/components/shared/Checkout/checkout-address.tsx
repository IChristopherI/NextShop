import React from 'react';
import WhiteBlock from './white-block';
import FormInput from '../form-input';
import { Textarea } from '../../ui/textarea';

interface Props {
  className?: string;
}

const CheckoutAddress: React.FC<Props> = () => {
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