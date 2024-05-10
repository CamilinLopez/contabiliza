'use client';

import { InputData } from '@/types/createEmpresa';

const infoEmpresa: InputData[] = [
  {
    id: '14596347q',
    textp: 'Empresa',
    placeholder: 'por ejemplo, Mi empresa',
    name: 'empresa',
  },
  {
    id: '15793576i',
    textp: 'RUT',
    placeholder: 'ejemplo, 74693157-5',
    name: 'rut',
  },
  {
    id: '14735973d',
    textp: 'Giro',
    placeholder: 'ejemplo, Elaboracion y venta de productos carnicos',
    name: 'giro',
  },
  {
    id: '53697521p',
    textp: 'Direccion',
    placeholder: 'ejempplo, Calle yungay 6026',
    name: 'direccion',
  },
  {
    id: '53697514l',
    textp: 'Comuna',
    placeholder: 'ejemplo, Peñalolen',
    name: 'comina',
  },
  {
    id: '57936475d',
    textp: 'Representante legal',
    placeholder: 'Brian Andres Ceballos Ramires',
    name: 'Representante legal',
  },
  {
    id: '12697536d',
    textp: 'Rut representante',
    placeholder: 'ejemplo, 17104120-1',
    name: 'rut representante',
  },
  {
    id: '46971365f',
    textp: 'Tipo Empresa',
    placeholder: 'Sociedad por acciones',
    name: 'tipo empresa',
  },
  {
    id: '15974653k',
    textp: 'Inicio de actividades',
    placeholder: 'ejemplo, 23-02-2022',
    name: 'inicio de actividades',
  },
  {
    id: '14732595g',
    textp: 'Correo electronico',
    placeholder: 'contacto@gmail.com',
    name: 'correo electronico',
  },
];

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

export function Form() {
  return (
    <div>
      <form className="flex flex-col gap-y-8" action="">
        <FormInput data={infoEmpresa} />
      </form>
    </div>
  );
}
