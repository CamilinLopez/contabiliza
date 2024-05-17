import { TypeCrearempresa } from '@/types/createEmpresa';

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
      placeholder: 'ejempplo, Calle del Horizonte Azul',
      name: 'direccion',
    },
    {
      id: '53697514l',
      text: 'Comuna',
      placeholder: 'ejemplo, Villamarina',
      name: 'comuna',
    },
    {
      id: '57936475d',
      text: 'Representante legal',
      placeholder: 'Lucía Elena Rodríguez Martínez',
      name: 'Representante legal',
    },
    {
      id: '12697536d',
      text: 'Rut representante',
      placeholder: 'ejemplo, 96358966-1',
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
      placeholder: 'ejemplo, Santiago Álvarez Pérez',
      text: 'Nombre',
    },
    {
      id: 'lprnbgaq6',
      name: 'RUT',
      placeholder: 'ejemplo, 33333333-8',
      text: 'RUT',
    },
  ],
};

export const usuarioSistema: TypeCrearempresa = {
  section: 'usuario_del_sistema',
  infoEmpresa: [
    {
      id: 'portjhad4',
      name: 'Correo',
      placeholder: 'arturo@gmail.com',
      text: 'Correo',
    },
    {
      id: 'prñamvge2',
      name: 'Nombre',
      placeholder: 'ejemplo, Arturo',
      text: 'Nombre',
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
    typeContabilidad: {
      type1: 'Contabilidad completa',
      type2: 'Contabilidad simplificada',
    },
    typeRegimenFiscal: [
      {
        id: '12597635d',
        name: 'Régimen 14A semiintegrado',
      },
      {
        id: '46698736ñ',
        name: 'Régimen Propyme 14DN°3',
      },
      {
        id: '785436985l',
        name: 'Régimen Propyme 14DN°8',
      },
    ],
  },
};
