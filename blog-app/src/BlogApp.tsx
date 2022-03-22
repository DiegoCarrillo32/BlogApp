import React from 'react'
import { PostProvider } from './context/PostContext'
import { UserProvider } from './context/UserContext'
import { AppRouter } from './router/AppRouter'

export const BlogApp = () => {
  return (
    <UserProvider>
      <PostProvider>      
        <AppRouter/>
      </PostProvider>
    </UserProvider>
  )
}
