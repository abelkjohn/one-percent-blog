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

    return (
        <div className='flex mt-20'>
            <div className='w-4/12 text-right'>
                {blog.map(i => {
                    return (
                        <div className='h-52 relative'>
                            <div  className='absolute top-8 right-1'>
                                <p>{i.createdAt.split('').splice(0, 10).join("")}, {i.day}</p>
                                <p> </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='right-0 absolute border-l-2 pl-1 w-8/12 pb-96 '>
                {blog.map(i => {
                    return (
                            <div className='flex  justify-start h-52 border-b-2'>
                                <div className='flex flex-col mt-5 pl-2 '>
                                    <h1>{i.title}</h1>
                                    <p>{i.description}</p>
                                    <p>{i.skills.map((e, i, a) => i === a.length - 1 ? e : `${e}, `)}</p>
                                </div>
                            </div>
                    )
                })}
            </div>
        </div>
    )

}