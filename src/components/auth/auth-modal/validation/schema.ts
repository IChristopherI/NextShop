import { z } from "zod";


export const LoginFormSchema = z.object({
    email: z.string().email({message: 'Введите корекную почту'}),
    password: z.string().min(4,{message: 'Введите не более 4 символов'}),
})


export const RegisterFormSchema = z.object({
    name: z.string().min(3, {message: 'Введите не более 3 сиволов'}),
    email: z.string().email({message: 'Введите корекную почту'}),
    password: z.string().min(6,{message: 'Введите не более 6 символов'}),
    confirmPassword: z.string().min(6,{message: 'Введите не более 6 символов'}),
}).refine((data) => data.password == data.confirmPassword, {message: 'Пароли не совпадают', path:['confirmPassword']})


export type TLoginFormSchema = z.infer<typeof LoginFormSchema>
export type  TRegisterFormSchema = z.infer<typeof RegisterFormSchema>