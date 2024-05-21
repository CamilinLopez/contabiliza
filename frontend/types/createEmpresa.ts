export interface CrearEmpresa {
  id: string;
  text: string;
  placeholder: string;
  name: string;
}

export interface PeriodoContable {
  id: string;
  text: string;
}

export interface Optionsfiscal {
  id: string;
  name: string;
  type: string;
}

export interface ContabilidadTypes {
  id: string;
  type: string;
  name: string;
}

export interface RegimenTributario {
  typeContabilidad: ContabilidadTypes[];
  typeRegimenFiscal: Optionsfiscal[];
}

export interface TypeCrearempresa {
  section: string;
  infoEmpresa: CrearEmpresa[] | PeriodoContable | RegimenTributario;
}

export type Options = TypeCrearempresa;

export interface CompanyDataProps {
  title: string;
  data: Options;
}
