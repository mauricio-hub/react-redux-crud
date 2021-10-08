import {
  AGREGAR_USUARIO,
  AGREGAR_USUARIO_EXITO,
  AGREGAR_USUARIO_ERROR,
} from "../types";
import axios from "axios";
import {url , key} from '../constantes/constantes'
import Swal from "sweetalert2";
//creando usuario

export function crearUsuarioAction(usuario) {
  return async (dispatch) => {
    dispatch(agregarUsuario());
   
    try {
      //insertar usuario en la api
      await axios.post(`${url}?access-token=${key}`,usuario);
      //agregar usuario al state
      dispatch(agregarUsuarioExito(usuario));

      Swal.fire(
        "Correcto",
       "El usuario se agrego correctamente", 
       "success");
   
    } catch (error) {
      console.log(error);
      dispatch(agregarUsuarioError(true));
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Intenta de Nuevo",
      });
    }
  };
}

const agregarUsuario = () => ({
  type: AGREGAR_USUARIO,
  payload: true,
});

const agregarUsuarioExito = (usuario) => ({
  type: AGREGAR_USUARIO_EXITO,
  payload: usuario,
});

const agregarUsuarioError = (estado) => ({
  type: AGREGAR_USUARIO_ERROR,
  payload: estado,
});
