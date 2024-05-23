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
    <div id="management" className="bg-gray-900 flex justify-center items-center">
    <div className="px-10 py-16 bg-custom-azul-1 w-full h-auto flex items-center justify-center flex-col">
      <div>
        <h1 className="font-ember font-normal text-white text-[35px] text-center">Bienvenido a Contabiliza</h1>
        <br></br>
        
      </div>
      <div>
        <Image className="" alt="landing" src={'/images/init.svg'} width={350} height={350} priority />
      </div>
      <p className="py-5 font-ember font-light text-[18px] text-white text-center">
          Transforma números en estrategias exitosas. ¡Inicia sesión y <br /> descubre el poder de Contabiliza!
          <CustomLink href="/sign-up" className="w-15/12 my-5">
        Registrarse
      </CustomLink>
        </p>
        
    </div>
  </div>
  );
}
