import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Link,useHistory} from 'react-router-dom';
import {Loading} from './Loading';
import {obtenerUsuariosAction} from '../actions/listaUsuariosAction';
import { borrarUsuarioAction} from '../actions/eliminarUsuarioAction';
import {obtenerUsuarioEditar} from '../actions/editarUsuarioAction';
import { Table, Space } from 'antd';
import Swal from 'sweetalert2';
const { Column  } = Table;
export const Listado = () => {

    const dispatch = useDispatch();
    const history = useHistory();
     const cargando = useSelector(state  => state.usuarios.loading)

     const listadoUsuarios = useSelector(state => state.usuarios.usuarios)
     

    //confirmar eliminar
    const confirmarEliminarUsuario = id =>{

      Swal.fire({
          title: 'Estas seguro?',
          text: "Estas Seguro de elimianar este usuario",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Eliminar!'
        }).then((result) => {
          if (result.isConfirmed) {

            dispatch(borrarUsuarioAction(id))
            
          }
        }) 
     
  }


    useEffect(() => {
      const cargarUsuarios =()=> dispatch(obtenerUsuariosAction())
      cargarUsuarios();
  }, [])

const {data} = listadoUsuarios

  const redireccionarEditar = (id)=>{
    //aqui van los datos de un usuario
    //const userEdit = listadoUsuarios.find(id)
    
    const editarUsuario = data.find(element => element.id === id);

 dispatch(obtenerUsuarioEditar(editarUsuario));
  
   history.push(`/editar/${id}`)
  }
        
   if(cargando){
    return(
      <>
       <Loading description="Cargando lista de usuarios"/>
      </>
    )
  }  
   
   
   return (
        <>
      

        <Table dataSource={listadoUsuarios.data}>
            
        <Column title="id" dataIndex="id" key="id" />
          <Column title="name" dataIndex="name" key="name" />
         <Column title="Email" dataIndex="email" key="email" />
        <Column title="gender" dataIndex="gender" key="gender" />
        <Column title="status" dataIndex="status" key="status" />
      
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
           
            <Space size="middle">
                <a onClick={()=> redireccionarEditar(record.id)}>Editar</a>
              <a onClick={()=>confirmarEliminarUsuario(record.id)}>Eliminar</a>
            </Space>
          )}
        />
      </Table>
      </>
    )
}

