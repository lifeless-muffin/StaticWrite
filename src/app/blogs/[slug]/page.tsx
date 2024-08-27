import { fetchPosts } from '../../../lib/api/index'
import { NextPage } from 'next'

interface Props {
  params: {slug: string}
}

export async function generateStaticParams() {
  const posts = await fetchPosts();
  if (posts.length > 0) {
    return posts.map((post: any) => ({
      slug: post.attributes.slug,
    }))
  } else {
    return
  }
}


export async function generateMetadata({ params }: { params: { slug: string } }) {
  const posts = await fetchPosts();
  const post = posts.find((p: any) => p.attributes.slug === params.slug);

  return {
    title: post?.attributes?.title || 'Blog Post',
    description: post?.attributes?.description || 'Blog Post Description',
  };
}

const Page: NextPage<Props> = async ({params}) => {
  const { slug } = params;
  const posts = await fetchPosts();
  const post = posts.find((p: any) => p.attributes.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.attributes.title}</h1>
      <p>{post.attributes.description}</p>
      <div>{post.attributes.content}</div>
    </div>
  );
}

export default Page