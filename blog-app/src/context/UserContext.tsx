import React, { createContext, useState } from 'react'
import { fetchAPI } from '../helpers/fetch'

interface User {
    ok:boolean,
    dbUser:{
        email:string,
        name:string,
        uid:string
    },
    token:string
}

export const UserContext = createContext({})

export const UserProvider = ({children}:any) => {

    const [User, setUser] = useState <User> ({
        dbUser:{
            email:'',
            name:'',
            uid:''
        },
        ok:false,
        token:''
    })

    const [Authenticated, setAuthenticated] = useState(false)

    const login = async (email:string, password:string) => {
        try {
            const res = await fetchAPI('login/', {email, password}, 'POST')
            
            if(res.ok){
                setUser(res)
                setAuthenticated(true)
                return res.ok
            }
        } catch (error) {
            return false;
        }
    }

    const logout = () => {
      setUser({
        dbUser:{
            email:'',
            name:'',
            uid:''
        },
        ok:false,
        token:''
    })
    setAuthenticated(false)
    
    }
  return (
    <UserContext.Provider value={{
        User, login, Authenticated, logout
    }} >
        {children}
    </UserContext.Provider>
  )
}
