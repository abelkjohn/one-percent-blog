import mongoose, { Schema } from "mongoose"

const postSchema = new Schema(
    {
        title: String,
        description: String,
        picture: String,
        date: Date,
        day: String,
        skills: Array,
    },
    {
        timestamps: true,
    }
)


const Post = mongoose.models.Blog || mongoose.model("Blog", postSchema)

export default Post