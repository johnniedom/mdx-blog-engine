# MDX Blog Engine Boilerplate

This boilerplate provides a lightweight, file-based blog engine using Next.js and Content Collections.

## Cloning the Repository

To get started with this project, you need to clone the repository from GitHub. You can do this by running the following command in your terminal:

```bash
git clone https://github.com/johnniedom/mdx-blog-engine.git
```

After cloning the repository, navigate to the project directory:

```bash
cd mdx-blog-engine
```

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  **Create new posts:** Add new `.mdx` files to the `content/posts` directory. Make sure they include the required frontmatter (title, date, description).

## Key Technologies

*   **Next.js:** A React framework for building server-side rendered and statically generated web applications.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **MDX:** A format that allows you to write JSX embedded inside Markdown.
*   **Content Collections:** A library that helps you manage your content by creating type-safe collections from your local files.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.

## Project Structure

The project is organized into several key directories and files:

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

### `content/posts`

This directory contains all the blog posts as `.mdx` files. Each file represents a single blog post. The frontmatter of each file (the YAML block at the top) contains the metadata for the post, such as the title, date, and description.

### `src/app/blog`

This directory contains the main pages for the blog.

*   `page.tsx`: This is the blog index page, which displays a list of all available blog posts. It uses the `getAllPosts` function from `src/lib/posts.ts` to fetch the posts.
*   `[slug]/page.tsx`: This is the dynamic route for displaying a single blog post. The `[slug]` part of the path corresponds to the filename of the blog post (without the `.mdx` extension). It uses the `getPostBySlug` function to fetch the content of a specific post.

### `src/components`

This directory contains reusable React components.

*   `MdxComponents.tsx`: This component is responsible for rendering the MDX content of a blog post. It uses the `MDXContent` component from `@content-collections/mdx`.

### `src/lib`

This directory contains helper functions and utilities.

*   `posts.ts`: This file provides functions for accessing the blog post data.
    *   `getAllPosts()`: Returns all posts, sorted by date.
    *   `getPostBySlug(slug)`: Returns a single post that matches the given slug.

### `content-collections.ts`

This is a crucial file that configures how `content-collections` processes your content. It defines a "collection" of posts, specifying:

*   The directory where the content is located (`content/posts`).
*   The schema for the frontmatter of the posts (e.g., `title`, `date`, `description`).
*   How to transform the raw content into a more usable format, such as generating a slug from the filename.

### Configuration Files

*   `next.config.js`: The configuration file for Next.js.
*   `tailwind.config.js`: The configuration file for Tailwind CSS.
*   `postcss.config.cjs`: The configuration file for PostCSS.
*   `tsconfig.json`: The configuration file for TypeScript.

## Content Management

### Creating a New Post

To create a new blog post, simply add a new `.mdx` file to the `content/posts` directory. The file should have a YAML frontmatter block at the top with the required metadata. For example:

```mdx
---
title: "My New Post"
date: "2025-09-18"
description: "This is a short description of my new post."
---

# My New Post

This is the content of my new post. I can use **Markdown** and also embed <span style={{ color: 'red' }}>JSX</span> components.
```

### Modifying an Existing Post

To modify an existing post, simply edit the corresponding `.mdx` file in the `content/posts` directory. The changes will be reflected on the website after the next build.

## Deployment

The application can be deployed to any platform that supports Next.js, such as Vercel, Netlify, or a custom server. To build the application for production, run the following command:

```bash
npm run build
```

This will create an optimized production build in the `.next` directory.

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the styles by modifying the `tailwind.config.js` file and the `src/app/globals.css` file. You can also add your own CSS files or.

### Components

You can create your own custom React components and use them within your MDX posts. To do this, create a new component in the `src/components` directory and then import it into your `.mdx` file.

### Content Schema

You can extend the content schema by modifying the `content-collections.ts` file. For example, you could add a new field for the author of the post or for tags.
