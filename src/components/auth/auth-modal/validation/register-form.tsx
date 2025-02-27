import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { RegisterFormSchema, TRegisterFormSchema } from './schema';
import toast from 'react-hot-toast';
import FormInput from '@/src/components/shared/form-input';
import { registerUser } from '@/src/app/actions';
import { Button } from '@/src/components/ui/button';


interface Props  {
    className?: string;
}

const RegisterForm: React.FC<Props> = () => {
    const form = useForm<TRegisterFormSchema>({
        resolver: zodResolver(RegisterFormSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    })

    const onSubmit = async(data: TRegisterFormSchema) => {
        try {
            await registerUser({
                name: data.name,
                email: data.email,
                password: data.password,
            })
            toast.success('Регистрация успешна 📝');

        } catch (error) {
            console.log('REGISTER', error)
            toast.error('Не удалось зарегестрироваться 📝');
        }
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4 p-2'>
            <div className="text-center">
          <h1 className="text-2xl font-semibold">Регистрация</h1>
          <p className="text-gray-500 text-sm mt-1">Введите данные для регистрации</p>
        </div>
                <FormInput name="email" placeholder="Почта" className="w-full"  />
                <FormInput name="name" placeholder="Имя" className="w-full" />
                <FormInput name="password" type="password" placeholder="Новый пароль" className="w-full" />
                <FormInput name="confirmPassword" type="password" placeholder="Подтвердите пароль" className="w-full" />

                <Button type="submit">Регистрация</Button>
            </form>
        </FormProvider>
    );
};

export default RegisterForm;