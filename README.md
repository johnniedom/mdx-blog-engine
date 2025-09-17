# MDX Blog Engine Boilerplate

This boilerplate provides a lightweight, file-based blog engine using Next.js and Content Collections.

## How It Works

The blog is generated from `.mdx` files located in the `content/posts` directory. The `content-collections.ts` file defines the schema for the blog posts and processes them into a type-safe collection that can be easily accessed in the application.

## Key Components

-   **`content-collections.ts`**: The heart of the content system. It defines the `posts` collection, specifying the directory to watch (`content/posts`), the schema for frontmatter (title, date, description), and how to transform the MDX content.

-   **`src/lib/posts.ts`**: Contains helper functions for querying the blog posts. 
    -   `getAllPosts()`: Returns all published posts, sorted by date.
    -   `getPostBySlug()`: Retrieves a single post by its slug (filename).

-   **`src/app/blog/page.tsx`**: The main blog index page. It uses `getAllPosts()` to fetch all posts and renders a list of them.

-   **`src/app/blog/[slug]/page.tsx`**: The page for rendering a single blog post. It uses `getPostBySlug()` to find the correct post and then uses the `Mdx` component to render the content.

-   **`src/components/MdxComponents.tsx`**: A simple component that wraps the `@content-collections/mdx` `MDXContent` component, which is responsible for rendering the compiled MDX code into HTML.

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