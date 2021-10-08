import {
  OBTENER_USUARIO_ELIMINAR,
  USUARIO_ELIMINADO_EXITO,
  USUARIO_ELIMINADO_ERROR,
} from "../types";
import {url , key} from '../constantes/constantes'
import axios from "axios";
import Swal from "sweetalert2";


export function borrarUsuarioAction(id) {
  return async (dispatch) => {
    dispatch(obtenerUsuarioEliminar(id));

    try {
      await axios.delete(`${url}/${id}?access-token=${key}`);
      
      Swal.fire(
        'Deleted!',
        'Usuario eliminado correctamete',
        'success'
      )

      dispatch(eliminarUsuarioExito());
    } catch (error) {
       
        dispatch(eliminarUsuarioError())
    }
  };
}

const obtenerUsuarioEliminar = (id) => ({
  type: OBTENER_USUARIO_ELIMINAR,
  payload: id,
});

const eliminarUsuarioExito = () => ({
  type: USUARIO_ELIMINADO_EXITO
})

const eliminarUsuarioError = () => ({
  type: USUARIO_ELIMINADO_ERROR,
  payload: true
})


