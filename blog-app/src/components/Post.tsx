import React from 'react'
import '../styles/post.css'
import { DislikeOutlined, LikeOutlined, ShareAltOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router'

export const Post = () => {

  const navigate = useNavigate()

  const onClick = () => {
    navigate('/detailedpost')
  }
  return (
    <div className='post_container'>
        <h1 className='post_title' >POST TITLTE</h1>
        <img src=''></img>

        <p className='post_description' > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis unde distinctio animi quidem, necessitatibus voluptatibus architecto iure cupiditate sed consequatur maxime molestiae dolorum commodi laboriosam cumque dolor culpa ipsum quae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga error dolor eos aperiam incidunt nobis maxime, nemo, perferendis harum sequi asperiores, expedita deleniti officiis molestiae. Nemo inventore optio nisi aliquam.</p>
        <div>
          <LikeOutlined/><DislikeOutlined /><ShareAltOutlined />
        </div>
        <span className='post_readmore'  onClick={onClick} > Leer toda la publicacion?</span>
    </div>
  )
}
