import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb"
import Blog from "../../../models/blog-post"


export async function POST(request){
    const  { title, description, picture, day, skills } = await request.json()
    await connectMongoDB();
    await Blog.create({ title, description, picture, day, skills })
    return NextResponse.json({message: "Blog Created"}, { status: 201 })
}

export async function GET(){
    await connectMongoDB()
    const blog = await Blog.find()
    return NextResponse.json({blog})
}