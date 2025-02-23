
'use client'
import React from 'react';
import FormInput from '../form-input';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterFormSchema, TRegisterFormSchema } from '@/components/auth/auth-modal/validation/schema';
import { User } from '@prisma/client';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import { updateUserInfo } from '@/app/actions';

interface Props {
  className?: string;
  data: User;
}

const ProfileForm: React.FC<Props> = ({ className, data }) => {

  const form = useForm<TRegisterFormSchema>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      name: data.name,
      email: data.email,
      password: '',
      confirmPassword: '',
    }
  })

  const onSubmit = async (data: TRegisterFormSchema) => {

    try {
      await updateUserInfo({
        email: data.email,
        name: data.name,
        password: data.password,
      })
      toast.success('Данные успешно обновлены')
    } catch (error) {
      toast.error('Не удалось оюновить данные')
      console.log('[Update-User]', error)
    }
  }

  const onClickSignOut = () => {
    signOut({
      callbackUrl: '/',
    })
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-md mt-10">
      <h1 className="text-2xl font-semibold mb-6 text-center">Редактировать профиль</h1>
      
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormInput name="email" placeholder="Email" className="w-full" />
          <FormInput name="name" placeholder="Имя" className="w-full" />
          <FormInput type="password" name="password" placeholder="Новый пароль" className="w-full" />
          <FormInput type="password" name="confirmPassword" placeholder="Подтвердите пароль" className="w-full" />
          
          <div className="flex flex-col gap-4 mt-6">
            <Button className="w-full text-base py-3" type="submit">
              Сохранить
            </Button>
            <Button variant="outline" className="w-full text-base py-3" onClick={onClickSignOut}>
              Выйти
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ProfileForm;