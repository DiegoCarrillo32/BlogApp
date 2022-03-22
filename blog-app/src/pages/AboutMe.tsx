import React from 'react'
import '../styles/about.css'
import dc from '../img/diegoc.jpg'
import { Carousel } from '../components/Carousel'

export const AboutMe = () => {
  return (
    <div className='about_container'>
      <div className='about__container_image'>
        <img src={dc} alt='Diego Carrillo' ></img>
      </div>
      <h1>Diego Carrillo</h1>
      <p className='about__container_text'>
        Soy un desarollador frontend con mas de dos años de experiencia en frameworks como Angular y React, tambien he trabajado con mongo, firebase, express en la parte de backend. Cuento con 3 años de carrera universitaria, he invertido mucho
        tiempo en aprendizaje para poder cumplir mis metas y poder ponerle al tanto de las ultimas tecnologias de desarollo web para poder entrar con mucha fuerza al mundo de la programacion!!
      </p>
      <Carousel/>

    </div>
  )
}
