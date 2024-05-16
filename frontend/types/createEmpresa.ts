export interface InputData {
  id: string;
  textp: string;
  placeholder: string;
  name: string;
}

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

export interface Regimenfiscal {
  regimen1: string;
  option1: string;
  option2: string;
  option3: string;
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

export interface OpcionesTributarios {
  Regimen14asemiintegrado: boolean;
  Regimenpropyme14dn3: boolean;
  Regimepropyme14dn8: boolean;
}

export type Options = TypeCrearempresa;

export interface CompanyDataProps {
  title: string;
  data: Options;
}
