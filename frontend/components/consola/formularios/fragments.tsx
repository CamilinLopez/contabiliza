'use client'

import { useState } from 'react';
import { CompanyDataProps } from '@/types/createEmpresa';
import { Form } from '@/components/consola/formularios/formularioEmpresa';

export const MainTitle = () => (
  <div className="flex flex-col gap-y-1">
    <h1 className="font-ember font-normal text-[28px] text-custom-negro-2">Crear empresa</h1>
    <p className="font-ember font-medium text-[14px] text-custom-gris-2">
  En Contabiliza, entendemos que el inicio de toda contabilidad es la creación de empresa. Simplificamos este proceso y te acompañamos en cada paso hacia una <span className="font-extrabold text-black">gestión financiera </span>exitosa. 
  <span className="font-extrabold text-black"> Registra datos esenciales como nombre, RUT y dirección para cada perfil empresarial. </span>  
  Accede a todas las <span className="font-extrabold text-black">herramientas contables necesarias </span> desde una sola plataforma centralizada.
</p>
  </div>
);

export const CompanyData: React.FC<CompanyDataProps> = ({ title, data }) => {
  const [hidden, setHidden] = useState<boolean>(true);

  const toggleModal = () => {
    setHidden(!hidden);
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Si el clic ocurre dentro del modal secundario, evita cerrar el modal
    if (!e.currentTarget.contains(e.target as Node)) {
      toggleModal();
    }
  };

  return (
    <div className="w-auto h-auto shadow-thin-black">
      <div className="border-b-[1px] border-slate-300 bg-custom-blanco-2">
        <div className="h-[65px] w-auto flex items-center p-5 gap-x-3" onClick={toggleModal}>
          <button>
            {hidden ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>
            )}
          </button>

          <h2 className="font-ember font-semibold text-[18px] text-custom-negro-2">{title}</h2>
        </div>
      </div>
      {!hidden && (
        <div className="bg-white p-5 w-full" onClick={handleModalClick}>
          <Form infoEmpresa={data} />
        </div>
      )}
    </div>
  );
};