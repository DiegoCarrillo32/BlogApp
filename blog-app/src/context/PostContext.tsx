import React, { createContext, useState } from 'react'
import { fetchAPI } from '../helpers/fetch';

interface Post {
    ok: boolean,
    posts:[]

}

export const PostContext = createContext({});


export const PostProvider = ({ children }: any) => {

    const [PostM, setPost] = useState<Post>({
        ok:true,
        posts:[]
    })
    const getPost = async () => {

        const res = await fetchAPI('post', null)

        if (res.ok) {
            setPost(res)
        }
        return res.ok
    }


    return (
        <PostContext.Provider value={{
            PostM, getPost
        }}>
            {children}
        </PostContext.Provider>
    )
}
