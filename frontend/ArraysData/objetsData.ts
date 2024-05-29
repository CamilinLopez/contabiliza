import { TypeCrearempresa } from '../types/createEmpresa';

export const crearEmpresa: TypeCrearempresa = {
  section: 'crear_empresa',
  infoEmpresa: [
    {
      id: '14596347q',
      text: 'Empresa',
      placeholder: 'por ejemplo, Mi empresa',
      name: 'Empresa',
    },
    {
      id: '15793576i',
      text: 'RUT empresa',
      placeholder: 'ejemplo, 74693157-5',
      name: 'RUT_empresa',
    },
    {
      id: '14735973d',
      text: 'Giro',
      placeholder: 'ejemplo, Elaboracion y venta de productos carnicos',
      name: 'Giro',
    },
    {
      id: '53697521p',
      text: 'Dirección',
      placeholder: 'ejempplo, Calle del Horizonte Azul',
      name: 'Dirección',
    },
    {
      id: '53697514l',
      text: 'Comuna',
      placeholder: 'ejemplo, Villamarina',
      name: 'Comuna',
    },
    {
      id: '57936475d',
      text: 'Representante legal',
      placeholder: 'Lucía Elena Rodríguez Martínez',
      name: 'Representante_legal',
    },
    {
      id: '12697536d',
      text: 'Rut representante',
      placeholder: 'ejemplo, 96358966-1',
      name: 'Rut_representante',
    },
    {
      id: '46971365f',
      text: 'Tipo Empresa',
      placeholder: 'Sociedad por acciones',
      name: 'Tipo_Empresa',
    },
    {
      id: '15974653k',
      text: 'Inicio de actividades',
      placeholder: 'ejemplo, 23-02-2022',
      name: 'Inicio_de_actividades',
    },
    {
      id: '14732595g',
      text: 'Correo electronico',
      placeholder: 'contacto@gmail.com',
      name: 'Correo_electronico',
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
    typeContabilidad: [
      {
        id: 'pñkjsnbg9',
        type: 'Contabilidad_completa',
        name: 'Contabilidad completa',
      },
      {
        id: 'pñlrtyuw7',
        type: 'Contabilidad_simplificada',
        name: 'Contabilidad simplificada',
      },
    ],

    typeRegimenFiscal: [
      {
        id: '12597635d',
        name: 'Régimen 14A semi integrado',
        type: 'Régimen_14A_semi_integrado',
      },
      {
        id: '46698736ñ',
        name: 'Régimen Propyme 14DN°3',
        type: 'Régimen_Propyme_14DN3',
      },
      {
        id: '785436985l',
        name: 'Régimen Propyme 14DN°8',
        type: 'Régimen_Propyme_14DN8',
      },
    ],
    registroFinanciero: [
      {
        id: 'polkfgtr8',
        name: 'Libro de caja.',
        type: 'Libro_de_caja',
      },
      {
        id: 'pñlfhrwq5',
        name: 'Libro de ingresos y egresos.',
        type: 'Libro_de_ingresos_y_egresos',
      },
    ],
    currencies: ['USD', 'COP', 'CLP', 'EUR'],
  },
};

export const sociosAccionistas: TypeCrearempresa = {
  section: 'socios/accionistas',
  infoEmpresa: [
    {
      id: 'lfrtpañj8',
      name: 'Nombre',
      placeholder: 'Carlos Arturo Ramirez Hernandez',
      text: 'Nombre',
    },
    {
      id: 'lprtlkad5',
      name: 'Rut',
      placeholder: '147896545-1',
      text: 'Rut',
    },
    {
      id: 'piekjaqg10',
      name: 'Participación',
      placeholder: '40.1111%',
      text: 'Participación',
    },
    {
      id: 'pleqfmca5',
      name: 'Acciones',
      placeholder: '400',
      text: 'Acciones',
    },
  ],
};
