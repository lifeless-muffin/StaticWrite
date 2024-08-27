import { PostAttributes } from "@/types/blogs"
import Button from "../Button"

const PostCard = ({postAttributes}: {postAttributes: PostAttributes}) => {
    return (
        <div className="card__wrap w-full max-w-screen-sm p-9 bg-secondary bg-[rgb(33,33,48)] rounded-md">
            <div className="card__main">
                <h3 className="text-lg font-bold">{postAttributes.title}</h3>
                <div className="mt-3"></div>
                <p className="text-sm max-w-screen-sm text-neutral-400">{postAttributes.description}</p>
                <div className="mt-4"></div>
                <Button text='Read this post' href={`/blogs/${postAttributes.slug}`} />
            </div>
        </div>
    )
}

export default PostCard