import React,{useState,useEffect}from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { editarUsuarioAction } from '../actions/editarUsuarioAction';
import { useHistory } from 'react-router-dom';
export const FormEditar = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    name: '',
    email: '',
    gender: '',
    status: '',
  });


    const editarUsuario = useSelector(state => state.usuarios.usuarioEditar)
   

     useEffect(() => {
        setUser(editarUsuario)
     }, [editarUsuario]) 
    
    //console.log('dede editar form ',editarUsuario)
     const {name,email,gender,status} = user


    const submitEditar = (e)=>{
      e.preventDefault();
      
      dispatch(editarUsuarioAction(user))

      history.push('/');
    }

    const onChangeForm = (e) => {
      setUser({
        ...user,
        [e.target.name] : e.target.value
      })
    };

    return (
        <>
       <h2>Editar Usuario</h2>
      <form className="form" onSubmit={submitEditar} >
      
        <label>Name</label>
        <input 
        type="text" 
        name="name" 
        value={name} 
        onChange={ onChangeForm } />
        <label>Email</label>
        <input 
        type="email" 
        name="email" 
        value={email} 
        onChange={ onChangeForm } />
        <label>Gender</label>
        <input 
        type="text" 
        name="gender" value={gender} 
        onChange={ onChangeForm } />

        <label>Status</label>
        <input 
        type="text" 
        name="status" 
        value={status} 
        onChange={ onChangeForm } />

        <button type="submit" className="btn-form">GUARDAR CAMBIOS</button>
      </form>

      
        </>
    )
}
