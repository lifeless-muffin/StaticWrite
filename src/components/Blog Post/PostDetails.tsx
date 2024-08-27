import { PostAttributes } from "@/types/blogs"
import ButtonBack from "../ButtonBack"
import fm from "front-matter"
import { marked } from "marked"
import '../../styles/blog.css'

const PostDetails = ({postAttributes}: {postAttributes: PostAttributes}) => {

    const parsedMarkdown = fm(postAttributes.content)
    const htmlString = marked(parsedMarkdown.body)

  return (
    <div className="post-details__wrap text-[rgba(146,146,172,1)]">
        <div className="post-details__main pb-10" >
            <ButtonBack text='All Posts' href="/" />
            <div className="mt-12"></div>
            <h2 className="text-2xl font-bold text-white">{postAttributes.title}</h2>
            <div className="mt-4">
                <span className="font-bold">{postAttributes.date}</span>
            </div>
            <div className="mt-4">
                <p className="text-base">
                    {postAttributes.description}
                </p>
            </div>

            <div className="mt-8 mb-8 w-full h-[1px] bg-slate-700">

            </div>

            <div className="mt-8">
                <div className="blog-content" dangerouslySetInnerHTML={{__html: htmlString}}>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostDetails