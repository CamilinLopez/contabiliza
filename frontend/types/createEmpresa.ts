export interface InputData {
  id: string;
  textp: string;
  placeholder: string;
  name: string;
}
type DataType = string[];

interface FormProps {
  data: DataType;
}

export interface CompanyDataProps {
  title: string;
  data: InputData[];
}
