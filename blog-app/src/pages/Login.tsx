import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/login.css'
import logo from '../img/DCCODE.jpg'
import { fetchAPI } from '../helpers/fetch'
import { UserContext } from '../context/UserContext'

export const Login = () => {
  const navigate = useNavigate()
  const {login} = useContext <any> (UserContext)
  const [Form, setForm] = useState({})

  const onSubmit = async (e:any) => {
    e.preventDefault();
    const {email, password}:any = Form;
    const res = await login(email, password)
    if(res){
      navigate('/dashboard')
    }else{
      alert('CANT GO FURTHER')
    }
    
  }

  const onChange = ({target}:any) => {
    setForm({
      ...Form,
      [ target.name ]: target.value
    })
  
  }

  useEffect(() => {
    
    
    
  }, [])
  

  return (
      <div className='container'>

        <form onSubmit={onSubmit} className='form_container' >
          <img className='form_img' src={logo} ></img>
          <span className='form_label' >Email</span>
          <input className='form_input' onChange={onChange} name='email' ></input>
          <span className='form_label' >Contraseña</span>
          <input className='form_input' onChange={onChange} name='password' autoComplete='off' type={'password'} ></input>
          <button className='form_button' type='submit'>Iniciar sesion</button>

        </form>
      </div>
    
  )
}
