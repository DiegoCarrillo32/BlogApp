
import { Post } from '../components/Post'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import logo from '../img/DCCODE.jpg'
import '../styles/home.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
export const Home = () => {
    const navigate = useNavigate()
    const [Clicks, setClicks] = useState(0)
    const onClick = () => {
        
        
      if(Clicks < 10){
          setClicks( Clicks + 1)
      }else {
          alert('You are about to leave the page')
          navigate('/login')
      }
    }

    useEffect(() => {
      
        const interval = setInterval( () => {
          setClicks(0)
          
        }, 10000 )
        
        
      return () => {
        clearInterval(interval)
      }
    }, [])
    

    const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



    return (
        <>
            <header className='home_header' >
                    <span className='home_header__link' > <Link to={'/about'} >About me</Link> </span>
                    <motion.img src={logo} animate={{rotate:360}} transition={{duration:1}} onClick={onClick} ></motion.img>
                    
                    <span className='home_header__link'> <Link to={'/contact'} >Contact me</Link> </span>    
            </header>
            
            <div className='home_container' >
                
                <section className='home_section' >
                    {
                        posts.slice(0, 5).map(element => (
                            <motion.div className='home_section__item' whileHover={{scale:1.01}} >
                                <Post key={element} />
                        
                            </motion.div>
                        ))
                    }
                    <span className='home_section__item load_more'>Cargar mas publicaciones?</span>
                </section>

            </div>

        </>
    )
}
