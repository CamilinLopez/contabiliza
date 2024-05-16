import React from 'react';
import { CompanyData, MainTitle } from './fracments';
import {
  crearEmpresa,
  datosContador,
  usuarioSistema,
  periodoContable,
  regimenTributario,
} from '@/components/consola/formularios/objetsData';

export default function CrearEmpresa() {
  return (
    <div className="p-8">
      <div className="w-8/12 flex flex-col gap-y-5">
        <MainTitle />
        <CompanyData title="Datos de la empresa" data={crearEmpresa} />
        <CompanyData title="Datos del contador" data={datosContador} />
        <CompanyData title="Usuario del sistema" data={usuarioSistema} />
        <CompanyData title="Periodo contable" data={periodoContable} />
        <CompanyData title="Regimen tributario" data={regimenTributario} />
      </div>
    </div>
  );
}
