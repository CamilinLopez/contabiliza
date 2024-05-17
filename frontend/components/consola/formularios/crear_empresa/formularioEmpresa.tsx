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
              className="text-custom-gris-2 w-10/12 h-[32px] border-[1px] border-custom-gris-2 focus:outline-custom-azul-3 placeholder:font-courgette pl-2"
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
      <p className="font-ember font-normal text-[14px] text-custom-gris-2">
        Agrega o invita a usuarios para colaborar en la gestión contable de tu empresa. Permite que otros trabajen en tu
        cuenta, facilitando una administración eficiente y compartida de los registros financieros. <br /><br /> Se enviará un
        correo electrónico a los usuarioa con las instrucciones de configuración de la contraseña.
      </p>
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
      <div className="flex items-start">
        <button
          onClick={(e) => e.preventDefault()}
          className="border-[1px] border-custom-gris-2 px-[20px] py-[4px] font-ember font-medium text-[14px] text-custom-gris-2 hover:border-custom-negro-2 hover:text-custom-negro-2">
          Agrega un nuevo usuario
        </button>
      </div>
    </div>
  );
};

const FormPeriodoContable = ({ data }: { data: PeriodoContable }) => {
  const [year, setYear] = useState(new Date().getFullYear());

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
    const inputYear = parseInt(event.currentTarget.value);
    setYear(inputYear);
  };

  return (
    <div className="w-full flex flex-col gap-y-4">
      <p className="font-ember font-normal text-[14px] text-custom-gris-2">
        Selecciona el año contable para visualizar tus registros financieros de forma precisa y organizada.
      </p>
      {/* <div key={data.id} className="flex justify-between items-center">
        <div className="w-5/12">
          <p className="font-ember font-normal text-[14px] text-custom-negro-2">Fecha de inicio</p>
          <input
            type=""
            className="text-custom-gris-2 w-full h-[32px] border-[1px] border-custom-gris-2 focus:outline-custom-azul-3 placeholder:font-courgette pl-2"
          />
        </div>
        <p className="font-ember font-normal text-[14px] text-custom-negro-2">{data.text}</p>
        <div className="w-5/12">
          <p className="font-ember font-normal text-[14px] text-custom-negro-2">Fecha de finalización</p>
          <input
            type="month"
            className="w-full h-[32px] border-[1px] border-custom-gris-2 focus:outline-custom-azul-3 placeholder:font-courgette text-custom-gris-2 pl-2"
          />
        </div>
      </div> */}

      <div>
        <input
          className="w-[180px] border-[1px] border-custom-gris-2"
          type="number"
          value={year}
          onChange={handleYearChange}
          placeholder="YYYY"
          min="1900"
          max="2100"
        />
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
  const currencies = ['USD', 'COP', 'EUR', 'CLP'];

  const handleSelectCurrency = (currency: string) => {
    setSelectedCurrency(currency);
    setIsMenuOpen(false); // Cierra el menú cuando se selecciona una opción
  };
  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-ember font-normal text-[14px] text-custom-gris-2">
        Configura el régimen tributario de tu empresa según tus necesidades específicas. Elige entre las siguientes
        opciones.
      </p>
      <div className="flex flex-col gap-y-2">
        <p className="font-ember font-normal text-[14px] text-custom-negro-1">Opciones para el régimen tributario.</p>
        <div>
          {data.typeRegimenFiscal.map((item) => (
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
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="font-ember font-normal text-[14px] text-custom-negro-1">Tipo de contabilidad.</p>
        <div className="flex gap-x-7">
          <button
            name="regimen_fiscal"
            onClick={handleClick}
            className={`flex items-center gap-x-3 border-[1px]  w-[260px] h-[62px] px-4 ${
              checked.regimen_fiscal ? 'border-custom-azul-3 bg-[#f1faff]' : 'border-custom-gris-2'
            }`}>
            <input type="radio" checked={checked.regimen_fiscal} readOnly className="mr-2" />
            <label className="font-ember font-normal text-[14px] cursor-pointer">Contabilidad completa</label>
          </button>
          <button
            name="contabilidad_completa"
            onClick={handleClick}
            className={`flex items-center gap-x-3 border-[1px]  w-[260px] h-[62px] px-4 ${
              checked.contavilidad_completa ? 'border-custom-azul-3 bg-[#f1faff]' : 'border-custom-gris-2'
            }`}>
            <input type="radio" checked={checked.contavilidad_completa} readOnly className="mr-2" />
            <label className="font-ember font-normal text-[14px] cursor-pointer">Contabilidad simplificada</label>
          </button>
        </div>
        <div>
          <div className="flex items-end gap-x-8">
            <div>
              <div className="flex gap-x-3">
                <input type="checkbox" className="cursor-pointer" />
                <label className="font-ember font-normal text-[14px] text-custom-negro-1">Crear libro de caja.</label>
              </div>
              <div className="flex gap-x-3">
                <input type="checkbox" className="cursor-pointer" />
                <label className="font-ember font-normal text-[14px] text-custom-negro-1">
                  Libro de ingresos y egresos.{' '}
                </label>
              </div>
            </div>
            <div className="flex items-end gap-x-3">
              <label className="font-ember font-normal text-[14px] text-custom-negro-1">
                Monto apertura libro caja.
              </label>
              <input type="number" name="" id="" className="h-[25px] w-[100px] border-[1px] border-custom-gris-2" />
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(!isMenuOpen);
                  }}
                  className="font-ember font-normal text-[14px] h-[25px] flex items-center gap-x-1">
                  {selectedCurrency || 'CLP'}
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
