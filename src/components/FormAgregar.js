import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Loading} from './Loading'
import { crearUsuarioAction } from "../actions/usuariosAcitons";

export const FormAgregar = () => {
  //state
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  });

  
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const cargando = useSelector((state) => state.usuarios.loading);
  const error = useSelector((state) => state.usuarios.error);

  const agregarUsuario = (nuevoUsuario) =>dispatch(crearUsuarioAction(nuevoUsuario));

  const { name, email, gender, status } = user;

  const submitNuevoUsuario = (e) => {
    e.preventDefault();

    //validar
    if (name.trim() === "" || email.trim() === "" || gender.trim() === "" || status.trim() === ""
    ) {
      return;
    }
    
    agregarUsuario(user);
   
  };

  if(cargando){
    return(
      <>
       <Loading description="Agregando usuario"/>
      </>
    )
  }

  return (
    <>
      
      <h2>Agregar Usuario</h2>
      <form  className="form" onSubmit={submitNuevoUsuario}>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={handleChange} />
        <label>Gender</label>
        <input type="text" name="gender" value={gender} onChange={handleChange} />

        <label>Status</label>
        <input type="text" name="status" value={status} onChange={handleChange} />

        <button type="submit" className="btn-form">AGREGAR USUARIO</button>
      </form>


    </>
  );


};
