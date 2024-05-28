'use client';

import { useState } from 'react';
import { CompanyDataProps } from '@/types/createEmpresa';
import { Form } from '@/components/consola/formularios/crear_empresa/formularioEmpresa';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducer';
import {
  datosContador,
  datosEmpresa,
  usuariosSistema,
  periodoContable,
  régimenTributario,
} from '@/types/formCrearEmpresa';
const styleH1 = 'font-ember font-normal text-[14px]';

export const MainTitle = () => (
  <div className="flex flex-col gap-y-1">
    <h1 className="font-ember font-normal text-[28px] text-custom-negro-2">Crear empresa</h1>
    <p className="font-ember font-medium text-[14px] text-custom-gris-2">
      En Contabiliza, entendemos que el inicio de toda contabilidad es la creación de empresa. Simplificamos este.
      Proceso y te acompañamos en cada paso hacia una gestión financiera exitosa.
    </p>
  </div>
);

export const CompanyData: React.FC<CompanyDataProps> = ({ title, data }) => {
  const [hidden, setHidden] = useState<boolean>(false);

  return (
    <div className="w-auto h-auto shadow-thin-black ">
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

          <h2 className="font-ember font-semibold text-[18px] text-custom-negro-2">{title}</h2>
        </div>
      </div>
      <div className={`bg-white p-5 w-full ${hidden && 'hidden'} `}>
        <Form infoEmpresa={data} />
      </div>
    </div>
  );
};

const Sections1and2 = ({ section }: { section: datosEmpresa | datosContador }) => {
  return (
    <div>
      {section.sectionName !== 'Usuarios del sistema' && section.sectionName !== 'Régimen tributario' && (
        <div>
          <h1 className={`${styleH1}`}>{section.sectionName}</h1>
          {Object.entries(section).map(
            ([key, value]) =>
              key !== 'sectionName' && (
                <div key={key} className="flex items-center gap-x-1">
                  <p className="font-ember font-normal text-[12px] text-custom-gris-2">{key}:</p>
                  <p className="font-ember font-medium text-[12px] text-custom-gris-2">{value}</p>
                </div>
              ),
          )}
        </div>
      )}
    </div>
  );
};

const Section3 = ({ section }: { section: usuariosSistema }) => {
  return (
    <div>
      <h1 className={`${styleH1}`}>{section.sectionName}</h1>
      {section.usuarios_del_sistema.map((item) => (
        <div className="flex gap-x-7" key={item.id}>
          <p className="font-ember font-medium text-[12px] text-custom-gris-2">{item.Nombre}</p>
          <p className="font-ember font-medium text-[12px] text-custom-gris-2">{item.Correo}</p>
        </div>
      ))}
    </div>
  );
};

const Section4 = ({ section }: { section: periodoContable }) => {
  return (
    <div>
      <h1 className={`${styleH1}`}>{section.sectionName}</h1>
      <div className="flex gap-x-2">
        <p className="font-ember font-medium text-[12px] text-custom-gris-2">Año:</p>
        <p className="font-ember font-medium text-[12px] text-custom-gris-2">{section.fecha}</p>
      </div>
    </div>
  );
};

const Section5 = ({ section }: { section: régimenTributario }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h1 className={`${styleH1}`}>{section.sectionName}</h1>
      <div className="flex gap-x-2">
        <p className="font-ember font-medium text-[12px] text-custom-gris-2">Régimen tributario:</p>
        <p className="font-ember font-medium text-[12px] text-custom-gris-2">
          {(section.section1.Régimen_14A_semi_integrado === true && '14A semi integrado') ||
            (section.section1.Régimen_Propyme_14DN3 === true && 'Propyme 14DN°3') ||
            (section.section1.Régimen_Propyme_14DN8 === true && 'Propyme 14DN°8')}
        </p>
      </div>
      <div className="flex gap-x-2">
        <p className="font-ember font-medium text-[12px] text-custom-gris-2">Tipo contabilidad:</p>
        <p className="font-ember font-medium text-[12px] text-custom-gris-2">
          {(section.section2.Contabilidad_completa === true && 'Contabilidad completa') ||
            (section.section2.Contabilidad_simplificada === true && 'Contabilidad simplificada')}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="font-ember font-medium text-[12px] text-custom-gris-2">Registro financiero:</p>
        <div className="mx-5">
          <p className="font-ember font-medium text-[12px] text-custom-gris-2">
            {section.section3.Libro_de_caja === true && '*Libro de caja'}
          </p>
          <p className="font-ember font-medium text-[12px] text-custom-gris-2">
            {section.section3.Libro_de_ingresos_y_egresos === true && '*Libro de ingresos y egresos'}
          </p>
        </div>
      </div>
      <div className="flex gap-x-2">
        <p className="font-ember font-medium text-[12px] text-custom-gris-2">Monto apertura libro caja:</p>
        <div className="flex">
          <p className="font-ember font-medium text-[12px] text-custom-gris-2">
            {section.section3.Monto_apertura_libro_caja.monto}
          </p>
          <p className="font-ember font-medium text-[12px] text-custom-gris-2">
            {section.section3.Monto_apertura_libro_caja.moneda}
          </p>
        </div>
      </div>
    </div>
  );
};

export const ResumenMenu = () => {
  const { section1, section2, section3, section4, section5 } = useSelector(
    (state: RootState) => state.formCrearEmpresa,
  );

  return (
    <div className="h-[300px] overflow-y-auto">
      <div className="flex flex-col gap-y-4">
        <Sections1and2 section={section1} />
        <Sections1and2 section={section2} />
        <Section3 section={section3} />
        <Section4 section={section4} />
        <Section5 section={section5} />
      </div>
    </div>
  );
};
