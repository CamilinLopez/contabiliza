'use client';

import { Options, PeriodoContable, RegimenTributario, CrearEmpresa } from '@/types/createEmpresa';
import { useState } from 'react';

const FormCrearempresa = ({ data }: { data: CrearEmpresa[] }) => {
  return (
    <div className="flex flex-col gap-y-7">
      <p className="font-ember font-normal text-[14px] text-custom-gris-2">
        Como contador, administra múltiples empresas en nuestra app. Registra datos esenciales como nombre, RUT y
        dirección para cada perfil empresarial. Accede a todas las herramientas contables necesarias desde una sola
        plataforma centralizada.
      </p>
      {data.map((info) => (
        <div key={info.id}>
          <p className="font-ember font-normal text-[14px] text-custom-negro-2">{info.text}</p>

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

const FormDatosContador = ({ data }: { data: CrearEmpresa[] }) => {
  return (
    <div className="flex flex-col gap-y-7">
      {data.map((info) => (
        <div key={info.id}>
          <p className="font-ember font-normal text-[14px] text-custom-negro-2">{info.text}</p>

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

const FormUsuarioSistema = ({ data }: { data: CrearEmpresa[] }) => {
  return (
    <div className="flex flex-col gap-y-7">
      {data.map((info) => (
        <div key={info.id}>
          <p className="font-ember font-normal text-[14px] text-custom-negro-2">{info.text}</p>

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

const FormPeriodoContable = ({ data }: { data: PeriodoContable }) => {
  return (
    <div className="w-full flex flex-col gap-y-4">
      <p className="font-ember font-normal text-[14px] text-custom-gris-2">
        Define el periodo contable indicando la fecha de inicio y fin de tus registros financieros. Desde la apertura
        hasta el cierre del periodo, mantén un seguimiento preciso de tus transacciones empresariales.
      </p>
      <div key={data.id} className="flex justify-between items-center">
        <div className="w-5/12">
          <p className="font-ember font-normal text-[14px] text-custom-negro-2">Fecha de inicio</p>
          <input
            type="date"
            className="w-full h-[32px] border-[1px] border-custom-gris-2 focus:outline-custom-azul-3 placeholder:font-courgette pl-2"
          />
        </div>
        <p className="font-ember font-normal text-[14px] text-custom-negro-2">{data.text}</p>
        <div className="w-5/12">
          <p className="font-ember font-normal text-[14px] text-custom-negro-2">Fecha de finalización</p>
          <input
            type="date"
            className="w-full h-[32px] border-[1px] border-custom-gris-2 focus:outline-custom-azul-3 placeholder:font-courgette pl-2"
          />
        </div>
      </div>
    </div>
  );
};

const FormRegimenTributario = ({ data }: { data: RegimenTributario }) => {
  const [checked, setChecked] = useState<{ regimen_fiscal: boolean; contavilidad_completa: boolean }>({
    regimen_fiscal: false,
    contavilidad_completa: true,
  });
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('');

  const handleClick = (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (e.currentTarget.name === 'regimen_fiscal')
      setChecked({
        ...checked,
        ['regimen_fiscal']: !checked.regimen_fiscal,
        ['contavilidad_completa']: (checked.contavilidad_completa = false),
      });
    if (e.currentTarget.name === 'contabilidad_completa')
      setChecked({
        ...checked,
        ['contavilidad_completa']: !checked.contavilidad_completa,
        ['regimen_fiscal']: (checked.regimen_fiscal = false),
      });
  };

  const handleCheckboxChange = (value: string) => {
    setSelectedOption(value);
  };
  const currencies = ['USD', 'COP', 'EUR'];

  const handleSelectCurrency = (currency: string) => {
    setSelectedCurrency(currency);
    setIsMenuOpen(false); // Cierra el menú cuando se selecciona una opción
  };
  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-ember font-normal text-[14px] text-custom-gris-2">
        Configura el régimen tributario de tu empresa según sus necesidades específicas. Elige entre opciones como
        Contabilidad Completa o Regímenes Propyme, y especifica si deseas llevar un libro de caja o ingresos y egresos.
        Además, establece el monto de apertura de caja para un inicio preciso en tus registros financieros.
      </p>
      <div className="flex gap-x-7">
        <button
          name="regimen_fiscal"
          onClick={handleClick}
          className={`flex items-center gap-x-3 border-[1px]  w-[260px] h-[62px] px-4 ${
            checked.regimen_fiscal ? 'border-custom-azul-3 bg-[#f1faff]' : 'border-custom-gris-2'
          }`}>
          <input type="radio" checked={checked.regimen_fiscal} readOnly className="mr-2" />
          <label className="font-ember font-normal text-[14px] cursor-pointer">Regimen fiscal</label>
        </button>
        <button
          name="contabilidad_completa"
          onClick={handleClick}
          className={`flex items-center gap-x-3 border-[1px]  w-[260px] h-[62px] px-4 ${
            checked.contavilidad_completa ? 'border-custom-azul-3 bg-[#f1faff]' : 'border-custom-gris-2'
          }`}>
          <input type="radio" checked={checked.contavilidad_completa} readOnly className="mr-2" />
          <label className="font-ember font-normal text-[14px] cursor-pointer">Contabilidad completa</label>
        </button>
      </div>
      <div className={`${checked.regimen_fiscal ? 'flex flex-col gap-y-1' : 'hidden'}`}>
        {data.regimen1.options.map((item) => (
          <div key={item.id} className="flex items-center gap-x-3">
            <input
              type="checkbox"
              name={item.name}
              checked={selectedOption === item.name}
              onChange={() => handleCheckboxChange(item.name)}
            />
            <label className="font-ember font-normal text-[14px] text-custom-negro-1 ">{item.name}</label>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-x-8">
        <div>
          <div className="flex gap-x-3">
            <input type="checkbox" className="cursor-pointer" />
            <label className="font-ember font-normal text-[14px] text-custom-negro-1">Crear libro de caja</label>
          </div>
          <div className="flex gap-x-3">
            <input type="checkbox" className="cursor-pointer" />
            <label className="font-ember font-normal text-[14px] text-custom-negro-1">
              Libro de ingresos y egresos
            </label>
          </div>
        </div>
        <div className="flex items-end gap-x-3">
          <label className="font-ember font-normal text-[14px] text-custom-negro-1">Monto apertura libro caja</label>
          <input type="number" name="" id="" className="h-[25px] w-[100px] border-[1px] border-custom-gris-2" />
          <div className="relative">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="font-ember font-normal text-[14px] h-[25px] flex items-center gap-x-1">
              {selectedCurrency || 'USD'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 text-current">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {isMenuOpen && (
              <ul className="absolute top-full left-55 bg-white border border-gray-400">
                {currencies.map((currency) => (
                  <li
                    key={currency}
                    onClick={() => handleSelectCurrency(currency)}
                    className="px-1 py-1 cursor-pointer hover:bg-gray-100 font-ember font-normal text-[14px]">
                    {currency}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export function Form({ infoEmpresa }: { infoEmpresa: Options }) {
  return (
    <div>
      <form className="flex flex-col gap-y-8" action="">
        {infoEmpresa.section === 'crear_empresa' && (
          <FormCrearempresa data={infoEmpresa.infoEmpresa as CrearEmpresa[]} />
        )}
        {infoEmpresa.section === 'datos_contador' && (
          <FormDatosContador data={infoEmpresa.infoEmpresa as CrearEmpresa[]} />
        )}
        {infoEmpresa.section === 'usuario_del_sistema' && (
          <FormUsuarioSistema data={infoEmpresa.infoEmpresa as CrearEmpresa[]} />
        )}
        {infoEmpresa.section === 'periodo_contable' && (
          <FormPeriodoContable data={infoEmpresa.infoEmpresa as PeriodoContable} />
        )}
        {infoEmpresa.section === 'regimen_tributario' && (
          <FormRegimenTributario data={infoEmpresa.infoEmpresa as RegimenTributario} />
        )}
      </form>
    </div>
  );
}
