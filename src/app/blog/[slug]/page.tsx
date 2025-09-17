import { getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { Mdx } from '@/components/MdxComponents';

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose lg:prose-xl">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-gray-600">{new Date(post.date).toLocaleDateString()}</p>
      <hr />
      <Mdx mdx={post.mdx} />
    </article>
  );
}
