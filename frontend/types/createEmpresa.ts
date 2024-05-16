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
}

export interface Regimenfiscal {
  regimen1: string;
  options: Optionsfiscal[];
}

export interface RegimenTributario {
  id: string;
  regimen1: Regimenfiscal;
  regimen2: string;
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
