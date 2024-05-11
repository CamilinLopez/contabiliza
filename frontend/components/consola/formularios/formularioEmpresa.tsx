'use client';

import { InputData } from '@/types/createEmpresa';

const FormInput = ({ data }: { data: InputData[] }) => (
  <div className="flex flex-col gap-y-7">
    {data.map((info) => (
      <div key={info.id}>
        <p className="font-ember font-normal text-[14px] text-custom-negro-2">{info.textp}</p>
        {info.id !== '15974653k' ? (
          <input
            className="w-10/12 h-[32px] border-[1px] border-custom-gris-2 focus:outline-custom-azul-3 placeholder:font-courgette pl-2"
            type="text"
            placeholder={info.placeholder}
            name={info.name}
          />
        ) : (
          <input
            type="date"
            className="w-10/12 h-[32px] border-[1px] border-custom-gris-2 focus:outline-custom-azul-3 placeholder:font-courgette pl-2"
            placeholder={info.placeholder}
            name={info.name}
          />
        )}
      </div>
    ))}
  </div>
);

export function Form({ infoEmpresa }: { infoEmpresa: InputData[] }) {
  return (
    <div>
      <form className="flex flex-col gap-y-8" action="">
        <FormInput data={infoEmpresa} />
      </form>
    </div>
  );
}
