export interface InputData {
  id: string;
  textp: string;
  placeholder: string;
  name: string;
}

export interface PeriodoContable {
  id: string;
  text: string;
}

export interface OpcionesTributarios {
  Regimen14asemiintegrado: boolean;
  Regimenpropyme14dn3: boolean;
  Regimepropyme14dn8: boolean;
}

export interface RegimenTributario {
  id: string;
  regimen_fiscal: OpcionesTributarios;
  contabilidad_completa: boolean;
}

export type Options = InputData[] | PeriodoContable[] | RegimenTributario;

export interface CompanyDataProps {
  title: string;
  data: Options;
}
