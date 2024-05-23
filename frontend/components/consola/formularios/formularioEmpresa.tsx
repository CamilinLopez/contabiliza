'use client';

import { Options, PeriodoContable, RegimenTributario, CrearEmpresa } from '@/types/createEmpresa';
import { FormCrearEmpresatype, dataUsuariosSistema } from '@/types/formCrearEmpresa';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FormCrearempresa = ({
  data,
  setCrearEmpresa,
  crearEmpresa,
}: {
  data: CrearEmpresa[];
  setCrearEmpresa: React.Dispatch<React.SetStateAction<FormCrearEmpresatype>>;
  crearEmpresa: FormCrearEmpresatype;
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget) {
      const { name, value } = e.currentTarget;
      setCrearEmpresa((prevState) => ({
        ...prevState,
        section1: {
          ...prevState.section1,
          [name]: value,
        },
      }));
    }
  };
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
              value={crearEmpresa.section1[info.name as keyof typeof crearEmpresa.section1]}
              onChange={handleOnChange}
            />
          ) : (
            <input
              type="date"
              className="text-custom-gris-2 w-10/12 h-[32px] border-[1px] border-custom-gris-2 focus:outline-custom-azul-3 placeholder:font-courgette pl-2"
              placeholder={info.placeholder}
              value={crearEmpresa.section1[info.name as keyof typeof crearEmpresa.section1]}
              name={info.name}
              onChange={handleOnChange}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const FormDatosContador = ({
  data,
  setCrearEmpresa,
  crearEmpresa,
}: {
  data: CrearEmpresa[];
  setCrearEmpresa: React.Dispatch<React.SetStateAction<FormCrearEmpresatype>>;
  crearEmpresa: FormCrearEmpresatype;
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget) {
      const { name, value } = e.currentTarget;
      setCrearEmpresa((prevState) => ({
        ...prevState,
        section2: {
          ...prevState.section2,
          [name]: value,
        },
      }));
    }
  };
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
              value={crearEmpresa.section2[info.name as keyof typeof crearEmpresa.section2]}
              onChange={handleOnChange}
            />
          ) : (
            <input
              type="date"
              className="w-10/12 h-[32px] border-[1px] border-custom-gris-2 focus:outline-custom-azul-3 placeholder:font-courgette pl-2"
              placeholder={info.placeholder}
              name={info.name}
              value={crearEmpresa.section2[info.name as keyof typeof crearEmpresa.section2]}
              onChange={handleOnChange}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const FormInfoSocio = ({ data }: { data: CrearEmpresa[] }) => {
  return (
    <div className="flex flex-col gap-y-7">
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
          Agrega un nuevo socio/accionista
        </button>
      </div>
    </div>
  );
};




const FormUsuarioSistema = ({
  data,
  setCrearEmpresa,
  crearEmpresa,
}: {
  data: CrearEmpresa[];
  setCrearEmpresa: React.Dispatch<React.SetStateAction<FormCrearEmpresatype>>;
  crearEmpresa: FormCrearEmpresatype;
}) => {
  const [usuariSistema, setUsuariSistema] = useState<dataUsuariosSistema>({
    id: '',
    Correo: '',
    Nombre: '',
  });
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsuariSistema({
      ...usuariSistema,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const addUsers = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newUser = { ...usuariSistema, id: uuidv4() };
    setCrearEmpresa((prevState) => ({
      ...prevState,
      section3: {
        usuarios_del_sistema: [...prevState.section3.usuarios_del_sistema, newUser],
      },
    }));
    setUsuariSistema({ id: '', Correo: '', Nombre: '' });
  };
  const deleteUesr = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setCrearEmpresa((prevState) => ({
      ...prevState,
      section3: {
        usuarios_del_sistema: [...prevState.section3.usuarios_del_sistema.filter((item) => item.id !== id)],
      },
    }));
  };
  return (
    <div className="flex flex-col gap-y-7">
      <p className="font-ember font-normal text-[14px] text-custom-gris-2">
        Agrega o invita a usuarios para colaborar en la gestión contable de tu empresa. Permite que otros trabajen en tu
        cuenta, facilitando una administración eficiente y compartida de los registros financieros. <br />
        <br /> Se enviará un correo electrónico a los usuarioa con las instrucciones de configuración de la contraseña.
      </p>
      <div className="flex flex-col gap-y-7">
        {data.map((info) => (
          <div key={info.id}>
            <p className="font-ember font-normal text-[14px] text-custom-negro-2">{info.text}</p>

            <input
              className="w-10/12 h-[32px] border-[1px] border-custom-gris-2 focus:outline-custom-azul-3 placeholder:font-courgette pl-2"
              type="text"
              placeholder={info.placeholder}
              name={info.name}
              value={usuariSistema[info.name as keyof dataUsuariosSistema]}
              onChange={handleOnChange}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-y-2">
        {crearEmpresa.section3.usuarios_del_sistema.map((item) => (
          <div key={item.id} className="flex gap-x-5 items-center">
            <p className="font-ember font-semibold text-[14px] text-custom-gris-2 w-1/3">{item.Nombre}</p>
            <p className="font-ember font-semibold text-[14px] text-custom-gris-2 w-1/3">{item.Correo}</p>
            <button
              onClick={(e) => deleteUesr(e, item.id)}
              className="w-1/5 border-[1px] border-custom-gris-2 px-[10px] py-[4px] font-ember font-medium text-[14px] text-custom-gris-2 hover:border-custom-negro-2 hover:text-custom-negro-2">
              Eliminar usurario
            </button>
          </div>
        ))}
      </div>
      <div className="flex items-start">
        <button
          onClick={addUsers}
          className="border-[1px] border-custom-gris-2 px-[20px] py-[4px] font-ember font-medium text-[14px] text-custom-gris-2 hover:border-custom-negro-2 hover:text-custom-negro-2">
          Agrega un nuevo usuario
        </button>
      </div>
    </div>
  );
};

const FormPeriodoContable = ({
  data,
  setCrearEmpresa,
}: {
  data: PeriodoContable;
  setCrearEmpresa: React.Dispatch<React.SetStateAction<FormCrearEmpresatype>>;
}) => {
  const [year, setYear] = useState(new Date().getFullYear());

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
    const inputYear = parseInt(event.currentTarget.value);
    if (!isNaN(inputYear)) {
      setYear(inputYear);
      setCrearEmpresa((prevState) => ({
        ...prevState,
        section4: {
          fecha: inputYear,
        },
      }));
    }
  };

  return (
    <div className="w-full flex flex-col gap-y-4">
      <p className="font-ember font-normal text-[14px] text-custom-gris-2">
        Selecciona el año contable para visualizar tus registros financieros de forma precisa y organizada.
      </p>
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

const FormRegimenTributario = ({
  data,
  setCrearEmpresa,
  crearEmpresa,
}: {
  data: RegimenTributario;
  setCrearEmpresa: React.Dispatch<React.SetStateAction<FormCrearEmpresatype>>;
  crearEmpresa: FormCrearEmpresatype;
}) => {
  const [registroFinanciero, setRegistroFinanciero] = useState<string>('Libro de caja.');
  const [montoLibroCaja, setMontoLibroCaja] = useState<number | string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('');

  const handleClick = (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const name = e.currentTarget.name;
    setCrearEmpresa((prevState) => ({
      ...prevState,
      section5: {
        ...prevState.section5,
        tipo_contabilidad: name,
      },
    }));
  };

  const handleCheckboxChange = (value: string) => {
    setCrearEmpresa((prevState) => ({
      ...prevState,
      section5: {
        ...prevState.section5,
        opciones_regimen: value,
      },
    }));
  };

  const handleRegistroFinanciero = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;

    setCrearEmpresa((prevState) => ({
      ...prevState,
      section5: {
        ...prevState.section5,
        [name]: checked,
      },
    }));
  };

  const handleMontoLibroCaja = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value))) setMontoLibroCaja(Number(value));
  };

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
      <div id="Opciones para el régimen tributario." className="flex flex-col gap-y-2">
        <p className="font-ember font-normal text-[14px] text-custom-negro-1">Opciones para el régimen tributario.</p>
        <div>
          {data.typeRegimenFiscal.map((item) => (
            <div key={item.id} className="flex items-center gap-x-3">
              <input
                type="checkbox"
                name={item.name}
                checked={crearEmpresa.section5.opciones_regimen === item.name}
                onChange={() => handleCheckboxChange(item.name)}
              />
              <label className="font-ember font-normal text-[14px] text-custom-negro-1 ">{item.name}</label>
            </div>
          ))}
        </div>
      </div>
      <div id="Tipo de contabilidad." className="flex flex-col gap-y-2">
        <p className="font-ember font-normal text-[14px] text-custom-negro-1">Tipo de contabilidad.</p>
        <div className="flex gap-x-7">
          {data.typeContabilidad.map((item) => (
            <div key={item.id}>
              <button
                name={item.type}
                onClick={handleClick}
                className={`flex items-center gap-x-3 border-[1px]  w-[260px] h-[62px] px-4 ${
                  crearEmpresa.section5.tipo_contabilidad === item.type
                    ? 'border-custom-azul-3 bg-[#f1faff]'
                    : 'border-custom-gris-2'
                }`}>
                <input
                  type="radio"
                  checked={crearEmpresa.section5.tipo_contabilidad === item.type}
                  readOnly
                  className="mr-2"
                />
                <label className="font-ember font-normal text-[14px] cursor-pointer">{item.name}</label>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div id="Registro financiero.">
        <div className="flex items-end gap-x-8">
          <div className="flex flex-col gap-y-2">
            <p className="font-ember font-normal text-[14px] text-custom-negro-1">Registro financiero.</p>
            <div>
              {data.registroFinanciero.map((item) => (
                <div key={item.id} className="flex gap-x-3">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    name={item.type}
                    checked={Boolean(crearEmpresa.section5[item.type as keyof typeof crearEmpresa.section5])}
                    onChange={(e) => handleRegistroFinanciero(e)}
                  />
                  <label className="font-ember font-normal text-[14px] text-custom-negro-1">{item.name}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-end gap-x-3">
            <label className="font-ember font-normal text-[14px] text-custom-negro-1">Monto apertura libro caja.</label>
            <input
              type="number"
              value={montoLibroCaja}
              onChange={(e) => handleMontoLibroCaja(e)}
              className="h-[25px] w-[100px] border-[1px] border-custom-gris-2"
            />
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
                  {data.currencies.map((currency) => (
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
  );
};

export function Form({ infoEmpresa }: { infoEmpresa: Options }) {
  const [crearEmpresa, setCrearEmpresa] = useState<FormCrearEmpresatype>({
    section1: {
      Comuna: '',
      Correo_electronico: '',
      Dirección: '',
      Empresa: '',
      Giro: '',
      Inicio_de_actividades: '',
      Representante_legal: '',
      RUT: '',
      Rut_representante: '',
      Tipo_Empresa: '',
    },
    section2: {
      Nombre: '',
      RUT: '',
    },
    section3: {
      usuarios_del_sistema: [],
    },
    section4: {
      fecha: 2024,
    },
    section5: {
      Libro_de_caja: false,
      Libro_de_ingresos_y_egresos: false,
      monto_apertura_libro_caja: {
        moneda: '',
        monto: 0,
      },
      opciones_regimen: 'Régimen 14A semi integrado',
      tipo_contabilidad: 'contabilidad_completa',
    },
  });
  console.log(crearEmpresa);
  return (
    <div>
      <form className="flex flex-col gap-y-8" action="">
        {infoEmpresa.section === 'crear_empresa' && (
          <FormCrearempresa
            data={infoEmpresa.infoEmpresa as CrearEmpresa[]}
            setCrearEmpresa={setCrearEmpresa}
            crearEmpresa={crearEmpresa}
          />
        )}
        {infoEmpresa.section === 'datos_contador' && (
          <FormDatosContador
            data={infoEmpresa.infoEmpresa as CrearEmpresa[]}
            setCrearEmpresa={setCrearEmpresa}
            crearEmpresa={crearEmpresa}
          />
        )}
        {infoEmpresa.section === 'socio_info' && 
        <FormInfoSocio data={infoEmpresa.infoEmpresa as CrearEmpresa[]} 
        />}
        {infoEmpresa.section === 'usuario_del_sistema' && (
          <FormUsuarioSistema
            data={infoEmpresa.infoEmpresa as CrearEmpresa[]}
            setCrearEmpresa={setCrearEmpresa}
            crearEmpresa={crearEmpresa}
          />
        )}
        {infoEmpresa.section === 'periodo_contable' && (
          <FormPeriodoContable data={infoEmpresa.infoEmpresa as PeriodoContable} setCrearEmpresa={setCrearEmpresa} />
        )}
        {infoEmpresa.section === 'regimen_tributario' && (
          <FormRegimenTributario
            data={infoEmpresa.infoEmpresa as RegimenTributario}
            setCrearEmpresa={setCrearEmpresa}
            crearEmpresa={crearEmpresa}
          />
        )}
      </form>
    </div>
  );
}