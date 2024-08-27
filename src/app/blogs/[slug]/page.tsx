import { Post } from '@/types/blogs';
import { fetchPosts } from '../../../lib/api/index'
import { NextPage } from 'next'
import PostDetails from '@/components/Blog Post/PostDetails';

interface Props {
  params: {slug: string}
}

export async function generateStaticParams() {
  const posts = await fetchPosts();
  if (posts.length > 0) {
    return posts.map((post: Post) => ({
      slug: post.attributes.slug,
    }))
  } else {
    return [];
  }
}


export async function generateMetadata({ params }: { params: { slug: string } }) {
  const posts = await fetchPosts();
  const post = posts.find((post: Post) => post.attributes.slug === params.slug);

  return {
    title: post?.attributes?.title || 'Blog Post',
    description: post?.attributes?.description || 'Blog Post Description',
  };
}

const Page: NextPage<Props> = async ({params}) => {
  const { slug } = params;
  const posts = await fetchPosts();
  const post = posts.find((post: Post) => post.attributes.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <PostDetails postAttributes={post.attributes} />
    </div>
  );
}

export default Page