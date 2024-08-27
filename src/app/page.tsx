import { fetchPosts } from '@/lib/api'
import { NextPage } from 'next'
import { Post } from '@/types/blogs'
import PostCard from '@/components/Blog Post/PostCard';

interface Props {}

const Page: NextPage<Props> = async ({}) => {

  const posts = await fetchPosts();
  
  if (!posts) {
    <div className='home__wrap'>
      <div className='home__main'>
        No posts found!
      </div>
    </div>
  }

  return (
    <div className='home__wrap'>
      <div className='home__main'>
        <ul className='home__blogs--list list-none flex flex-col gap-y-4'>
          {posts.map((post: Post) => {
            return (
              <li id={'home-post-' + post?.id} key={post?.id}>
                <PostCard
                  postAttributes={post.attributes}
                />
              </li>
              )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Page