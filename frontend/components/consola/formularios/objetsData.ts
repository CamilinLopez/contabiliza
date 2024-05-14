import { InputData, PeriodoContable, RegimenTributario } from '@/types/createEmpresa';

export const infoEmpresa: InputData[] = [
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

export const infoContador: InputData[] = [
  {
    id: 'ajwepgjs5',
    name: 'Nombre',
    placeholder: 'ejemplo, Alfredo Harid Lavados Gonzales',
    textp: 'Nombre',
  },
  {
    id: 'lprnbgaq6',
    name: 'RUT',
    placeholder: 'ejemplo, 10521881-8',
    textp: 'RUT',
  },
];

export const infoUsuarioSistema: InputData[] = [
  {
    id: 'portjhad4',
    name: 'Nombre',
    placeholder: 'ejemplo, Danilo Arenas Lemus',
    textp: 'Nombre',
  },
  {
    id: 'prñamvge2',
    name: 'RUT',
    placeholder: 'ejemplo, 13030079-0',
    textp: 'RUT',
  },
];

export const infoPeriodoContable: PeriodoContable[] = [
  {
    id: '14896256d',
    text: 'al',
  },
];

export const infoRegimenTributario: RegimenTributario = {
  id: 'flñprtma5',
  contabilidad_completa: false,
  regimen_fiscal: {
    Regimen14asemiintegrado: false,
    Regimenpropyme14dn3: false,
    Regimepropyme14dn8: false,
  },
};
