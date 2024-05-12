import React from 'react';
import { CompanyData, MainTitle } from './fracments';
import {
  infoEmpresa,
  infoContador,
  infoUsuarioSistema,
  infoPeriodoContable,
} from '@/components/consola/formularios/objetsData';

export default function CrearEmpresa() {
  return (
    <div className="p-8">
      <div className="w-8/12 flex flex-col gap-y-5">
        <MainTitle />
        <CompanyData title="Datos de la empresa" data={infoEmpresa} />
        <CompanyData title="Datos del contador" data={infoContador} />
        <CompanyData title="Usuario del sistema" data={infoUsuarioSistema} />
        <CompanyData title="Periodo contable" data={infoPeriodoContable} />
      </div>
    </div>
  );
}
