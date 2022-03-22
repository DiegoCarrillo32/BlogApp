import React from 'react'
import '../styles/sidebar.css'
import logo from '../img/DCCODE.jpg'
import { LogoutOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
export const Sidebar = () => {
  const navigate = useNavigate()
  const handleExit = () => {
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