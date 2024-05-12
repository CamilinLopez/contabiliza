'use client';

import { InputData, Options, PeriodoContable } from '@/types/createEmpresa';

const FormInput = ({ data }: { data: InputData[] }) => {
  return (
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
};

const FormPeriodoContable = ({ data }: { data: PeriodoContable[] }) => {
  return (
    <div className="w-full">
      {data.map((item) => (
        <div key={item.id} className="flex justify-between items-center">
          <div className="w-5/12">
            <p className="font-ember font-normal text-[14px] text-custom-negro-2">Fecha de inicio</p>
            <input
              type="date"
              className="w-full h-[32px] border-[1px] border-custom-gris-2 focus:outline-custom-azul-3 placeholder:font-courgette pl-2"
            />
          </div>
          <p className="font-ember font-normal text-[14px] text-custom-negro-2">{item.text}</p>
          <div className="w-5/12">
            <p className="font-ember font-normal text-[14px] text-custom-negro-2">Fecha de finalización</p>
            <input
              type="date"
              className="w-full h-[32px] border-[1px] border-custom-gris-2 focus:outline-custom-azul-3 placeholder:font-courgette pl-2"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export function Form({ infoEmpresa }: { infoEmpresa: Options }) {
  const arraysIguales = ({ a, b }: { a: any; b: any }) => {
    return a.sort().toString() === b.sort().toString();
  };

  const option1 = arraysIguales({
    a: Object.keys(infoEmpresa[0]).sort(),
    b: ['id', 'textp', 'placeholder', 'name'].sort(),
  });

  const option2 = arraysIguales({
    a: Object.keys(infoEmpresa[0]).sort(),
    b: ['id', 'text'].sort(),
  });

  return (
    <div>
      <form className="flex flex-col gap-y-8" action="">
        {option1 && <FormInput data={infoEmpresa as InputData[]} />}
        {option2 && <FormPeriodoContable data={infoEmpresa as PeriodoContable[]} />}
      </form>
    </div>
  );
}
