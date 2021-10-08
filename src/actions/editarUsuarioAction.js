import {
  OBTENER_USUARIO_EDITAR,
  USUARIO_EDITAR_EXITO,
  USUARIO_EDITAR_ERROR,
  COMENZAR_EDITAR_USUARIO,
} from "../types";
import axios from "axios";
import {url , key} from '../constantes/constantes'

export function obtenerUsuarioEditar(usuario){
  
    return (dispatch)=>{
        dispatch(obtenerUsuarioAction(usuario))
    }
}

const obtenerUsuarioAction=(usuario)=>({
    type:OBTENER_USUARIO_EDITAR,
    payload:usuario
})

export function editarUsuarioAction(usuario){
    return async (dispatch)=>{
        dispatch(editarUsuario())


        try {
          await axios.put(`${url}/${usuario.id}?access-token=${key}`,usuario);
            
          dispatch(usuarioEditadoExito(usuario))

        } catch (error) {
            console.log(error);
        }
       
    }
   
}

const editarUsuario= () =>({
    type:COMENZAR_EDITAR_USUARIO,

})

const usuarioEditadoExito = (usuario) =>({
    type:USUARIO_EDITAR_EXITO,
    payload:usuario
})

