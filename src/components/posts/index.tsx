import { type Post } from "../../posts";
import Link from "next/link";

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <ol className="space-y-4">
    {posts.map(({ slug, title, publishDate, categories }) => (
      <li
        key={slug}
        className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          <Link href={`/blogs/${slug}`}>{title}</Link>
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Published:</strong> {new Date(publishDate).toLocaleDateString()} <strong>Categories:</strong>{" "}
          {categories.map((cat, i) => (
            <span key={cat}>
              {i ? ", " : ""}
              {cat}
            </span>
          ))}
        </p>
      </li>
    ))}
  </ol>
  );
}
