export const crearEmpresaInitialState = {
  id: '',
  section1: {
    sectionName: 'Datos de la empresa',
    Empresa: '',
    RUT_empresa: '',
    Giro: '',
    Dirección: '',
    Comuna: '',
    Representante_legal: '',
    Rut_representante: '',
    Tipo_Empresa: '',
    Inicio_de_actividades: '',
    Correo_electronico: '',
  },
  section2: {
    sectionName: 'Datos del contador',
    Nombre: '',
    RUT: '',
  },
  section3: {
    sectionName: 'Usuarios del sistema',
    usuarios_del_sistema: [],
  },
  section4: {
    sectionName: 'Periodo contable',
    fecha: 2024,
  },
  section5: {
    sectionName: 'Régimen tributario',
    section1: {
      Régimen_14A_semi_integrado: true,
      Régimen_Propyme_14DN3: false,
      Régimen_Propyme_14DN8: false,
    },
    section2: {
      Contabilidad_completa: true,
      Contabilidad_simplificada: false,
    },
    section3: {
      Libro_de_caja: true,
      Libro_de_ingresos_y_egresos: false,
      Monto_apertura_libro_caja: {
        moneda: '',
        monto: '',
      },
    },
  },
};
