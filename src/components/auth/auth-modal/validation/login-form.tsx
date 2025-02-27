import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { LoginFormSchema, TLoginFormSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import FormInput from '@/src/components/shared/form-input';
import { Button } from '@/src/components/ui/button';


interface Props {
  className?: string;
  onClose?: VoidFunction;
}

const LoginForm: React.FC<Props> = ({ onClose }) => {

  const form = useForm<TLoginFormSchema>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = async (data: TLoginFormSchema) => {
    try {
      const responce = await signIn('credentials', { ...data, redirect: false })

      {responce?.ok ? (
          toast.success('Вы успешно вошли в аккаунт')
        ) : (
          toast.error('Не удалось войти в аккаунт')
        )
      }
        onClose?.();
    } catch (error) {
      console.log('[LOGIN] Error', error)
      return toast.error('CATCH-ERORR-VALIDATION')
    }

  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4 p-2  shadow-lg rounded-xl  '>
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Вход</h1>
          <p className=" text-sm mt-1">Введите данные для входа</p>
        </div>
        <FormInput name='email' placeholder='Почта...' />
        <FormInput name='password' placeholder='Пароль...' />
        <Button type="submit">Вход в аккаунт</Button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;