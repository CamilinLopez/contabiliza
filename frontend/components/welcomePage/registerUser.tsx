'use client';

import Image from 'next/image';
import { CustomLink } from '../utils/customElements';
import { useState } from 'react';
import Link from 'next/link';

export default function Management() {
  const [user, setUser] = useState({
    email: '',
    contraseña: '',
  });

  return (
    <div id="management" className="bg-white flex justify-between">
      <div className="px-10 py-16 bg-custom-azul-1 w-11/12 h-auto flex items-">
        <div className="flex">
          <div>
            <h1 className="font-ember font-normal text-white text-[35px]">Bienvenido a Contaviliza</h1>
            <p className="py-5 font-ember font-light text-[18px] text-white">
              Transforma números en estrategias exitosas. ¡Inicia sesión y <br /> descubre el poder de Contaviliza
            </p>
            <CustomLink href="/" className="w-10/12 my-16">
              Inicia sesión nuevamente
            </CustomLink>
          </div>
          <div>
            <Image className="" alt="landing" src={'/images/init.svg'} width={350} height={350} priority />
          </div>
        </div>
      </div>
      <div className="contenedor">
        <form className="flex flex-col gap-y-5" action="">
          <h1 className="font-ember font-normal text-[28px]">Registrarse </h1>
          <div>
            <p className="font-ember font-normal text-[14px]">Dirección de correo electrónico del usuario</p>
            <p className="font-ember font-normal text-[12px] text-[#687078]">
              Se utiliza para la recuperación de cuentas y algunas funciones administrativas
            </p>
            <input className="border-[1px] border-[#aab7b8] w-full h-[30px] focus:outline-custom-azul-3" type="text" />
          </div>
          <div>
            <p className="font-ember font-normal text-[14px]">Contraseña</p>
            <p className="font-ember font-normal text-[12px] text-[#687078]">
              Usa 12 caracteres, mayúsculas A-Z, minúsculas a-z, números 0-9, símbolos @#$%.
            </p>
            <input className="border-[1px] border-[#aab7b8] w-full h-[30px] focus:outline-custom-azul-3" type="text" />
          </div>
          <button className="bg-custom-naranja hover:bg-custom-naranja-darck w-full  text-custom-negro text-[14px] py-2 px-5 font-ember font-semibold">
            Registrar y verificar esta cuenta en contaviliza
          </button>
          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <div className="px-2 text-gray-500 font-ember">O</div>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <Link
            className="font-ember font-semibold text-[14px] text-[#545b64] hover:text-[#1f2225]  flex items-center gap-x-1 border-[1px] border-[#545b64] hover:border-[#1f2225] px-2 py-3"
            href={'/'}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
              <path
                fill="#fbc02d"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
              <path
                fill="#e53935"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
              <path
                fill="#4caf50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
              <path
                fill="#1565c0"
                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            Iniciar sesión con una cuenta de google
          </Link>
        </form>
      </div>
    </div>
  );
}
