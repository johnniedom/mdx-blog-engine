import { allPosts } from "content-collections";
import type { Post } from "content-collections";
export type { Post };

export function getAllPosts(): Post[] {
  return allPosts
    .filter((post: Post) => post.published)
    .sort(
      (a: Post, b: Post) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((post: Post) => post._meta.path === slug);
}
