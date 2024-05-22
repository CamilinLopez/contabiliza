export interface datosEmpresa {
  Empresa: string;
  RUT: number | string;
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
  Nombre: string;
  RUT: number | string;
}

export interface dataUsuaruosSistema {
  id: string;
  Correo: string;
  Nombre: string;
}

export interface usuariosSistema {
  usuarios_del_sistema: dataUsuaruosSistema[];
}

export interface periodoContable {
  fecha: number;
}

interface data_monto_apertura_libro_caja {
  monto: number;
  moneda: string;
}

export interface régimenTributario {
  opciones_regimen: string;
  tipo_contabilidad: string;
  Libro_de_caja: boolean ;
  Libro_de_ingresos_y_egresos: boolean ;
  monto_apertura_libro_caja: data_monto_apertura_libro_caja;
}

export interface FormCrearEmpresatype {
  section1: datosEmpresa;
  section2: datosContador;
  section3: usuariosSistema;
  section4: periodoContable;
  section5: régimenTributario;
}
