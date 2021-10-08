import React from 'react';
import 'antd/dist/antd.css';


import {Listado } from '../components/Listado'
export const Home = () => {
    return (
        <div className="container">
   
                    <h1>Listado de Usuarios</h1>
                       <Listado/>
          
        </div>
    )
}