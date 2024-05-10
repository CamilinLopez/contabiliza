import React from 'react';
import { CompanyData, MainTitle } from './fracments';
import { Form } from '../../../components/consola/formularios/formularioEmpresa';

export default function CrearEmpresa() {
  return (
    <div className="p-8">
      <div className="w-8/12 flex flex-col gap-y-5">
        <MainTitle />
        <CompanyData componente={Form} title="Datos de la empresa" />
        <CompanyData componente={Form} title="Datos del contador" />
      </div>
    </div>
  );
}
