import React from 'react';
import {Layout} from 'antd';
import {MenuOutlined} from '@ant-design/icons';
import '../styles/Nav.css';
const {Header} = Layout;

export const Nav = () => {
    return (
        <Header>
             <ul className="left">
                 <li><MenuOutlined className="iconoMenu"/></li>
                 <li><span className="title">Dashboard Menu</span></li>
             </ul>

             <ul className="rigth">
                 <li className="title-rigth">Crud</li>
             </ul>
        </Header>
    )
}
