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

export interface TypeCrearempresa {
  section: string;
  infoEmpresa: CrearEmpresa[] | PeriodoContable | RegimenTributario;
}

export type Options = TypeCrearempresa;

export interface CompanyDataProps {
  title: string;
  data: Options;
}
