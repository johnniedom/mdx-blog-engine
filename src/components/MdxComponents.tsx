import { MDXContent } from "@content-collections/mdx/react";

export function Mdx({ mdx }: { mdx: string }) {
  return <MDXContent code={mdx} />;
}
