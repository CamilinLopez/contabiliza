export interface datosEmpresa {
  sectionName: string;
  Empresa: string;
  RUT_empresa: number | string;
  Giro: string;
  Dirección: string;
  Comuna: string;
  Representante_legal: string;
  Rut_representante: number | string;
  Tipo_Empresa: string;
  Inicio_de_actividades: string;
  Correo_electronico: string;
}

export interface datosContador {
  sectionName: string;
  Nombre: string;
  RUT: number | string;
}

export interface dataUsuaruosSistema {
  id: string;
  Correo: string;
  Nombre: string;
}

export interface usuariosSistema {
  sectionName: string;
  usuarios_del_sistema: dataUsuaruosSistema[];
}

export interface periodoContable {
  sectionName: string;
  fecha: number;
}

interface data_monto_apertura_libro_caja {
  monto: number | string;
  moneda: string;
}

interface regimenTributarioType {
  Régimen_14A_semi_integrado: boolean;
  Régimen_Propyme_14DN3: boolean;
  Régimen_Propyme_14DN8: boolean;
}

interface tipoDeContabilidad {
  Contabilidad_completa: boolean;
  Contabilidad_simplificada: boolean;
}

interface registroFinanciero {
  Libro_de_caja: boolean;
  Libro_de_ingresos_y_egresos: boolean;
  Monto_apertura_libro_caja: data_monto_apertura_libro_caja;
}

export interface régimenTributario {
  sectionName: string;
  section1: regimenTributarioType;
  section2: tipoDeContabilidad;
  section3: registroFinanciero;
}

export interface FormCrearEmpresatype {
  id: string;
  section1: datosEmpresa;
  section2: datosContador;
  section3: usuariosSistema;
  section4: periodoContable;
  section5: régimenTributario;
}
