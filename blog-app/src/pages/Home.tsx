
import { Post } from '../components/Post'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import logo from '../img/DCCODE.jpg'
import '../styles/home.css'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { PostContext } from '../context/PostContext'


interface DataPost {
    title:string,
    body:string,
    author:string,
    time:number,
    uid:string
  }
export const Home = () => {
    const {PostM, getPost} = useContext<any>(PostContext)
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

    useEffect(() => {
      
        getPost()
      
    }, [getPost])
    

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

                        
                        PostM.posts.map( ({author,body,time,title,uid}:DataPost) => (
                            <motion.div className='home_section__item' whileHover={{scale:1.01}} >
                                <Post key={uid} author={author} body={body} time={time} title={title} uid={uid} />
                        
                            </motion.div>
                        ) )
                 
                    }
                    <span className='home_section__item load_more'>Cargar mas publicaciones?</span>
                </section>

            </div>

        </>
    )
}
