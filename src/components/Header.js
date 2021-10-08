import React from "react";


import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
const { SubMenu } = Menu;


export const Header = () => {
  return (

     
    <Menu mode="horizontal">
      
    <Menu.Item  >
        <Link to="/">
            Home
        </Link>
     
    </Menu.Item>
 
   
    <Menu.Item key="alipay">
        <Link  to="/agregarnuevo">
            Agregar usuario
        </Link>
    </Menu.Item>


  </Menu>

  );
};
