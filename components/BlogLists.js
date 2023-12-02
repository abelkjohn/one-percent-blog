import React from 'react'

const getPosts = async () => {
    try {
        const res = await fetch('https://one-percent-blog.vercel.app/api/posts', {
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
 const rBlog = blog.reverse()
    return (
        <div className='flex mt-20'>
            <div className='w-4/12 text-right'>
                {rBlog.map(i => {
                    return (
                        <div key={i._id} className='h-52 relative'>
                            <div  className='absolute top-8 right-1'>
                                <p>{i.createdAt.split('').splice(0, 10).join("")}, {i.day}</p>
                                <p> </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='right-0 absolute border-l-2 pl-1 w-8/12 pb-96 '>
                {rBlog.map(i => {
                    return (
                            <div key={i._id} className='flex  justify-start h-52 border-b-2'>
                                <div className='flex flex-col mt-5 pl-2 '>
                                    <h1 className='text-xl font-bold'>{i.title}</h1>
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