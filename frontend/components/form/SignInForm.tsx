'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import GoogleSignInButton from '../ui/GoogleSignInButton';


const FormSchema = z.object({
  email: z.string().min(1, 'Email is required').email('E-Mail invalido'),
  password: z
    .string()
    .min(1, 'Introduzca la contraseña')
    .min(8, 'La contraseña debe tener minimo 8 caracteres'),
});

const SignInForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <div className='font-bold'>¡Bienvenido a Contabiliza!</div>
      <br></br>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
        <div className='space-y-2' >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-Mail</FormLabel>
                <FormControl>
                  <Input placeholder='mail@ejemplo.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel> Contraseña</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='Ingresa tu contraseña'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className='w-full mt-6 bg-custom-azul-1 hover:bg-custom-azul-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
          Ingresar
        </Button>
      </form>
      <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
        o
      </div>
      <GoogleSignInButton>Iniciar Sesion con Google</GoogleSignInButton>
      <p className='text-center text-sm text-gray-600 mt-2'>
        Si no tienes una cuenta,&nbsp;
        <Link className='text-blue-500 hover:underline' href='/sign-up'>
          registrate!
        </Link>
      </p>
    </Form>
  );
};

export default SignInForm;