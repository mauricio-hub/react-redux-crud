import {
  AGREGAR_USUARIO,
  AGREGAR_USUARIO_EXITO,
  AGREGAR_USUARIO_ERROR,
  INICIO_LISTAR_USUARIOS,
  LISTAR_USUARIOS_EXITO,
  LISTAR_USUARIOS_ERROR,
  OBTENER_USUARIO_ELIMINAR,
  USUARIO_ELIMINADO_EXITO,
  USUARIO_ELIMINADO_ERROR,
  OBTENER_USUARIO_EDITAR,
  USUARIO_EDITAR_EXITO,
  USUARIO_EDITAR_ERROR,
} from "../types";

const initialState = {
  usuarios: [],
  error: null,
  loading: false,
  usuarioEliminar:null,
  usuarioEditar:null
};

export default function (state = initialState, action) {
 
  switch (action.type) {
    case INICIO_LISTAR_USUARIOS:
    case AGREGAR_USUARIO:
      return {
        ...state,
        loading: action.payload,
      };
    case AGREGAR_USUARIO_EXITO:
      return {
        ...state,
        loading: false,
        usuarios: [...state.usuarios, action.payload]
      }
    case LISTAR_USUARIOS_ERROR:  
    case AGREGAR_USUARIO_ERROR:
    case USUARIO_ELIMINADO_ERROR: 
    case USUARIO_EDITAR_ERROR: 
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case LISTAR_USUARIOS_EXITO:
        return {
          ...state,
          loading:false,
          error:null,
          usuarios: action.payload
        }
      case OBTENER_USUARIO_ELIMINAR :
        return {
          ...state,
          usuarioEliminar:action.payload
        }
      case  USUARIO_ELIMINADO_EXITO :
        return {
          ...state,
          productos: state.usuarios.filter( item => item.id !== state.usuarioEliminar ),
          productoeliminar: null
           
        }
       case OBTENER_USUARIO_EDITAR:
         return{
           ...state,
           usuarioEditar:action.payload
         }
         case USUARIO_EDITAR_EXITO:
          return {
            ...state,
            usuarioEditar: null,
            usuarios: state.usuarios.map( user => 
                user.id === action.payload.id ? user = action.payload : user
            )
        }
    default:
      return state;
  }
}
