import React, { useEffect } from 'react'
import '../styles/post.css'
import { DislikeOutlined, LikeOutlined, ShareAltOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router'


interface DataPost {
  title:string,
  body:string,
  author:string,
  time:number,
  uid:string
}
export const Post = ({author,body,time,title,uid}:DataPost) => {

  const navigate = useNavigate()
  
  
  const onClick = () => {
    navigate('/detailedpost')
  }
 
  
  return (
    <div className='post_container'>
        <h1 className='post_title' > {title} </h1>
        <h4> {author} </h4>
        <img src=''></img>

        <div className='post_description' dangerouslySetInnerHTML={{__html:body}} ></div>
        <span> {time} - {uid} </span>
        <div>
          <LikeOutlined/><DislikeOutlined /><ShareAltOutlined />
        </div>
        <span className='post_readmore'  onClick={onClick} > Leer toda la publicacion?</span>
    </div>
  )
}
