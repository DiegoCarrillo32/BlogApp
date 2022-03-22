import React, { createContext, useState, useEffect, useCallback } from 'react'
import { fetchAPI, fetchWithTokenAPI } from '../helpers/fetch'


interface User {
    ok: boolean,
    dbUser: {
        email: string,
        name: string,
        uid: string
    },
    token: string
}

export const UserContext = createContext({})

export const UserProvider = ({ children }: any) => {

    const [User, setUser] = useState<User>({
        dbUser: {
            email: '',
            name: '',
            uid: ''
        },
        ok: false,
        token: ''
    })

    const [Authenticated, setAuthenticated] = useState(false)
    const [Loading, setLoading] = useState(false)

    const login = async (email: string, password: string) => {

        const res = await fetchAPI('login/', { email, password }, 'POST')
        setLoading(true)
        if (res.ok) {
            setUser(res)
            setAuthenticated(true)
            localStorage.setItem('token', res.token)
            localStorage.setItem('uid', res.dbUser.uid)

        }
        setLoading(false)
        return res.ok

    }


    const logout = () => {
        setUser({
            dbUser: {
                email: '',
                name: '',
                uid: ''
            },
            ok: false,
            token: ''
        })
        setAuthenticated(false)
        localStorage.removeItem('token')
        localStorage.removeItem('uid')

    }


    const checkToken = useCallback(async () => {
        const token = localStorage.getItem('token')
        if (!token) {
            setUser({
                dbUser: {
                    email: '',
                    name: '',
                    uid: ''
                },
                ok: false,
                token: ''
            })
            setAuthenticated(false)
            return false
        }
        setLoading(true)
        const res = await fetchWithTokenAPI('login/renew');
        if (res.ok) {

            localStorage.setItem('token', res.token)

            setUser({
                ok: res.ok,
                dbUser: res.dbUser,
                token: res.token

            })
            setLoading(false)
            setAuthenticated(true)


            return true
        } else {
            setUser({
                dbUser: {
                    email: '',
                    name: '',
                    uid: ''
                },
                ok: false,
                token: ''
            })
            setAuthenticated(false)
            return false
        }
    }, [])



    return (
        <UserContext.Provider value={{
            User, login, Authenticated, logout, checkToken, Loading
        }} >
            {children}
        </UserContext.Provider>
    )
}
