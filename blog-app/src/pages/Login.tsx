import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/login.css'
import logo from '../img/DCCODE.jpg'

export const Login = () => {
  const navigate = useNavigate()
  const [Form, setForm] = useState({})

  const onSubmit = (e:any) => {
    e.preventDefault();
    console.log(Form);
    navigate('/dashboard')
    
    
  }

  const onChange = ({target}:any) => {
    setForm({
      ...Form,
      [ target.name ]: target.value
    })
    
    
  }

  return (
      <div className='container'>

        <form onSubmit={onSubmit} className='form_container' >
          <img className='form_img' src={logo} ></img>
          <span className='form_label' >Usuario</span>
          <input className='form_input' onChange={onChange} name='user' autoComplete='off' ></input>
          <span className='form_label' >Contraseña</span>
          <input className='form_input' onChange={onChange} name='password' autoComplete='off' ></input>
          <button className='form_button' type='submit'>Iniciar sesion</button>

        </form>
      </div>
    
  )
}
