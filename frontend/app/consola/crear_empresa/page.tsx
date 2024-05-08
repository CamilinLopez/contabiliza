import React from 'react';

export default function CrearEmpresa() {
  return (
    <div className="p-8">
      <div className="w-8/12 flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-2">
          <h1 className="font-ember font-normal text-[28px] text-custom-negro-2">Crear empresa</h1>
          <p className="font-ember font-medium text-[14px] text-custom-gris-2">
            En Contaviliza, entendemos que el inicio de toda contabilidad es la creación de empresa. Simplificamos este
            proceso y te acompañamos en cada paso hacia una gestión financiera exitosa.
          </p>
        </div>
        <div className="w-auto h-full bg-white shadow-thin-black p-5">
          <form action="">
            <div className="h-[65px] border-b-[1px] border-slate-300">
              <h2 className="font-ember font-semibold text-[18px] text-custom-negro-2">Datos de la empresa</h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
