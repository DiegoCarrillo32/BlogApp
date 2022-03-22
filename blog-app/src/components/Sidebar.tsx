import React from 'react'
import '../styles/sidebar.css'
import logo from '../img/DCCODE.jpg'
import { LogoutOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext'
export const Sidebar = () => {
  const navigate = useNavigate()
  const { logout } = useContext <any> (UserContext)
  const handleExit = () => {
    logout()
    navigate('/home')
  }

  return (


    <div className='sidebar_container'>
        <img src={logo} ></img>
        <span className='sidebar_label'>Crear post</span>
        <span className='sidebar_label' onClick={handleExit} >Salir <LogoutOutlined /> </span>
    </div>
  )
}
