'use client';

import React, { useState } from 'react';
import { ResumenMenu } from './fracments';

export default function Resumen() {
  const [hidden, setHidden] = useState<boolean>(false);

  return (
    <div className="w-auto h-full shadow-thin-black">
      <div className="border-b-[1px] border-slate-300 bg-custom-blanco-2">
        <div className="h-[65px] w-auto flex items-center p-5 gap-x-3">
          {hidden ? (
            <button onClick={() => setHidden(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          ) : (
            <button onClick={() => setHidden(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          )}

          <h2 className="font-ember font-semibold text-[18px] text-custom-negro-2">Resumen</h2>
        </div>
      </div>
      <div className={`bg-white h-full p-5 w-full ${hidden && 'hidden'} `}>
        <ResumenMenu />
      </div>
    </div>
  );
}

export const CrearEmpresaSection = () => {
  return (
    <div className="w-auto h-auto shadow-thin-black">
      <div className="border-b-[1px] border-slate-300 bg-custom-blanco-2">
        <div className="p-7 flex justify-between ">
          <button
            onClick={(e) => e.preventDefault()}
            className="font-ember font-semibold text-[14px] text-custom-gris-2 hover:text-custom-negro-2">
            Cancelar
          </button>
          <button
            onClick={(e) => e.preventDefault()}
            className="px-[25px] py-[4px] font-ember font-semibold text-[14px] text-custom-negro-2 bg-custom-naranja hover:bg-custom-naranja-darck">
            Crear empresa
          </button>
        </div>
      </div>
    </div>
  );
};
