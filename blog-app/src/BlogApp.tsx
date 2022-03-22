import React from 'react'
import { PostProvider } from './context/PostContext'
import { AppRouter } from './router/AppRouter'

export const BlogApp = () => {
  return (
    <PostProvider>      
      <AppRouter/>
    </PostProvider>
  )
}
