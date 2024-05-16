import { RegimenTributario, TypeCrearempresa } from '@/types/createEmpresa';

export const crearEmpresa: TypeCrearempresa = {
  section: 'crear_empresa',
  infoEmpresa: [
    {
      id: '14596347q',
      text: 'Empresa',
      placeholder: 'por ejemplo, Mi empresa',
      name: 'empresa',
    },
    {
      id: '15793576i',
      text: 'RUT',
      placeholder: 'ejemplo, 74693157-5',
      name: 'rut',
    },
    {
      id: '14735973d',
      text: 'Giro',
      placeholder: 'ejemplo, Elaboracion y venta de productos carnicos',
      name: 'giro',
    },
    {
      id: '53697521p',
      text: 'Direccion',
      placeholder: 'ejempplo, Calle yungay 6026',
      name: 'direccion',
    },
    {
      id: '53697514l',
      text: 'Comuna',
      placeholder: 'ejemplo, Peñalolen',
      name: 'comina',
    },
    {
      id: '57936475d',
      text: 'Representante legal',
      placeholder: 'Brian Andres Ceballos Ramires',
      name: 'Representante legal',
    },
    {
      id: '12697536d',
      text: 'Rut representante',
      placeholder: 'ejemplo, 17104120-1',
      name: 'rut representante',
    },
    {
      id: '46971365f',
      text: 'Tipo Empresa',
      placeholder: 'Sociedad por acciones',
      name: 'tipo empresa',
    },
    {
      id: '15974653k',
      text: 'Inicio de actividades',
      placeholder: 'ejemplo, 23-02-2022',
      name: 'inicio de actividades',
    },
    {
      id: '14732595g',
      text: 'Correo electronico',
      placeholder: 'contacto@gmail.com',
      name: 'correo electronico',
    },
  ],
};

export const datosContador: TypeCrearempresa = {
  section: 'datos_contador',
  infoEmpresa: [
    {
      id: 'ajwepgjs5',
      name: 'Nombre',
      placeholder: 'ejemplo, Alfredo Harid Lavados Gonzales',
      text: 'Nombre',
    },
    {
      id: 'lprnbgaq6',
      name: 'RUT',
      placeholder: 'ejemplo, 10521881-8',
      text: 'RUT',
    },
  ],
};

export const usuarioSistema: TypeCrearempresa = {
  section: 'usuario_del_sistema',
  infoEmpresa: [
    {
      id: 'portjhad4',
      name: 'Nombre',
      placeholder: 'ejemplo, Danilo Arenas Lemus',
      text: 'Nombre',
    },
    {
      id: 'prñamvge2',
      name: 'RUT',
      placeholder: 'ejemplo, 13030079-0',
      text: 'RUT',
    },
  ],
};

export const periodoContable: TypeCrearempresa = {
  section: 'periodo_contable',
  infoEmpresa: {
    id: '14896256d',
    text: 'al',
  },
};

export const regimenTributario: TypeCrearempresa = {
  section: 'regimen_tributario',
  infoEmpresa: {
    id: '14796547h',
    regimen2: 'Contabilidad completa',
    regimen1: {
      regimen1: 'Regimen fiscal',
      options: [
        { id: '12598765g', name: 'Regimen 14A semi integrado' },
        { id: '12598762f', name: 'Regimen Propyme 14DN°3' },
        { id: 'loputanh9', name: 'Regimen Propyme 14DN°8' },
      ],
    },
  },
};
