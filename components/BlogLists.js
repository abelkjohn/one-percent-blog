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
        <div>
            <div>
                {blog.map(i => {
                    return (
                        <div>
                            {i.createdAt}
                        </div>
                    )
                })}
            </div>
            <div className='right-0 absolute border-l-2 w-8/12 pb-96 mt-20'>
                {blog.map(i => {
                    return (
                            <div className='flex  justify-start  '>
                                <div className='flex flex-col'>
                                    <h1>{i.title}</h1>
                                    <p>{i.description}</p>
                                    <p>{i.skills.map(i => i + ",")}</p>
                                </div>
                            </div>
                    )
                })}
            </div>
        </div>
    )

}