# MDX Blog Engine

A minimal, type‑safe MDX blog powered by Next.js App Router, Tailwind CSS, and Content Collections. Write posts in `content/posts/*.mdx` and ship a fast, SEO‑friendly blog.

## Quick start

1. Clone and install

```bash
git clone https://github.com/johnniedom/mdx-blog-engine.git
cd mdx-blog-engine
pnpm install
```

2. Run in development

```bash
pnpm dev
```

3. Create a post

- Add a new `.mdx` file under `content/posts` with frontmatter:

```mdx
---
title: "My New Post"
date: "2025-09-18"
description: "Short description of the post."
published: true
---

# My New Post

Write content in Markdown + JSX.
```

## Features

- File‑based content in MDX with type‑safe frontmatter
- List and detail pages under `/blog`
- Clean typography with Tailwind CSS
- Content Collections build/watch integration
- Ready for static export or server rendering

## Project structure

```
.
├── content
│   └── posts
│       ├── hello-world.mdx
│       └── ...
├── src
│   ├── app
│   │   ├── blog
│   │   │   ├── [slug]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components
│   │   └── MdxComponents.tsx
│   └── lib
│       └── posts.ts
├── content-collections.ts
├── next.config.js
├── package.json
└── tailwind.config.js
```

Key folders:

- `content/posts`: Your MDX posts with YAML frontmatter.
- `src/app/blog`: Blog index and post pages.
- `src/components`: Reusable UI components.
- `src/lib`: Utilities for fetching and shaping post data.

## Development

This project runs Content Collections alongside Next.js for smooth authoring:

```bash
pnpm dev
```

- Next.js dev server runs at http://localhost:3000
- Content Collections watches and regenerates types/content as you edit MDX

## Build and deploy

Create an optimized production build:

```bash
pnpm build
pnpm start
```

Deploy anywhere that supports Next.js (e.g., Vercel, Netlify, or your own server).

## Content tips

- Required frontmatter: `title`, `date`, `description`, `published`
- Slug is derived from the file path; the blog route uses `/blog/[slug]`
- Use components from `src/components/MdxComponents.tsx` inside posts

## Configuration

- Tailwind: `tailwind.config.js` and `src/app/globals.css`
- Content schema: `content-collections.ts`
- TypeScript config: `tsconfig.json`

## License

MIT
