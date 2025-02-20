import React from 'react';
import WhiteBlock from './white-block';
import FormInput from '../form-input';

interface Props {
    className?: string;
}

const CheckoutPersonal: React.FC<Props> = ({ className }) => {
    return (
            <WhiteBlock title='2. Персональная информация'>
                <div className='grid grid-cols-2 gap-2 '>
                <FormInput name='firstName' placeholder='Имя' />
                <FormInput name='lastName' placeholder='Фамилия' />
                <FormInput name='email'placeholder='Почта' />
                <FormInput name='phone'placeholder='Номер телефона' />
                </div>

            </WhiteBlock>
    );
};

export default CheckoutPersonal;