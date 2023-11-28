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

    return blog.map(i => {
        return <div className='flex '>
            <h1>{i.title}</h1>
            <p>{i.description}</p>
            <p>{i.createdAt.split('').splice(0, 10).join('')}</p>
            <p>{i.skills.map(i => i + ",")}</p>
            <p>{i.day}</p>
        </div>
    })

}