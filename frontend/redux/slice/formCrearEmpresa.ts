import { FormCrearEmpresatype } from '@/types/formCrearEmpresa';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: FormCrearEmpresatype = {
  section1: {
    Comuna: '',
    Correo_electronico: '',
    Dirección: '',
    Empresa: '',
    Giro: '',
    Inicio_de_actividades: '',
    Representante_legal: '',
    RUT: '',
    Rut_representante: '',
    Tipo_Empresa: '',
  },
  section2: {
    Nombre: '',
    RUT: '',
  },
  section3: {
    usuarios_del_sistema: [],
  },
  section4: {
    fecha: 0,
  },
  section5: {
    Libro_de_caja: false,
    Libro_de_ingresos_y_egresos: false,
    monto_apertura_libro_caja: {
      moneda: '',
      monto: 0,
    },
    opciones_regimen: '',
    tipo_contabilidad: '',
  },
};

const formCrearEmpresaSlice = createSlice({
  name: 'formCrearEmpresa',
  initialState,
  reducers: {
    updateSection1(state, action: PayloadAction<typeof initialState.section1>) {
      state.section1 = action.payload;
    },
    updateAll(state, action: PayloadAction<typeof initialState>) {
      return action.payload;
    },
  },
});

export const { updateSection1, updateAll } = formCrearEmpresaSlice.actions;
export default formCrearEmpresaSlice.reducer;
