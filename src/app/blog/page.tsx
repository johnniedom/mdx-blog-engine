import { getAllPosts, type Post } from '@/lib/posts';
import Link from 'next/link';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post._meta.path}>
            <h2 className="text-2xl font-bold">
              <Link href={`/blog/${post._meta.path}`}>{post.title}</Link>
            </h2>
            <p className="text-gray-600">{new Date(post.date).toLocaleDateString()}</p>
            <p>{post.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
