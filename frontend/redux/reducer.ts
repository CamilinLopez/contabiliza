import { combineReducers } from 'redux';
import counterReducer from './slice/slice';
import formCrearEmpresaReducer from './slice/formCrearEmpresa';
// import { counterReducer, formCrearEmpresaReducer } from './slice';
// import {formCrearEmpresaReducer} from "./slice/formCrearEmpresa"

const rootReducer = combineReducers({
  counter: counterReducer,
  formCrearEmpresa: formCrearEmpresaReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export { rootReducer };
