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
  type: string; /**/
}

export interface ContabilidadTypes {
  /* type1: string; */
  /* type2: string; */
  id: string;
  type: string;
  name: string;

}


export interface OptionsTerms {
  id: string;
  name: string;
  type: string;
}

export interface RegimenTributario {
  typeContabilidad: OptionsTerms[];
  typeRegimenFiscal: OptionsTerms[];
  registroFinanciero: OptionsTerms[];
  currencies: string[];
}

export interface InputData {
  id: string;
  textp: string;
  placeholder: string;
  name: string;
}

export type socioData = InputData

export interface TypeCrearempresa {
  section: string;
  infoEmpresa: CrearEmpresa[] | PeriodoContable | RegimenTributario | socioData;
}

export type Options = TypeCrearempresa;

export interface CompanyDataProps {
  title: string;
  data: Options;
}


