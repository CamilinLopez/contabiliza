import { Form } from './formulario';

export const MainTitle = () => (
  <div className="flex flex-col gap-y-1">
    <h1 className="font-ember font-normal text-[28px] text-custom-negro-2">Crear empresa</h1>
    <p className="font-ember font-medium text-[14px] text-custom-gris-2">
      En Contaviliza, entendemos que el inicio de toda contabilidad es la creación de empresa. Simplificamos este
      proceso y te acompañamos en cada paso hacia una gestión financiera exitosa.
    </p>
  </div>
);

export const CompanyData = () => (
  <div className="w-auto h-auto shadow-thin-black ">
    <div className="border-b-[1px] border-slate-300 bg-custom-blanco-2">
      <div className="h-[65px] w-auto flex items-center p-5">
        <h2 className="font-ember font-semibold text-[18px] text-custom-negro-2">Datos de la empresa</h2>
      </div>
    </div>
    <div className="bg-white p-5 w-full">
      <Form />
    </div>
  </div>
);
