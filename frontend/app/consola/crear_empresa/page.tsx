import React from 'react';
import { CompanyData, MainTitle } from '../../../components/consola/formularios/fragments';
import {
  crearEmpresa,
  datosContador,
  usuarioSistema,
  periodoContable,
  regimenTributario,
  infoSocio
} from '@/components/consola/formularios/objetsData';

export default function CrearEmpresa() {
  return (
    <div className="p-8">
      <div className="w-8/12 flex flex-col gap-y-5">
        <MainTitle />
        <CompanyData title="Datos de la empresa" data={crearEmpresa} />
        <CompanyData title="Datos del contador" data={datosContador} />
        <CompanyData title="Usuarios del sistema - Opcional" data={usuarioSistema} />
        <CompanyData title="Periodo contable" data={periodoContable} />
        <CompanyData title="Régimen tributario" data={regimenTributario} />
        <CompanyData title="Datos del socio/accionista" data={infoSocio} />
      </div>
    </div>
  );
}