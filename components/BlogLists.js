import React from 'react'

const getPosts = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/posts', {
            cache: "no-store"
        })
        if (!res.ok){
            throw new Error("Failed to fetch new posts")
        }

        return res.json()
    } catch (error) {
        console.log("error loading posts")
    }
}

export default async function PostList(){
 const { blog } = await getPosts()

    return JSON.stringify(blog.map(i => i.title))
}