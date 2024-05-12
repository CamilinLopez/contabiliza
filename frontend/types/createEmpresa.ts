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

export type Options = InputData[] | PeriodoContable[];

export interface CompanyDataProps {
  title: string;
  data: Options;
}
