import React from 'react';
import { CompanyData, MainTitle } from '../../../components/consola/formularios/crear_empresa/fracments';
import {
  crearEmpresa,
  datosContador,
  usuarioSistema,
  periodoContable,
  regimenTributario,
  sociosAccionistas,
} from '@/ArraysData/objetsData';
import Resumen, { CrearEmpresaSection } from '@/components/consola/formularios/crear_empresa/resumen';

export default function CrearEmpresa() {
  return (
    <div id="create company forms" className="flex gap-x-8 py-5">
      <div id="sections forms" className="w-8/12 flex flex-col gap-y-5">
        <MainTitle />
        <CompanyData title="Datos de la empresa" data={crearEmpresa} />
        <CompanyData title="Datos del contador" data={datosContador} />
        <CompanyData title="Usuarios del sistema - opcional" data={usuarioSistema} />
        <CompanyData title="Periodo contable" data={periodoContable} />
        <CompanyData title="Régimen tributario" data={regimenTributario} />
        <CompanyData title="Socios/accionistas - opcional" data={sociosAccionistas} />
      </div>
      <div id="resumen" className="bg-white w-4/12 sticky top-2 h-full z-0 flex flex-col gap-y-1">
        <Resumen />
        <CrearEmpresaSection />
      </div>
    </div>
  );
}
