import {
  INICIO_LISTAR_USUARIOS,
  LISTAR_USUARIOS_EXITO,
  LISTAR_USUARIOS_ERROR,
 
} from "../types";
import axios from "axios";

import {url , key} from '../constantes/constantes'

export function obtenerUsuariosAction() {
  return async (dispatch) => {
    dispatch(getListaUsuarios());

    try {
      const res = await axios.get(`${url}?access-token=${key}`); 
      
      dispatch(listadoUsuariosCorrecto(res.data));
    } catch (error) {
      dispatch(listarUsariosError());
    }
  };
}

const getListaUsuarios = () => ({
  type: INICIO_LISTAR_USUARIOS,
  payload: true,
});

const listadoUsuariosCorrecto = (usuarios) => ({
  type: LISTAR_USUARIOS_EXITO,
  payload: usuarios,
});

const listarUsariosError = () => ({
  type: LISTAR_USUARIOS_ERROR,
  payload: true,
});
