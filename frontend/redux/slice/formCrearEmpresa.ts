import { FormCrearEmpresatype } from '@/types/formCrearEmpresa';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: FormCrearEmpresatype = {
  id: '',
  section1: {
    sectionName: 'Datos de la empresa',
    Empresa: '',
    RUT_empresa: '',
    Giro: '',
    Dirección: '',
    Comuna: '',
    Representante_legal: '',
    Rut_representante: '',
    Tipo_Empresa: '',
    Inicio_de_actividades: '',
    Correo_electronico: '',
  },
  section2: {
    sectionName: 'Datos del contador',
    Nombre: '',
    RUT: '',
  },
  section3: {
    sectionName: 'Usuarios del sistema',
    usuarios_del_sistema: [],
  },
  section4: {
    sectionName: 'Periodo contable',
    fecha: 0,
  },
  section5: {
    sectionName: 'Régimen tributario',
    section1: {
      Régimen_14A_semi_integrado: true,
      Régimen_Propyme_14DN3: false,
      Régimen_Propyme_14DN8: false,
    },
    section2: {
      Contabilidad_completa: true,
      Contabilidad_simplificada: false,
    },
    section3: {
      Libro_de_caja: false,
      Libro_de_ingresos_y_egresos: false,
      Monto_apertura_libro_caja: {
        moneda: 'COP',
        monto: '',
      },
    },
  },
};

const formCrearEmpresaSlice = createSlice({
  name: 'formCrearEmpresa',
  initialState,
  reducers: {
    updateSection1(state, action: PayloadAction<typeof initialState.section1>) {
      state.section1 = action.payload;
    },
    updateSection2(state, action: PayloadAction<typeof initialState.section2>) {
      state.section2 = action.payload;
    },
    updateSection3(state, action: PayloadAction<typeof initialState.section3>) {
      state.section3 = action.payload;
    },
    updateSection4(state, action: PayloadAction<typeof initialState.section4>) {
      state.section4 = action.payload;
    },
    updateSection5(state, action: PayloadAction<typeof initialState.section5>) {
      state.section5 = action.payload;
    },
    updateAll(state, action: PayloadAction<typeof initialState>) {
      return action.payload;
    },
  },
});

export const { updateSection1, updateSection2, updateSection3, updateSection4, updateSection5, updateAll } =
  formCrearEmpresaSlice.actions;
export default formCrearEmpresaSlice.reducer;
