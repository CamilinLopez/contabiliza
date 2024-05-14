'use client';

import { InputData, Options, PeriodoContable, RegimenTributario } from '@/types/createEmpresa';
import { useState } from 'react';

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

const FormRegimenTributario = ({ data }: { data: RegimenTributario }) => {
  const [opr, setOpt] = useState({
    regimen_fiscal: false,
    contavilidad_completa: false,
  });
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleClick1 = (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpt({ ...opr, ['regimen_fiscal']: !opr.regimen_fiscal, ['contavilidad_completa']: false });
  };

  const handleClick2 = (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpt({ ...opr, ['contavilidad_completa']: !opr.contavilidad_completa, ['regimen_fiscal']: false });
  };

  const handleCheckboxChange = (value: string) => {
    setSelectedOption(value); // Actualiza el valor seleccionado
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex gap-x-7">
        <button
          onClick={handleClick1}
          className={`flex items-center gap-x-3 border-[1px] border-custom-gris-2 w-[260px] h-[62px] px-4 ${
            opr.regimen_fiscal && 'border-custom-azul-3 bg-[#f1faff]'
          }`}>
          <input type="radio" className="cursor-pointer" name="regimen_fiscal" checked={opr.regimen_fiscal} />
          <label className="font-ember font-normal text-[14px] cursor-pointer">Regiman fiscal</label>
        </button>
        <button
          onClick={handleClick2}
          name="contavilidad_completa"
          className={`flex items-center gap-x-3 border-[1px] border-custom-gris-2 w-[260px] h-[62px] px-4 ${
            opr.contavilidad_completa && 'border-custom-azul-3 bg-[#f1faff]'
          }`}>
          <input type="radio" className="cursor-pointer" checked={opr.contavilidad_completa} />
          <label className="font-ember font-normal text-[14px] cursor-pointer">Contabilidad completa</label>
        </button>
      </div>
      <div className={`${opr.regimen_fiscal ? 'flex flex-col gap-y-3' : 'hidden'}`}>
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            name={'Regimen 14 A semi integrado'}
            checked={selectedOption === 'Regimen 14 A semi integrado'}
            onChange={() => handleCheckboxChange('Regimen 14 A semi integrado')}
          />
          <label className="font-ember font-normal text-[14px] text-custom-negro-1 ">Regimen 14 A semi integrado</label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            name="Regimen Pro Pyme 14 DN°3"
            checked={selectedOption === 'Regimen Pro Pyme 14 DN°3'}
            onChange={() => handleCheckboxChange('Regimen Pro Pyme 14 DN°3')}
          />
          <label className="font-ember font-normal text-[14px] text-custom-negro-1 ">Regimen Pro Pyme 14 DN°3</label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            name="Regimen Pro Pyme 14 DN°8"
            checked={selectedOption === 'Regimen Pro Pyme 14 DN°8'}
            onChange={() => handleCheckboxChange('Regimen Pro Pyme 14 DN°8')}
          />
          <label className="font-ember font-normal text-[14px] text-custom-negro-1 ">Regimen Pro Pyme 14 DN°8</label>
        </div>
      </div>
    </div>
  );
};

export function Form({ infoEmpresa }: { infoEmpresa: Options }) {
  const arraysIguales = ({ a, b }: { a: any; b: any }) => {
    return a.sort().toString() === b.sort().toString();
  };
  let option1, option2, option3;

  if (Array.isArray(infoEmpresa)) {
    option1 = arraysIguales({
      a: Object.keys(infoEmpresa[0]).sort(),
      b: ['id', 'textp', 'placeholder', 'name'].sort(),
    });

    option2 = arraysIguales({
      a: Object.keys(infoEmpresa[0]).sort(),
      b: ['id', 'text'].sort(),
    });
  }
  option3 = arraysIguales({
    a: Object.keys(infoEmpresa).sort(),
    b: ['id', 'regimen_fiscal', 'contabilidad_completa'].sort(),
  });

  return (
    <div>
      <form className="flex flex-col gap-y-8" action="">
        {option1 && <FormInput data={infoEmpresa as InputData[]} />}
        {option2 && <FormPeriodoContable data={infoEmpresa as PeriodoContable[]} />}
        {option3 && <FormRegimenTributario data={infoEmpresa as RegimenTributario} />}
      </form>
    </div>
  );
}
