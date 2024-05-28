import { crearEmpresaInitialState } from '@/initialState';
import { FormCrearEmpresatype } from '@/types/formCrearEmpresa';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: FormCrearEmpresatype = crearEmpresaInitialState;

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
