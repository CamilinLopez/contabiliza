import { TypeCrearempresa } from '@/types/createEmpresa';

export const crearEmpresa: TypeCrearempresa = {
  section: 'crear_empresa',
  infoEmpresa: [
    {
      id: '14596347q',
      text: 'Empresa',
      placeholder: 'Nombre de la Empresa',
      name: 'Empresa',
    },
    {
      id: '15793576i',
      text: 'RUT',
      placeholder: 'RUT, Ej: 11111111-1',
      name: 'RUT',
    },
    {
      id: '14735973d',
      text: 'Giro',
      placeholder: 'Ej: Elaboracion y venta de productos carnicos',
      name: 'Giro',
    },
    {
      id: '53697521p',
      text: 'Dirección',
      placeholder: 'Ej: Calle Yungay 6026',
      name: 'Dirección',
    },
    {
      id: '53697514l',
      text: 'Comuna',
      placeholder: 'Ej: Peñalolen',
      name: 'Comuna',
    },
    {
      id: '57936475d',
      text: 'Representante legal',
      placeholder: 'Nombre de Representante',
      name: 'Representante_legal',
    },
    {
      id: '12697536d',
      text: 'Rut representante',
      placeholder: 'RUT Representante, Ej: 11111111-1',
      name: 'Rut_representante',
    },
    {
      id: '46971365f',
      text: 'Tipo Empresa',
      placeholder: 'Ej: Sociedad por acciones',
      name: 'Tipo_Empresa',
    },
    {
      id: '15974653k',
      text: 'Inicio de actividades',
      placeholder: '',
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
      placeholder: 'Nombre y Apellido del Contador',
      text: 'Nombre',
    },
    {
      id: 'lprnbgaq6',
      name: 'RUT',
      placeholder: 'RUT del contador, Ej: 11111111-1',
      text: 'RUT',
    },
  ],
};

export const usuarioSistema: TypeCrearempresa = {
  section: 'usuario_del_sistema',
  infoEmpresa: [
    {
      id: 'prñamvge2',
      name: 'Nombre',
      placeholder: 'Nombre de usuario',
      text: 'Nombre',
    },
    {
      id: 'portjhad4',
      name: 'Correo',
      placeholder: 'usuario@gmail.com',
      text: 'Correo',
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
        type: 'contabilidad_completa',
        name: 'Contabilidad completa',
      },
      {
        id: 'pñlrtyuw7',
        type: 'contabilidad_simplificada',
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

export const infoSocio: TypeCrearempresa = {
  section: 'socio_info',
  infoEmpresa: [
    {
      id: 'ajwepgjs5',
      name: 'Nombre',
      placeholder: 'Nombre y Apellido del Socio/Accionista',
      text: 'Nombre',
    },
    {
      id: 'lprnbgaq6',
      name: 'RUT',
      placeholder: 'RUT del Socio/Accionista',
      text: 'RUT',
    },
    {
      id: 'lprnbgaq7',
      name: 'Porcentaje de Participacion',
      placeholder: 'Ingrese el %',
      text: 'Porcentaje de Participacion',
    },
    {
      id: 'lprnbgaq8',
      name: 'Cantidad de acciones',
      placeholder: 'Ingrese la cantidad de acciones',
      text: 'Cantidad de acciones',
    },
  ],
};
